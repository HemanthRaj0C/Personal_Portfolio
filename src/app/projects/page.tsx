"use client";

import React from "react";
import InfiniteMenu from "@/components/InfiniteMenu";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import ChromaGrid, { ChromaItem } from "@/components/ChromaGrid";

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  }
];

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

// Dummy data for ChromaGrid projects
const chromaGridProjects: ChromaItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=400&fit=crop',
    title: 'E-Commerce Platform',
    subtitle: 'Next.js • Stripe • MongoDB',
    handle: 'Full Stack',
    borderColor: '#4F46E5',
    gradient: 'linear-gradient(145deg, #4F46E5, #000)',
    url: 'https://github.com/yourproject/ecommerce-platform'
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop',
    title: 'AI Chat Assistant',
    subtitle: 'React • OpenAI • Node.js',
    handle: 'Machine Learning',
    borderColor: '#10B981',
    gradient: 'linear-gradient(210deg, #10B981, #000)',
    url: 'https://github.com/yourproject/ai-chat-assistant'
  },
  {
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop',
    title: 'Task Management App',
    subtitle: 'TypeScript • PostgreSQL • Express',
    handle: 'Productivity',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(165deg, #F59E0B, #000)',
    url: 'https://github.com/yourproject/task-manager'
  },
  {
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=400&fit=crop',
    title: 'Weather Dashboard',
    subtitle: 'React • Weather API • Tailwind',
    handle: 'Web App',
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(195deg, #06B6D4, #000)',
    url: 'https://github.com/yourproject/weather-dashboard'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    title: 'Social Media Analytics',
    subtitle: 'Python • Django • Chart.js',
    handle: 'Data Analysis',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
    url: 'https://github.com/yourproject/social-analytics'
  },
  {
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop',
    title: 'Portfolio Website Builder',
    subtitle: 'Next.js • Prisma • Vercel',
    handle: 'No-Code Tool',
    borderColor: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444, #000)',
    url: 'https://github.com/yourproject/portfolio-builder'
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* Infinite Menu Section - Hidden on mobile, visible on laptop/desktop */}
      <section style={{ position: 'relative', height: '100vh' }} className="hidden lg:block">
        <InfiniteMenu items={items} />
      </section>

      {/* Expandable Card Section - Visible on mobile, hidden on laptop/desktop */}
      <section className="w-full px-8 pt-32 bg-black lg:hidden">
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

      {/* ChromaGrid Section */}
      <section className="w-full px-8 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Project Showcase
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Click on any project card to visit the repository and explore the code.
          </p>
          <ChromaGrid 
            items={chromaGridProjects} 
            columns={3} 
            rows={2}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
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
