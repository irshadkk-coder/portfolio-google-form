'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { HiPaperAirplane, HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import SectionWrapper from '@/components/SectionWrapper';
import { socialLinks } from '@/lib/data';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast.error('Please fill in all fields.');
    return;
  }

  setIsSubmitting(true);

  try {
    const form = new FormData();

    form.append("entry.1150793560", formData.name);
    form.append("entry.1442668775", formData.email);
    form.append("entry.589696117", formData.message);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSevjjuApPqiu2RE96V68bfUK7Y7lTcy23zIZgTTrbg5wUpJtw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: form,
      }
    );

    toast.success("Message sent successfully! I'll get back to you soon.");

    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    toast.error("Something went wrong!");
  }

  setIsSubmitting(false);
};
  return (
    <SectionWrapper id="contact" className="bg-slate-100/50 dark:bg-slate-900/50">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-mono text-primary-500 dark:text-primary-400 tracking-wider uppercase">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-800 dark:text-white">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mx-auto mt-4" />
        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to new opportunities and interesting conversations.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: HiEnvelope, label: 'Email', value: socialLinks.email, href: `mailto:${socialLinks.email}` },
            { icon: HiMapPin, label: 'Location', value: 'San Francisco, CA', href: null },
            { icon: HiPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
          ].map((info) => (
            <motion.div
              key={info.label}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-slate-800 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-slate-800 dark:text-white font-medium">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Follow me</p>
            <div className="flex gap-3">
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

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <HiPaperAirplane className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
