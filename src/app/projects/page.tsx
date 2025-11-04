"use client";

import React from "react";
import InfiniteMenu from "@/components/InfiniteMenu";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* Infinite Menu Section */}
      {/* <section className="w-full h-screen">
        <InfiniteMenu />
      </section> */}

      {/* Expandable Card Section */}
      <section className="w-full px-8 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Project Highlights
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Click on any card to learn more about these exciting projects and their impact.
          </p>
          <ExpandableCardDemo />
        </div>
      </section>

      {/* Hover Effect Cards Section */}
      <section className="w-full px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Explore some of my recent work and side projects that showcase my skills in web development, design, and problem-solving.
          </p>
          <HoverEffect items={projectItems} />
        </div>
      </section>
    </div>
  );
}

// Dummy data for hover effect cards
const projectItems = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment integration, and a modern shopping experience.",
    link: "#e-commerce-platform",
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by machine learning that provides customer support and handles complex queries with natural language processing.",
    link: "#ai-chat-assistant",
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    link: "#task-management-app",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application that provides accurate forecasts, interactive maps, and personalized weather alerts for multiple locations.",
    link: "#weather-dashboard",
  },
  {
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform that tracks social media performance, engagement metrics, and provides actionable insights for brands.",
    link: "#social-media-analytics",
  },
  {
    title: "Portfolio Website Builder",
    description: "A no-code platform that enables creatives to build stunning portfolio websites with customizable templates and easy deployment.",
    link: "#portfolio-website-builder",
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile-first application for tracking workouts, nutrition, and health goals with gamification features and progress visualization.",
    link: "#fitness-tracking-app",
  },
  {
    title: "Recipe Sharing Platform",
    description: "A community-driven platform where food enthusiasts can share recipes, rate dishes, and discover new culinary experiences from around the world.",
    link: "#recipe-sharing-platform",
  },
  {
    title: "Real Estate Marketplace",
    description: "A modern property listing platform with advanced search filters, virtual tours, and seamless communication between buyers and sellers.",
    link: "#real-estate-marketplace",
  },
];
