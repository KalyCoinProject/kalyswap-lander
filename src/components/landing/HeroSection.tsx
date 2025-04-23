"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText1?: string;
  ctaText2?: string;
}

const HeroSection = ({
  title = "Next-Gen Decentralized Exchange on KalyChain",
  subtitle = "Experience lightning-fast swaps, advanced liquidity pools, and seamless trading in a secure, decentralized environment",
  ctaText1 = "Swap Tokens",
  ctaText2 = "Create Liquidity Pool",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-gradient-to-br from-black via-stone-950 to-amber-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-[10%] left-[20%] w-64 h-64 rounded-full bg-amber-500 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full bg-amber-600 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[30%] w-48 h-48 rounded-full bg-amber-700 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated chart lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-amber-500/50"
            style={{
              top: `${20 + i * 8}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] bg-amber-500/50"
            style={{
              left: `${10 + i * 9}%`,
              top: 0,
              bottom: 0,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i / 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Trading chart animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] opacity-30">
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            d="M0,100 C50,90 100,180 150,120 C200,60 250,120 300,150 C350,180 400,120 450,60 C500,0 550,40 600,80 C650,120 700,180 750,140 C800,100 850,60 900,100 C950,140 1000,100 1000,100"
            fill="none"
            stroke="rgba(245,158,11,0.5)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,150 C50,180 100,120 150,90 C200,60 250,90 300,120 C350,150 400,90 450,30 C500,0 550,60 600,90 C650,120 700,150 750,120 C800,90 850,60 900,90 C950,120 1000,150 1000,150"
            fill="none"
            stroke="rgba(251,191,36,0.5)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* 3D Ecosystem Representation */}
      <motion.div
        className="absolute right-[10%] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px]"
        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative w-full h-full">
          {/* Central platform hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg flex items-center justify-center z-10"
            animate={{
              boxShadow: [
                "0 0 20px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(251, 191, 36, 0.7)",
                "0 0 20px rgba(251, 191, 36, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Layers className="w-12 h-12 text-white" />
          </motion.div>

          {/* Orbiting elements */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-16 h-16 rounded-lg bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center"
              style={{
                transformOrigin: "center center",
              }}
              initial={{
                x: Math.cos((angle * Math.PI) / 180) * 150 - 32,
                y: Math.sin((angle * Math.PI) / 180) * 150 - 32,
              }}
              animate={{
                x: [
                  Math.cos((angle * Math.PI) / 180) * 150 - 32,
                  Math.cos(((angle + 360) * Math.PI) / 180) * 150 - 32,
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * 150 - 32,
                  Math.sin(((angle + 360) * Math.PI) / 180) * 150 - 32,
                ],
              }}
              transition={{
                duration: 20 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <BarChart2 className="w-8 h-8 text-white/80" />
            </motion.div>
          ))}

          {/* Connecting lines */}
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={200 + Math.cos((angle * Math.PI) / 180) * 150}
                  y2={200 + Math.sin((angle * Math.PI) / 180) * 150}
                  stroke="rgba(251,191,36,0.2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-amber-100 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {ctaText1} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {ctaText2}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
