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
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Token Swap</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Liquidity Pools</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Bridge</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Launchpad</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-amber-100/80 text-sm">
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">API</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Analytics</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Governance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">Connect</h4>
              <ul className="space-y-2 text-amber-100/80 text-sm">
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Discord</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Telegram</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">GitHub</li>
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
