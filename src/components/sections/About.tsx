'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { skills } from '@/lib/data';

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span className="text-sm font-mono text-primary-500 dark:text-primary-400 tracking-wider uppercase">
          About Me
        </motion.span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-800 dark:text-white">
          Get to know me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mx-auto mt-4" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Bio */}
        <div className="space-y-6">
          <div className="glass-card p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
              A passionate developer who loves building things for the web.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m a Full Stack Developer with 3+ years of experience building
              scalable web applications. I specialize in React, Next.js, and Node.js,
              and I&apos;m passionate about creating intuitive, performant user
              experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              When I&apos;m not coding, you can find me contributing to open-source
              projects, writing technical blog posts, or experimenting with new
              technologies. I believe in writing clean, maintainable code and
              continuously learning.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently, I&apos;m focused on building accessible, human-centered
              products at scale. I&apos;m always interested in new challenges and
              opportunities to grow.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Years Exp.', value: '3+' },
              { label: 'Projects', value: '20+' },
              { label: 'Clients', value: '15+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="glass-card p-4 text-center"
              >
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
            Technologies I work with
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="glass-card p-3 flex flex-col items-center justify-center gap-2 group cursor-default"
              >
                <skill.icon
                  className="w-6 h-6 transition-colors duration-300 text-slate-500 dark:text-slate-400 group-hover:text-current"
                  style={{ color: undefined }}
                  onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
                    (e.currentTarget as SVGElement).style.color = skill.color;
                  }}
                  onMouseLeave={(e: React.MouseEvent<SVGElement>) => {
                    (e.currentTarget as SVGElement).style.color = '';
                  }}
                />
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 text-center font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
