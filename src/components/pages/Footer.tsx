"use client";

import React from 'react';
import MagicBento, { BentoCardProps } from '../MagicBento';

const Footer: React.FC = () => {
  const footerCards: BentoCardProps[] = [
    {
      color: '#060010',
      title: 'Contact',
      description: 'hello@portfolio.com',
      label: 'Get in Touch'
    },
    {
      color: '#060010',
      title: 'Location',
      description: 'San Francisco, CA',
      label: 'Based in'
    },
    {
      color: '#060010',
      title: 'Social Media',
      description: 'Connect with me',
      label: 'Follow'
    },
    {
      color: '#060010',
      title: 'GitHub',
      description: 'View my projects',
      label: 'Code'
    },
    {
      color: '#060010',
      title: 'LinkedIn',
      description: 'Professional network',
      label: 'Connect'
    },
    {
      color: '#060010',
      title: 'Newsletter',
      description: 'Stay updated',
      label: 'Subscribe'
    }
  ];

  return (
    <footer className="relative z-10 w-full bg-black py-16 pointer-events-auto">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <MagicBento 
          cards={footerCards}
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          clickEffect={true}
          enableMagnetism={false}
        />
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;