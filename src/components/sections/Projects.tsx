'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import SectionWrapper from '@/components/SectionWrapper';
import { projects, projectCategories, type ProjectCategory } from '@/lib/data';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="projects" className="bg-slate-100/50 dark:bg-slate-900/50">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-mono text-primary-500 dark:text-primary-400 tracking-wider uppercase">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-800 dark:text-white">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mx-auto mt-4" />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {projectCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileTap={{ scale: 0.95 }}
            className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
              activeCategory === category
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-primary-600 rounded-xl -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/10 to-primary-700/10 dark:from-primary-500/5 dark:to-primary-700/5 flex items-center justify-center overflow-hidden">
                <div className="text-6xl font-bold text-primary-500/20 dark:text-primary-400/10 select-none group-hover:scale-110 transition-transform duration-500">
                  {project.title.charAt(0)}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-600/90 dark:bg-primary-700/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label={`${project.title} GitHub link`}
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label={`${project.title} live demo`}
                  >
                    <FaArrowUpRightFromSquare className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
