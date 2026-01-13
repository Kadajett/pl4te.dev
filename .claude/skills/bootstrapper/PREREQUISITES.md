# Prerequisites Reference

Complete reference for checking and installing prerequisites for each tech stack.

## Quick Check Script

Run this to check all common prerequisites:

```bash
echo "=== System Prerequisites Check ==="
echo ""

echo "Git:"
git --version 2>/dev/null || echo "  NOT INSTALLED"

echo ""
echo "Rust:"
rustc --version 2>/dev/null || echo "  NOT INSTALLED"
cargo --version 2>/dev/null || echo "  Cargo NOT INSTALLED"

echo ""
echo "Node.js:"
node --version 2>/dev/null || echo "  NOT INSTALLED"
npm --version 2>/dev/null || echo "  npm NOT INSTALLED"

echo ""
echo "Python:"
python3 --version 2>/dev/null || echo "  NOT INSTALLED"
pip3 --version 2>/dev/null || echo "  pip NOT INSTALLED"

echo ""
echo ".NET:"
dotnet --version 2>/dev/null || echo "  NOT INSTALLED"

echo ""
echo "=== Check Complete ==="
```

## Installation Instructions by Platform

### Linux (Ubuntu/Debian)

#### Git
```bash
sudo apt update && sudo apt install -y git
```

#### Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

#### Node.js (via nvm - recommended)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

#### Python
```bash
sudo apt update && sudo apt install -y python3 python3-pip python3-venv
```

#### .NET SDK
```bash
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
sudo apt-get update
sudo apt-get install -y dotnet-sdk-8.0
```

#### Tauri Dependencies
```bash
sudo apt update
sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file \
    libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev
```

### macOS

#### Homebrew (if not installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Git
```bash
xcode-select --install  # Includes git
# or
brew install git
```

#### Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

#### Node.js
```bash
brew install node
# or with nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
```

#### Python
```bash
brew install python
```

#### .NET SDK
```bash
brew install --cask dotnet-sdk
```

#### Tauri Dependencies
```bash
xcode-select --install
```

### Windows

Use Windows Terminal or PowerShell for these commands.

#### Chocolatey (Package Manager)
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

#### Git
```powershell
choco install git
```

#### Rust
```powershell
# Download and run rustup-init.exe from https://rustup.rs
choco install rustup
```

#### Node.js
```powershell
choco install nodejs-lts
```

#### Python
```powershell
choco install python
```

#### .NET SDK
```powershell
choco install dotnet-sdk
```

#### Tauri Dependencies
- Install [Microsoft Visual Studio C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- Install [WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

## Version Requirements

| Tool | Minimum Version | Recommended |
|------|-----------------|-------------|
| Git | 2.x | Latest |
| Rust | 1.70+ | Latest stable |
| Node.js | 18.x | 20.x LTS |
| Python | 3.10+ | 3.12 |
| .NET SDK | 8.0 | 8.0 |

## Troubleshooting

### Rust not found after installation
```bash
source $HOME/.cargo/env
# Or add to shell profile:
echo 'source $HOME/.cargo/env' >> ~/.bashrc
```

### Node.js permission errors
Use nvm instead of system Node.js to avoid sudo issues.

### Python virtual environment issues
Ensure `python3-venv` is installed on Linux:
```bash
sudo apt install python3-venv
```

### .NET SDK not recognized
Restart terminal after installation, or add to PATH manually.
