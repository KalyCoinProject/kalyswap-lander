import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-4 bg-black/70 backdrop-blur-sm fixed top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/images/logo.png" 
            alt="KalySwap Logo" 
            width={40} 
            height={40}
          />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            KalySwap
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-slate-200 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#platform"
            className="text-slate-200 hover:text-white transition-colors"
          >
            Platform
          </Link>
          <Link
            href="#stats"
            className="text-slate-200 hover:text-white transition-colors"
          >
            Stats
          </Link>
          <Link
            href="#"
            className="text-slate-200 hover:text-white transition-colors"
          >
            Docs
          </Link>
        </nav>

        {/* Launch App Button */}
        <Button
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
          asChild
        >
          <Link
            href="https://app.kalyswap.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </Link>
        </Button>
      </div>
    </header>
  );
}
