'use client';

import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi2';
import SectionWrapper from '@/components/SectionWrapper';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-mono text-primary-500 dark:text-primary-400 tracking-wider uppercase">
          Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-800 dark:text-white">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mx-auto mt-4" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 dark:from-primary-600 dark:via-primary-500 dark:to-primary-400" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-primary-500 dark:bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30"
                >
                  {exp.type === 'work' ? (
                    <HiBriefcase className="w-4 h-4 text-white" />
                  ) : (
                    <HiAcademicCap className="w-4 h-4 text-white" />
                  )}
                </motion.div>
              </div>

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'
                }`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 relative"
                >
                  {/* Arrow pointer (hidden on mobile) */}
                  <div
                    className={`hidden md:block absolute top-4 w-3 h-3 bg-white/80 dark:bg-slate-800/80 border rotate-45 ${
                      index % 2 === 0
                        ? 'right-[-7px] border-r border-t border-slate-200/60 dark:border-slate-700/60'
                        : 'left-[-7px] border-l border-b border-slate-200/60 dark:border-slate-700/60'
                    }`}
                  />

                  <span className="inline-block text-xs font-mono text-primary-500 dark:text-primary-400 mb-2">
                    {exp.duration}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
