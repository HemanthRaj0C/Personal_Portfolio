"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import TargetCursor from "@/components/TargetCursor";
import { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import NavBar from "@/components/pages/NavBar";
import Footer from "@/components/pages/Footer";

export default function Home() {
  const [gridSize, setGridSize] = useState({ rows: 20, cols: 35 });

  useEffect(() => {
    const calculateGrid = () => {
      const cellSize = 56;
      const rows = Math.ceil(window.innerHeight / cellSize) + 2;
      const cols = Math.ceil(window.innerWidth / cellSize) + 2;
      setGridSize({ rows, cols });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started working on advanced web animations and interactive experiences.
            Explored cutting-edge technologies like Framer Motion and Three.js to create
            immersive user interfaces.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Mastered modern React patterns and Next.js framework. Built multiple full-stack
            applications with focus on performance optimization and user experience.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Began my journey into web development. Learned the fundamentals of HTML, CSS,
            JavaScript, and started exploring modern frameworks and libraries.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full bg-black overflow-x-hidden">
      {/* NavBar */}
      <NavBar />
      
      {/* Background Ripple Effect */}
      <BackgroundRippleEffect 
        rows={gridSize.rows}
        cols={gridSize.cols}
        cellSize={56}
      />
      
      {/* Target Cursor */}
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={0}
        hideDefaultCursor={true}
      />
      
      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-8 pointer-events-none">
        <div className="text-center pointer-events-auto">
          <h1 className="text-6xl font-bold text-white mb-6 pointer-events-auto">
            Welcome
          </h1>
          <p className="cursor-target text-xl text-gray-400 max-w-2xl pointer-events-auto">
            Hover over the text to see the target cursor effect. Click anywhere on the grid to create ripples.
          </p>
        </div>
      </main>

      {/* Timeline Section */}
      <section className="relative z-10 bg-black">
        <Timeline data={timelineData} />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}