"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Coins,
  Layers,
  Rocket,
  BarChart3,
  Wallet,
  Shield,
  Zap,
  ExternalLink,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isUpcoming?: boolean;
  onLearnMore?: () => void;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  isUpcoming?: boolean;
  onLearnMore?: () => void;
}

const FeatureCard = ({
  icon,
  title,
  description,
  isUpcoming = false,
  onLearnMore,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
      onClick={!isUpcoming ? onLearnMore : undefined}
    >
      <Card className={`h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-amber-500/50 transition-all duration-300 ${!isUpcoming ? 'cursor-pointer' : ''}`}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-lg bg-amber-500/20 text-amber-400">
              {icon}
            </div>
            {isUpcoming && (
              <Badge
                variant="secondary"
                className="bg-amber-600/20 text-amber-300"
              >
                Coming Soon
              </Badge>
            )}
          </div>
          <CardTitle className="mt-4 text-white">{title}</CardTitle>
          <CardDescription className="text-amber-100/80">
            {description}
          </CardDescription>
        </CardHeader>
        {!isUpcoming && (
          <CardContent>
            <div className="flex items-center text-sm text-amber-400 font-medium cursor-pointer group">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
};

const FeatureShowcase = () => {
  const [showTokenSwapsDialog, setShowTokenSwapsDialog] = useState(false);

  const currentFeatures: Feature[] = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Token Swaps",
      description:
        "Instantly exchange any tokens on KalyChain with minimal fees and maximum security.",
      onLearnMore: () => setShowTokenSwapsDialog(true),
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Liquidity Pools",
      description:
        "Create and manage liquidity pools for any token pair and earn passive income from trading fees.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description:
        "All transactions are secured by KalyChain's robust blockchain technology and smart contracts.",
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Wallet Integration",
      description:
        "Seamlessly connect your preferred wallet and manage your assets with ease.",
    },
  ];

  const upcomingFeatures: Feature[] = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "NFT Liquidity Positions",
      description:
        "Provide liquidity and receive NFTs representing your position, similar to Uniswap v3.",
      isUpcoming: true,
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Leveraged Trading",
      description:
        "Access leveraged trading pairs to maximize your potential returns in the KalyChain ecosystem.",
      isUpcoming: true,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Enhanced Staking Rewards",
      description:
        "Earn higher rewards with our updated staking system designed to incentivize long-term holders.",
      isUpcoming: true,
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Integrated Launchpad",
      description:
        "Participate in token launches directly from our unified platform with streamlined KYC processes.",
      isUpcoming: true,
    },
  ];

  return (
    <>
      <section className="w-full py-20 bg-gradient-to-br from-black via-stone-950 to-amber-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Powerful DeFi Features
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Experience the future of decentralized finance with KalySwap DEX's
              comprehensive suite of features
            </p>
          </motion.div>

          <div className="mb-20 px-4 md:px-6 lg:px-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-white"
            >
              Current Features
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    onLearnMore={feature.onLearnMore}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="px-4 md:px-6 lg:px-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-white"
            >
              Coming Soon
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    isUpcoming={feature.isUpcoming}
                    onLearnMore={feature.onLearnMore}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showTokenSwapsDialog} onOpenChange={setShowTokenSwapsDialog}>
        <DialogContent className="bg-stone-950 border-white/20 text-white">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-amber-500/20 text-amber-400">
                <Coins className="h-6 w-6" />
              </div>
              <DialogTitle className="text-xl">Token Swaps</DialogTitle>
            </div>
            <DialogDescription className="text-amber-100/80 pt-4 space-y-4">
              <p>
                KalySwap currently implements the battle-tested Uniswap v2 protocol pattern,
                providing secure and efficient token swaps on the KalyChain network. This
                allows for seamless trading of any KRC-20 tokens with automated market making
                and liquidity provision.
              </p>
              <p>
                In our upcoming updates, we'll be transitioning to NFT Liquidity Positions,
                similar to Uniswap v3. This upgrade will offer liquidity providers more
                control over their price ranges and potentially higher capital efficiency.
              </p>
              <div className="pt-4">
                <a
                  href="https://app.kalyswap.io/#/swap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Try Token Swaps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeatureShowcase;
