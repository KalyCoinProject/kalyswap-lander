import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import FeatureShowcase from "@/components/landing/FeatureShowcase";
import PlatformPreview from "@/components/landing/PlatformPreview";
import StatsDashboard from "@/components/landing/StatsDashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Platform Preview */}
      <PlatformPreview />

      {/* Stats Dashboard */}
      <StatsDashboard />

      {/* Footer */}
      <footer className="w-full py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 mb-4">
                KalySwap DEX
              </h3>
              <p className="text-amber-100/80 text-sm">
                The next generation decentralized exchange built on KalyChain,
                offering seamless trading with advanced features.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">
                Products
              </h4>
              <ul className="space-y-2 text-amber-100/80 text-sm">
                <li>
                  <a 
                    href="https://app.kalyswap.io/#/swap" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Token Swap
                  </a>
                </li>
                <li>
                  <a 
                    href="https://app.kalyswap.io/#/pool" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Liquidity Pools
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bridge.kalychain.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Bridge
                  </a>
                </li>
                <li>
                  <span className="hover:text-amber-400 transition-colors cursor-pointer opacity-50">
                    Launchpad (Coming Soon)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-amber-100/80 text-sm">
                <li>
                  <a 
                    href="https://docs.kalychain.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://kalyscan.io/api-docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a 
                    href="https://kalyscan.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Block Explorer
                  </a>
                </li>
                <li>
                  <a 
                    href="https://dao.kalychain.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Governance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">Connect</h4>
              <ul className="space-y-2 text-amber-100/80 text-sm">
                <li>
                  <a 
                    href="https://twitter.com/KalyChain" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://discord.gg/4fDuS3cBJw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/+yj8Ae9lNXmg1Yzkx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/KalyCoinProject" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-500/20 mt-8 pt-8 text-center text-amber-100/60 text-sm">
            <p>© 2025 KalySwap DEX. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <span className="hover:text-amber-400 transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-amber-400 transition-colors cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
