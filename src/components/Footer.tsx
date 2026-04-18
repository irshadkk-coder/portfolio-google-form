'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { HiHeart } from 'react-icons/hi2';
import { socialLinks } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">&lt;</span>
            <span className="text-slate-800 dark:text-white">Dev</span>
            <span className="gradient-text">/&gt;</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
            © {currentYear} Made with{' '}
            <HiHeart className="w-4 h-4 text-red-500 inline" />{' '}
            All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
              { icon: FaLinkedinIn, href: socialLinks.linkedin, label: 'LinkedIn' },
              { icon: FaTwitter, href: socialLinks.twitter, label: 'Twitter' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
