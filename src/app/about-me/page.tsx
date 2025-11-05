"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export default function AboutMePage() {

  const featuredImage = "https://picsum.photos/1400/900?random=20";

  const tabs = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-linear-to-br from-blue-600 via-blue-700 to-indigo-900">
          <p className="text-3xl md:text-5xl font-bold mb-6">Technical Skills</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-lg md:text-xl font-semibold">Frontend</p>
              <p className="text-sm md:text-base text-white/80 mt-2">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-lg md:text-xl font-semibold">Styling</p>
              <p className="text-sm md:text-base text-white/80 mt-2">Tailwind CSS, Framer Motion</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-linear-to-br from-emerald-600 via-teal-700 to-cyan-900">
          <p className="text-3xl md:text-5xl font-bold mb-6">Work Experience</p>
          <div className="space-y-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-xl md:text-2xl font-semibold">Senior Developer</p>
              <p className="text-sm md:text-base text-white/80 mt-2">Building innovative web solutions</p>
              <p className="text-xs md:text-sm text-white/60 mt-1">2020 - Present</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-xl md:text-2xl font-semibold">Full Stack Developer</p>
              <p className="text-sm md:text-base text-white/80 mt-2">Developed scalable applications</p>
              <p className="text-xs md:text-sm text-white/60 mt-1">2018 - 2020</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-linear-to-br from-purple-600 via-violet-700 to-fuchsia-900">
          <p className="text-3xl md:text-5xl font-bold mb-6">Education & Learning</p>
          <div className="space-y-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-xl md:text-2xl font-semibold">Computer Science Degree</p>
              <p className="text-sm md:text-base text-white/80 mt-2">University Name</p>
              <p className="text-xs md:text-sm text-white/60 mt-1">2014 - 2018</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-xl md:text-2xl font-semibold">Continuous Learning</p>
              <p className="text-sm md:text-base text-white/80 mt-2">Online courses, bootcamps, and certifications</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-linear-to-br from-orange-600 via-red-700 to-pink-900">
          <p className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-xl md:text-2xl font-semibold">E-Commerce Platform</p>
              <p className="text-sm md:text-base text-white/80 mt-2">Full-stack shopping solution with payment integration</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-xl md:text-2xl font-semibold">Portfolio Website</p>
              <p className="text-sm md:text-base text-white/80 mt-2">Modern, animated portfolio with 3D effects</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-xl md:text-2xl font-semibold">Task Management App</p>
              <p className="text-sm md:text-base text-white/80 mt-2">Real-time collaboration tool for teams</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Interests",
      value: "interests",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-linear-to-br from-amber-600 via-yellow-700 to-lime-900">
          <p className="text-3xl md:text-5xl font-bold mb-6">Personal Interests</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-4xl mb-2">🎨</p>
              <p className="text-lg md:text-xl font-semibold">Design</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-4xl mb-2">🚀</p>
              <p className="text-lg md:text-xl font-semibold">Innovation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-4xl mb-2">📚</p>
              <p className="text-lg md:text-xl font-semibold">Learning</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-4xl mb-2">⚡</p>
              <p className="text-lg md:text-xl font-semibold">Tech Trends</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-4xl mb-2">🎯</p>
              <p className="text-lg md:text-xl font-semibold">Problem Solving</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-4xl mb-2">🌍</p>
              <p className="text-lg md:text-xl font-semibold">Open Source</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with 3D Perspective Effect */}
      {/* <HeroSection /> */}

      {/* MacBook Scroll */}
      <div className="w-full bg-black">
        <MacbookScroll
          title={
            <span>
              My Development Journey <br /> Powered by Modern Tech
            </span>
          }
          src={featuredImage}
          showGradient={true}
        />
      </div>

      {/* Container Scroll */}
      <div className="w-full bg-black">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                About My Skills
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
                Explore my expertise in modern web development and design
              </p>
            </div>
          }
        >
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={featuredImage}
              alt="Skills showcase"
              width={1400}
              height={900}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </ContainerScroll>
      </div>

      {/* Animated Tabs */}
      <div className="w-full px-4 -mt-0 md:-mt-40 md:px-10 mb-40 bg-black">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
          My Expertise
        </h2>
        <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-16 text-white">
            <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}