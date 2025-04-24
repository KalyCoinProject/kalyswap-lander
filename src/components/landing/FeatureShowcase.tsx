"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isUpcoming?: boolean;
}

const FeatureCard = ({
  icon,
  title,
  description,
  isUpcoming = false,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-amber-500/50 transition-all duration-300">
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
  const currentFeatures = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Token Swaps",
      description:
        "Instantly exchange any tokens on KalyChain with minimal fees and maximum security.",
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

  const upcomingFeatures = [
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
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
