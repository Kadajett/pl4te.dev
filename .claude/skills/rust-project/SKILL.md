---
name: rust-project
description: Bootstrap Rust projects with Cargo. Use when creating Rust applications, CLI tools, libraries, or when the user wants to set up a new Rust codebase with best practices.
---

# Rust Project Bootstrapper

Creates production-ready Rust projects with modern tooling and best practices.

## Prerequisites

Check that Rust is installed:

```bash
rustc --version && cargo --version
```

If not installed, install via rustup:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

## Project Types

### Binary (Application/CLI)

```bash
cargo new PROJECT_NAME
cd PROJECT_NAME
```

### Library

```bash
cargo new --lib PROJECT_NAME
cd PROJECT_NAME
```

### Workspace (Multiple Crates)

```bash
mkdir PROJECT_NAME && cd PROJECT_NAME
cat > Cargo.toml << 'EOF'
[workspace]
resolver = "2"
members = [
    "crates/*",
]
EOF
mkdir -p crates
```

## Recommended Project Structure

```
project-name/
├── Cargo.toml
├── Cargo.lock
├── .gitignore
├── README.md
├── src/
│   ├── main.rs (or lib.rs)
│   └── ...
├── tests/
│   └── integration_tests.rs
├── benches/
│   └── benchmarks.rs
└── examples/
    └── example.rs
```

## Essential Dependencies to Consider

Add these based on project needs:

```toml
[dependencies]
# Error handling
anyhow = "1.0"           # Application error handling
thiserror = "2.0"        # Library error definitions

# CLI (for applications)
clap = { version = "4", features = ["derive"] }

# Async runtime
tokio = { version = "1", features = ["full"] }

# Serialization
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"

# Logging
tracing = "0.1"
tracing-subscriber = "0.3"

[dev-dependencies]
# Testing
pretty_assertions = "1.0"
```

## Cargo.toml Best Practices

```toml
[package]
name = "project-name"
version = "0.1.0"
edition = "2024"
rust-version = "1.83"
authors = ["Your Name <email@example.com>"]
description = "A brief description"
license = "MIT OR Apache-2.0"
repository = "https://github.com/username/project-name"
keywords = ["keyword1", "keyword2"]
categories = ["category"]

[lints.rust]
unsafe_code = "forbid"

[lints.clippy]
all = "warn"
pedantic = "warn"
nursery = "warn"

[profile.release]
lto = true
codegen-units = 1
strip = true
```

## Tooling Setup

### Install recommended tools

```bash
# Formatter and linter (usually included)
rustup component add rustfmt clippy

# Code coverage
cargo install cargo-llvm-cov

# Dependency auditing
cargo install cargo-audit

# Unused dependencies
cargo install cargo-udeps

# Better test output
cargo install cargo-nextest
```

### Create rustfmt.toml

```toml
edition = "2024"
max_width = 100
use_small_heuristics = "Max"
imports_granularity = "Crate"
group_imports = "StdExternalCrate"
```

### Create .cargo/config.toml

```toml
[alias]
t = "nextest run"
c = "clippy --all-targets --all-features"
b = "build --release"

[build]
rustflags = ["-D", "warnings"]
```

## GitHub Actions CI

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  CARGO_TERM_COLOR: always
  RUSTFLAGS: "-Dwarnings"

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: dtolnay/rust-toolchain@stable
        with:
          components: clippy, rustfmt
      - uses: Swatinem/rust-cache@v2
      - name: Check formatting
        run: cargo fmt --all -- --check
      - name: Clippy
        run: cargo clippy --all-targets --all-features
      - name: Test
        run: cargo test --all-features
      - name: Build
        run: cargo build --release
```

## Post-Setup Checklist

After creating the project:

1. [ ] Initialize git: `git init`
2. [ ] Create a meaningful README.md
3. [ ] Add LICENSE file (MIT or Apache-2.0 recommended)
4. [ ] Set up pre-commit hooks for formatting
5. [ ] Configure IDE (rust-analyzer settings)
6. [ ] Add to CI/CD pipeline
