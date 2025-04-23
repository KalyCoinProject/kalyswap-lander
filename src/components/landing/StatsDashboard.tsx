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
    <Card className="bg-card border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="p-2 rounded-full bg-primary/10">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center mt-1">
          {change > 0 ? (
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span className={change > 0 ? "text-green-500" : "text-red-500"}>
            {Math.abs(change)}%
          </span>
          <span className="text-muted-foreground text-xs ml-1">
            vs last week
          </span>
        </div>
        {chartData.length > 0 && (
          <div className="mt-4 flex items-end space-x-1 h-10">
            {chartData.map((value, i) => (
              <div
                key={i}
                className="bg-primary/60 rounded-sm w-full"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        )}
        <Progress value={progress} className="h-1 mt-4" />
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
    <section className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Real-Time Ecosystem Metrics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track the growth and performance of the KalyChain DEX with live data
            and analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Trading Volume (24h)"
            value={tradingVolume}
            change={12.5}
            icon={<BarChart3 className="h-5 w-5 text-primary" />}
            chartData={volumeChartData}
          />

          <StatCard
            title="Total Value Locked"
            value={tvl}
            change={8.3}
            icon={<Wallet className="h-5 w-5 text-primary" />}
            chartData={tvlChartData}
          />

          <StatCard
            title="Active Users"
            value={activeUsers}
            change={-2.1}
            icon={<Users className="h-5 w-5 text-primary" />}
            chartData={usersChartData}
          />

          <StatCard
            title="Total Transactions"
            value={transactions}
            change={15.7}
            icon={<TrendingUp className="h-5 w-5 text-primary" />}
            chartData={txChartData}
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-muted">
            <span className="px-3 py-1 text-xs font-medium">
              Data refreshes every 5 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
