"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Wallet,
  Users,
  BarChart3,
  Blocks,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

interface ChainStats {
  total_transactions: string;
  transactions_today: string;
  total_addresses: string;
  total_blocks: string;
}

const StatCard = ({
  title,
  value,
  change,
  icon,
}: StatCardProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-amber-500/50 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-amber-100/80">
          {title}
        </CardTitle>
        <div className="p-2 rounded-full bg-amber-500/20">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="flex items-center mt-1">
          {change > 0 ? (
            <ArrowUpRight className="h-4 w-4 text-green-400 mr-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-400 mr-1" />
          )}
          <span className={change > 0 ? "text-green-400" : "text-red-400"}>
            {Math.abs(change)}%
          </span>
          <span className="text-amber-100/60 text-xs ml-1">vs last week</span>
        </div>
        <Progress
          value={progress}
          className="h-1 mt-4 bg-white/5 [&>[role=progressbar]]:bg-amber-500"
        />
      </CardContent>
    </Card>
  );
};

const formatNumber = (num: string) => {
  const n = parseInt(num);
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return num;
};

const StatsDashboard = () => {
  const [chainStats, setChainStats] = useState<ChainStats>({
    total_transactions: "0",
    transactions_today: "0",
    total_addresses: "0",
    total_blocks: "0",
  });

  useEffect(() => {
    const fetchChainStats = async () => {
      try {
        const response = await fetch("https://kalyscan.io/api/v2/stats");
        const data = await response.json();
        setChainStats({
          total_transactions: data.total_transactions,
          transactions_today: data.transactions_today,
          total_addresses: data.total_addresses,
          total_blocks: data.total_blocks,
        });
      } catch (error) {
        console.error("Failed to fetch chain stats:", error);
      }
    };

    fetchChainStats();
    const interval = setInterval(fetchChainStats, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="stats"
      className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-black via-stone-950 to-amber-900 scroll-mt-20"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Real-Time{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Network Stats
            </span>
          </h2>
          <p className="text-amber-100/80 max-w-2xl mx-auto">
            Track the growth and performance of the KalyChain network with live
            data and analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Transactions"
            value={formatNumber(chainStats.total_transactions)}
            change={8.3}
            icon={<BarChart3 className="h-5 w-5 text-amber-400" />}
          />

          <StatCard
            title="Daily Transactions"
            value={formatNumber(chainStats.transactions_today)}
            change={12.5}
            icon={<TrendingUp className="h-5 w-5 text-amber-400" />}
          />

          <StatCard
            title="Total Addresses"
            value={formatNumber(chainStats.total_addresses)}
            change={15.7}
            icon={<Users className="h-5 w-5 text-amber-400" />}
          />

          <StatCard
            title="Total Blocks"
            value={formatNumber(chainStats.total_blocks)}
            change={5.2}
            icon={<Blocks className="h-5 w-5 text-amber-400" />}
          />
        </div>

        {/* Roadmap Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Development{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Roadmap
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-amber-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-amber-400">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-amber-100/80">
                  <li>• Advanced Trading Features</li>
                  <li>• Limit Orders</li>
                  <li>• Token Launchpad Platform</li>
                  <li>• DAO Governance Platform</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-amber-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-amber-400">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-amber-100/80">
                  <li>• Cross-chain Integration</li>
                  <li>• Yield Farming 2.0</li>
                  <li>• Mobile App Release</li>
                  <li>• Enhanced Analytics Dashboard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-amber-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-amber-400">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-amber-100/80">
                  <li>• NFT Marketplace</li>
                  <li>• DeFi Lending Protocol</li>
                  <li>• Institutional Features</li>
                  <li>• Advanced Security Updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="px-3 py-1 text-xs font-medium text-amber-100/80">
              Data refreshes every 5 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
