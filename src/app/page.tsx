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
      <footer className="w-full py-12 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                KalyChain DEX
              </h3>
              <p className="text-slate-300 text-sm">
                The next generation decentralized exchange built on KalyChain,
                offering seamless trading with advanced features.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Products
              </h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Token Swap</li>
                <li>Liquidity Pools</li>
                <li>Bridge</li>
                <li>Launchpad</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Documentation</li>
                <li>API</li>
                <li>Analytics</li>
                <li>Governance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Twitter</li>
                <li>Discord</li>
                <li>Telegram</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© 2023 KalyChain DEX. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
