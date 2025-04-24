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
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  chartData?: number[];
}

const StatCard = ({
  title,
  value,
  change,
  icon,
  chartData = [],
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
          <span className="text-amber-100/60 text-xs ml-1">
            vs last week
          </span>
        </div>
        {chartData.length > 0 && (
          <div className="mt-4 flex items-end space-x-1 h-10">
            {chartData.map((value, i) => (
              <div
                key={i}
                className="bg-amber-500/40 rounded-sm w-full"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        )}
        <Progress value={progress} className="h-1 mt-4 bg-white/5 [&>[role=progressbar]]:bg-amber-500" />
      </CardContent>
    </Card>
  );
};

const StatsDashboard = () => {
  const [tradingVolume, setTradingVolume] = useState("$0");
  const [tvl, setTvl] = useState("$0");
  const [activeUsers, setActiveUsers] = useState("0");
  const [transactions, setTransactions] = useState("0");

  // Simulate loading real-time data
  useEffect(() => {
    const timer = setTimeout(() => {
      setTradingVolume("$12.8M");
      setTvl("$45.2M");
      setActiveUsers("18.4K");
      setTransactions("256K");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const volumeChartData = [30, 70, 45, 60, 80, 65, 75];
  const tvlChartData = [50, 55, 60, 65, 70, 75, 85];
  const usersChartData = [20, 30, 40, 35, 45, 55, 60];
  const txChartData = [40, 50, 35, 45, 60, 55, 65];

  return (
    <section id="stats" className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-black via-stone-950 to-amber-900 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Real-Time Ecosystem{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Metrics
            </span>
          </h2>
          <p className="text-amber-100/80 max-w-2xl mx-auto">
            Track the growth and performance of the KalySwap DEX with live data
            and analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Trading Volume (24h)"
            value={tradingVolume}
            change={12.5}
            icon={<BarChart3 className="h-5 w-5 text-amber-400" />}
            chartData={volumeChartData}
          />

          <StatCard
            title="Total Value Locked"
            value={tvl}
            change={8.3}
            icon={<Wallet className="h-5 w-5 text-amber-400" />}
            chartData={tvlChartData}
          />

          <StatCard
            title="Active Users"
            value={activeUsers}
            change={-2.1}
            icon={<Users className="h-5 w-5 text-amber-400" />}
            chartData={usersChartData}
          />

          <StatCard
            title="Total Transactions"
            value={transactions}
            change={15.7}
            icon={<TrendingUp className="h-5 w-5 text-amber-400" />}
            chartData={txChartData}
          />
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
