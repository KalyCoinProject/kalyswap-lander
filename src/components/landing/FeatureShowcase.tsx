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
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full bg-background border-border hover:border-primary/50 transition-all duration-300">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            {isUpcoming && (
              <Badge
                variant="secondary"
                className="bg-secondary/20 text-secondary"
              >
                Coming Soon
              </Badge>
            )}
          </div>
          <CardTitle className="mt-4">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-primary font-medium cursor-pointer group">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
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
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful DeFi Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of decentralized finance with KalyChain DEX's
            comprehensive suite of features
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
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

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
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
