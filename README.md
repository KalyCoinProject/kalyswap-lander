# KalySwap Landing Page

A modern, responsive landing page for KalySwap DEX built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS and custom animations
- 📱 Fully responsive design
- 🔄 Real-time network statistics from KalyChain
- 🗺️ Interactive roadmap and feature showcase
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Shadcn UI components integration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KalyCoinProject/kalyswap-lander.git
cd kalyswap-lander
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
kalyswap-lander/
├── src/
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   │   ├── landing/    # Landing page specific components
│   │   └── ui/         # Reusable UI components
│   └── lib/            # Utility functions and helpers
├── public/             # Static assets
└── ...config files
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icons

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking

## Live Stats Integration

The landing page integrates with the KalyChain Explorer API to display real-time network statistics:
- Total Transactions
- Daily Transactions
- Total Addresses
- Total Blocks

Data refreshes automatically every 5 minutes.

## Roadmap Features

Current development focus:
1. Advanced Trading Features
   - Limit Orders
   - Token Launchpad Platform
   - DAO Governance Platform

2. Platform Enhancements
   - Cross-chain Integration
   - Yield Farming 2.0
   - Mobile App Release
   - Enhanced Analytics Dashboard

3. Future Developments
   - NFT Marketplace
   - DeFi Lending Protocol
   - Institutional Features
   - Advanced Security Updates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Website: [kalychain.io](https://kalychain.io)
- Twitter: [@KalyChain](https://twitter.com/KalyChain)
- Discord: [Join our community](https://discord.gg/4fDuS3cBJw)
- Telegram: [Join our group](https://t.me/+yj8Ae9lNXmg1Yzkx)
