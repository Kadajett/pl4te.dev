#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import prompts from 'prompts'
import pc from 'picocolors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const TEMPLATE_DIR = path.join(__dirname, '..', 'template')

const packageManagers = {
  npm: {
    name: 'npm',
    install: 'npm install',
    run: 'npm run',
  },
  yarn: {
    name: 'yarn',
    install: 'yarn',
    run: 'yarn',
  },
  pnpm: {
    name: 'pnpm',
    install: 'pnpm install',
    run: 'pnpm',
  },
  bun: {
    name: 'bun',
    install: 'bun install',
    run: 'bun run',
  },
}

function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent || ''
  if (userAgent.startsWith('yarn')) return 'yarn'
  if (userAgent.startsWith('pnpm')) return 'pnpm'
  if (userAgent.startsWith('bun')) return 'bun'
  return 'npm'
}

function isValidPackageName(name) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(name)
}

function toValidPackageName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const file of fs.readdirSync(src)) {
    const srcFile = path.join(src, file)
    const destFile = path.join(dest, file)
    copy(srcFile, destFile)
  }
}

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

async function main() {
  console.log()
  console.log(pc.cyan(pc.bold('  Create TanStack Start + shadcn/ui App')))
  console.log()

  // Get project name from args or prompt
  let projectName = process.argv[2]

  if (!projectName) {
    const response = await prompts({
      type: 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-tanstack-app',
      validate: (value) => {
        if (!value) return 'Project name is required'
        return true
      },
    })

    if (!response.projectName) {
      console.log(pc.red('Operation cancelled'))
      process.exit(1)
    }

    projectName = response.projectName
  }

  const targetDir = path.resolve(process.cwd(), projectName)
  const packageName = toValidPackageName(projectName)

  // Check if directory exists
  if (fs.existsSync(targetDir)) {
    const { overwrite } = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: `Directory ${pc.yellow(projectName)} already exists. Remove existing files and continue?`,
      initial: false,
    })

    if (!overwrite) {
      console.log(pc.red('Operation cancelled'))
      process.exit(1)
    }

    fs.rmSync(targetDir, { recursive: true, force: true })
  }

  // Detect or prompt for package manager
  const detectedPM = detectPackageManager()

  // Check for --use-* flags
  let selectedPM = null
  for (const pm of Object.keys(packageManagers)) {
    if (process.argv.includes(`--use-${pm}`)) {
      selectedPM = pm
      break
    }
  }

  if (!selectedPM) {
    const { packageManager } = await prompts({
      type: 'select',
      name: 'packageManager',
      message: 'Select a package manager:',
      choices: [
        { title: 'npm', value: 'npm' },
        { title: 'yarn', value: 'yarn' },
        { title: 'pnpm', value: 'pnpm' },
        { title: 'bun', value: 'bun' },
      ],
      initial: Object.keys(packageManagers).indexOf(detectedPM),
    })

    if (!packageManager) {
      console.log(pc.red('Operation cancelled'))
      process.exit(1)
    }

    selectedPM = packageManager
  }

  const pm = packageManagers[selectedPM]

  // Copy template
  console.log()
  console.log(`  ${pc.cyan('Scaffolding project in')} ${pc.yellow(targetDir)}...`)
  console.log()

  copyDir(TEMPLATE_DIR, targetDir)

  // Update package.json with project name
  const pkgPath = path.join(targetDir, 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkg.name = packageName
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')

  // Rename files that can't have dots in template (npm strips them on publish)
  const renames = [
    ['gitignore', '.gitignore'],
    ['prettierignore', '.prettierignore'],
    ['vscode', '.vscode'],
    ['claude', '.claude'],
  ]

  for (const [from, to] of renames) {
    const fromPath = path.join(targetDir, from)
    const toPath = path.join(targetDir, to)
    if (fs.existsSync(fromPath)) {
      fs.renameSync(fromPath, toPath)
    }
  }

  // Install dependencies
  console.log(`  ${pc.cyan('Installing dependencies with')} ${pc.yellow(pm.name)}...`)
  console.log()

  try {
    execSync(pm.install, {
      cwd: targetDir,
      stdio: 'inherit',
    })
  } catch (error) {
    console.log()
    console.log(pc.red('Failed to install dependencies.'))
    console.log(pc.dim('You can try installing manually:'))
    console.log()
    console.log(`  cd ${projectName}`)
    console.log(`  ${pm.install}`)
    console.log()
    process.exit(1)
  }

  // Success message
  console.log()
  console.log(pc.green('  Done! ') + 'Your project is ready.')
  console.log()
  console.log('  Next steps:')
  console.log()
  console.log(`  ${pc.cyan('cd')} ${projectName}`)
  console.log(`  ${pc.cyan(pm.run)} dev`)
  console.log()
  console.log(pc.dim('  Happy coding!'))
  console.log()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
