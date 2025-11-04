"use client";

import React from 'react';
import MagicBento, { BentoCardProps } from '../MagicBento';

const Footer: React.FC = () => {
  const footerCards: BentoCardProps[] = [
    {
      color: '#060010',
      title: '📧 Email',
      description: 'contact@yourname.dev',
      label: 'Get in Touch'
    },
    {
      color: '#060010',
      title: '💼 GitHub',
      description: 'github.com/yourusername',
      label: 'View Code'
    },
    {
      color: '#060010',
      title: '🔗 LinkedIn',
      description: 'Connect professionally',
      label: 'Network'
    },
    {
      color: '#060010',
      title: '🐦 Twitter',
      description: '@yourusername',
      label: 'Follow Updates'
    },
    {
      color: '#060010',
      title: '📍 Location',
      description: 'San Francisco, CA',
      label: 'Based In'
    },
    {
      color: '#060010',
      title: '⚡ Status',
      description: 'Available for work',
      label: 'Open to Opportunities'
    }
  ];

  return (
    <footer className="relative z-10 w-full bg-black py-8 pointer-events-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 text-center text-sm">
            Feel free to reach out for collaborations or just a friendly chat
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
      </div>
    </footer>
  );
};

export default Footer;