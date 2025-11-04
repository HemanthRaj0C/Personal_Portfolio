"use client";

import React from 'react';
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from '../StaggeredMenu';

const NavBar: React.FC = () => {
  const menuItems: StaggeredMenuItem[] = [
    {
      label: 'Home',
      ariaLabel: 'Navigate to Home page',
      link: '/'
    },
    {
      label: 'About Me',
      ariaLabel: 'Navigate to About Me page',
      link: '/about-me'
    },
    {
      label: 'Projects',
      ariaLabel: 'Navigate to Projects page',
      link: '/projects'
    },
    {
      label: 'Contact',
      ariaLabel: 'Navigate to Contact page',
      link: '/contact-me'
    }
  ];

  const socialItems: StaggeredMenuSocialItem[] = [
    {
      label: 'GitHub',
      link: 'https://github.com'
    },
    {
      label: 'LinkedIn',
      link: 'https://linkedin.com'
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com'
    },
    {
      label: 'Email',
      link: 'mailto:hello@portfolio.com'
    }
  ];

  return (
    <StaggeredMenu
      position="right"
      colors={['#B19EEF', '#5227FF']}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      accentColor="#5227FF"
      changeMenuColorOnOpen={true}
      isFixed={true}
    />
  );
};

export default NavBar;