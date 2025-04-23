"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Layers, Rocket } from "lucide-react";

interface PlatformFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  mockupImage: string;
}

export default function PlatformPreview() {
  const [activeTab, setActiveTab] = useState("trading");

  const platformFeatures: PlatformFeature[] = [
    {
      id: "trading",
      title: "Advanced Trading",
      description:
        "Experience seamless token swaps with real-time price charts, limit orders, and advanced trading tools.",
      icon: <BarChart3 className="h-6 w-6" />,
      mockupImage:
        "https://images.unsplash.com/photo-1642790551116-18abb80dce8d?w=800&q=80",
    },
    {
      id: "bridge",
      title: "Cross-Chain Bridge",
      description:
        "Transfer assets seamlessly between KalyChain and other major blockchains with our secure bridge technology.",
      icon: <Layers className="h-6 w-6" />,
      mockupImage:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    },
    {
      id: "launchpad",
      title: "Token Launchpad",
      description:
        "Launch your project on KalyChain with our comprehensive launchpad solution for fair and transparent token distribution.",
      icon: <Rocket className="h-6 w-6" />,
      mockupImage:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-black via-stone-950 to-amber-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
            One Platform,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Unlimited Possibilities
            </span>
          </h2>
          <p className="text-amber-100/80 md:text-xl max-w-[800px]">
            Experience the future of decentralized finance with our unified
            platform that brings together trading, bridging, and launching
            capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto">
          <Tabs
            defaultValue="trading"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <TabsList className="grid grid-cols-3 w-full md:w-auto bg-white/10 backdrop-blur-md border-white/20">
                {platformFeatures.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="flex items-center gap-2 px-4 py-2 text-amber-100 data-[state=active]:text-amber-400 data-[state=active]:bg-amber-400/10"
                  >
                    {feature.icon}
                    <span className="hidden md:inline">{feature.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-white/20 text-amber-100 hover:text-amber-400 hover:bg-white/10">
                  View Documentation
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                  Try Beta Version
                </Button>
              </div>
            </div>

            {platformFeatures.map((feature) => (
              <TabsContent
                key={feature.id}
                value={feature.id}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-amber-100/80">
                      {feature.description}
                    </p>

                    <Card className="overflow-hidden border-white/20 bg-white/10 backdrop-blur-md">
                      <CardContent className="p-6 space-y-4">
                        <h4 className="font-medium text-white">Key Features</h4>
                        <ul className="space-y-2">
                          {feature.id === "trading" && (
                            <>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>Real-time price charts and market data</span>
                              </li>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>Limit and market orders with low fees</span>
                              </li>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>NFT liquidity positions for optimal yields</span>
                              </li>
                            </>
                          )}
                          {feature.id === "bridge" && (
                            <>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>Support for 10+ major blockchains</span>
                              </li>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>Fast confirmation times and low fees</span>
                              </li>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>Secure multi-signature validation</span>
                              </li>
                            </>
                          )}
                          {feature.id === "launchpad" && (
                            <>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>Fair token distribution mechanisms</span>
                              </li>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>KYC and project verification</span>
                              </li>
                              <li className="flex items-center gap-2 text-amber-100">
                                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                                <span>Post-launch liquidity management</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </CardContent>
                    </Card>

                    <Button className="mt-4 group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                      Explore {feature.title}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  <div className="relative order-1 md:order-2">
                    <div className="aspect-video overflow-hidden rounded-lg border-white/20 bg-white/10 backdrop-blur-md shadow-xl">
                      <img
                        src={feature.mockupImage}
                        alt={`${feature.title} interface preview`}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                    </div>

                    <div className="absolute -bottom-4 -right-4 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-lg p-3 shadow-lg">
                      <div className="text-sm font-medium text-amber-100">Coming Q3 2023</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="flex justify-center mt-12 md:hidden">
          <Button variant="outline" size="sm" className="mr-2 border-white/20 text-amber-100 hover:text-amber-400 hover:bg-white/10">
            View Documentation
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
            Try Beta Version
          </Button>
        </div>
      </div>
    </section>
  );
}
