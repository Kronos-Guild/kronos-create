# 🏛️ Kronos Create

<div align="center">
  <img src="https://img.shields.io/badge/solana-%2300FFA3.svg?style=for-the-badge&logo=solana&logoColor=white" alt="Solana" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white" alt="Web3.js" />
</div>

<div align="center">
  <h3>The fastest way to create production-ready Solana dApps</h3>
  <p>Everything you need to build on Solana, pre-configured and ready to go.</p>
</div>

---

## 🚧 Current Status

**Kronos Create is in active development!** 🚀

The CLI tool is functional and ready for basic project scaffolding, but many of the advanced features described below are planned for future releases. Here's what's available now vs. what's coming:

### ✅ Available Now
- Basic project scaffolding
- TypeScript support
- Simple CLI interface
- Project name configuration

### 🔮 Coming Soon
- Multiple template options (DeFi, NFT, Gaming, etc.)
- Interactive template selection
- Wallet adapter pre-configuration
- Analytics integration
- Advanced CLI options
- Comprehensive testing setup

**Want to contribute or follow progress?** Check out our [GitHub repository](https://github.com/kronos-labs/kronos-create) and join our [Discord community](https://discord.gg/kronos-labs)!

---

## 🚀 Quick Start

Create a new Solana project in seconds:

```bash
npx kronos-create@latest my-solana-app
cd my-solana-app
npm run dev
```

Or with pnpm:

```bash
pnpm create kronos-create@latest my-solana-app
cd my-solana-app
pnpm dev
```

## ✨ Features

- **⚡ Lightning Fast**: Get started with Solana development in under 2 minutes
- **🏗️ Multiple Templates**: Choose from various pre-built templates for different use cases
- **📱 Modern Stack**: Built with Next.js 14, TypeScript, and the latest Solana tooling
- **🔧 Pre-configured**: Wallet adapters, RPC connections, and development tools ready out of the box
- **🎨 Beautiful UI**: Styled with Tailwind CSS and modern design patterns
- **🔐 Wallet Integration**: Support for Phantom, Solflare, and other popular Solana wallets
- **📊 Analytics Ready**: Optional analytics integration for production apps
- **🧪 Testing Setup**: Comprehensive testing environment with Jest and Anchor testing framework

## 🛠️ Planned Templates

> **Coming Soon!** The following templates are currently in development and will be available in upcoming releases.

### DeFi Applications 
- **DEX Template**: Decentralized exchange with swap functionality
- **Staking Platform**: Token staking and rewards distribution
- **Lending Protocol**: Lending and borrowing platform

### NFT Projects
- **NFT Marketplace**: Complete marketplace with minting and trading
- **NFT Collection**: Art collection with minting interface
- **NFT Utility**: NFT-gated applications and utilities

### Gaming
- **Web3 Game**: Basic game template with on-chain assets
- **Tournament Platform**: Gaming tournaments with token rewards

### DePIN & Infrastructure
- **DePIN Node**: Decentralized physical infrastructure template
- **Oracle Service**: Price feed and data oracle implementation

### Basic Templates
- **Minimal**: Clean starting point with basic wallet connection
- **Full-stack**: Complete dApp with backend integration

## 📋 Prerequisites

- **Node.js** 18.0.0 or later
- **npm**, **yarn**, or **pnpm**
- **Git** (for cloning templates)

## 🎯 Usage

### Interactive Mode

```bash
npx kronos-create@latest
```

Follow the prompts to:
1. Choose your project name
2. Select a template
3. Configure wallet adapters
4. Set up analytics (optional)
5. Choose your package manager

### CLI Arguments

```bash
npx kronos-create@latest [project-name] [options]
```

#### Options

- `--template <template-name>`: Skip template selection
- `--typescript`: Enable TypeScript (default)
- `--javascript`: Use JavaScript instead of TypeScript
- `--tailwind`: Include Tailwind CSS (default)
- `--no-tailwind`: Skip Tailwind CSS
- `--analytics`: Enable analytics tracking
- `--no-analytics`: Disable analytics tracking
- `--package-manager <npm|yarn|pnpm>`: Choose package manager
- `--git`: Initialize git repository (default)
- `--no-git`: Skip git initialization

#### Examples

```bash
# Create a DEX template with npm
npx kronos-create@latest my-dex --template dex --package-manager npm

# Create a minimal JavaScript project
npx kronos-create@latest simple-app --template minimal --javascript

# Create an NFT marketplace without analytics
npx kronos-create@latest nft-market --template nft-marketplace --no-analytics
```

## 🏗️ Project Structure

```
my-solana-app/
├── components/           # React components
│   ├── wallet/          # Wallet connection components
│   ├── ui/              # UI components
│   └── providers/       # Context providers
├── lib/                 # Utility functions
│   ├── anchor/          # Anchor program utilities
│   ├── solana/          # Solana web3 helpers
│   └── constants/       # App constants
├── pages/               # Next.js pages
├── programs/            # Anchor/Native programs (if applicable)
├── public/              # Static assets
├── styles/              # Global styles
├── tests/               # Test files
├── anchor.toml          # Anchor configuration
├── solana.config.js     # Solana configuration
└── package.json
```

## 🔧 Configuration

### Wallet Adapters

Configure supported wallets in `lib/wallet-adapters.ts`:

```typescript
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';

export const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
  // Add more wallet adapters
];
```

### RPC Configuration

Set up your RPC endpoints in `lib/constants/rpc.ts`:

```typescript
export const RPC_ENDPOINTS = {
  mainnet: process.env.NEXT_PUBLIC_MAINNET_RPC || 'https://api.mainnet-beta.solana.com',
  devnet: process.env.NEXT_PUBLIC_DEVNET_RPC || 'https://api.devnet.solana.com',
  testnet: process.env.NEXT_PUBLIC_TESTNET_RPC || 'https://api.testnet.solana.com',
};
```

### Environment Variables

Create a `.env.local` file:

```bash
# RPC Endpoints
NEXT_PUBLIC_MAINNET_RPC=your_mainnet_rpc
NEXT_PUBLIC_DEVNET_RPC=your_devnet_rpc

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_WRITE_KEY=your_analytics_key

# App Configuration
NEXT_PUBLIC_APP_NAME=My Solana App
NEXT_PUBLIC_NETWORK=devnet
```

## 🚀 Development

### Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Run Tests

```bash
npm run test
# or
yarn test
# or
pnpm test
```

### Deploy

```bash
npm run deploy
# or
yarn deploy
# or
pnpm deploy
```

## 🧪 Testing

Kronos Create includes a comprehensive testing setup:

- **Unit Tests**: Component and utility function tests with Jest
- **Integration Tests**: Full dApp functionality testing
- **Anchor Tests**: Smart contract testing with Anchor framework
- **E2E Tests**: End-to-end testing with Playwright

Run specific test suites:

```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# Anchor tests
npm run test:anchor

# E2E tests
npm run test:e2e
```

## 📚 Documentation

- [Getting Started Guide](https://docs.kronos-labs.com/getting-started)
- [Template Documentation](https://docs.kronos-labs.com/templates)
- [API Reference](https://docs.kronos-labs.com/api)
- [Deployment Guide](https://docs.kronos-labs.com/deployment)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the CLI: `pnpm build`
4. Link for local development: `pnpm link-cli`

### Adding New Templates

1. Create template in `src/templates/`
2. Add template configuration to `src/constants/templates.ts`
3. Update tests and documentation
4. Submit a pull request

## 🛟 Support

- **Documentation**: [docs.kronos-labs.com](https://docs.kronos-labs.com)
- **Discord**: [Join our community](https://discord.gg/kronos-labs)
- **GitHub Issues**: [Report bugs](https://github.com/kronos-labs/kronos-create/issues)
- **Twitter**: [@KronosLabs](https://twitter.com/KronosLabs)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Solana Foundation](https://solana.org/) for the amazing blockchain infrastructure
- [Anchor Framework](https://anchor-lang.com/) for smart contract development
- [Next.js](https://nextjs.org/) for the React framework
- [create-web3-app](https://github.com/MetaMask/create-web3-app) for inspiration

---

<div align="center">
  <p>Built with ❤️ by the Kronos Labs team</p>
  <p>
    <a href="https://kronos-labs.com">Website</a> •
    <a href="https://docs.kronos-labs.com">Documentation</a> •
    <a href="https://twitter.com/KronosLabs">Twitter</a>
  </p>
</div>
