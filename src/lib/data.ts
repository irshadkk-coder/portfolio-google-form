import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiPostgresql, SiPrisma, SiDocker, SiGit,
  SiFirebase, SiFigma, SiRedux, SiSocketdotio, SiExpress,
  SiPython, SiJavascript, SiHtml5, SiCss, SiVercel
} from 'react-icons/si';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
];

export type ProjectCategory = 'All' | 'Frontend' | 'Full Stack' | 'Backend';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: ProjectCategory;
  github: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ChatSphere',
    description: 'A real-time messaging application with group chats, media sharing, and end-to-end encryption.',
    longDescription: 'Built a full-featured real-time chat application supporting one-on-one and group conversations, file sharing, typing indicators, read receipts, and online status tracking.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Tailwind CSS'],
    category: 'Full Stack',
    github: 'https://github.com/username/chatsphere',
    live: 'https://chatsphere-demo.vercel.app',
    image: '/projects/chat-app.svg',
  },
  {
    id: 2,
    title: 'DevPortfolio',
    description: 'A customizable developer portfolio template with CMS integration and dynamic theming.',
    longDescription: 'Designed and built a sleek, modern portfolio website template featuring dark mode, animations, SEO optimization, and a headless CMS for easy content management.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    category: 'Frontend',
    github: 'https://github.com/username/devportfolio',
    live: 'https://devportfolio-demo.vercel.app',
    image: '/projects/portfolio.svg',
  },
  {
    id: 3,
    title: 'TaskFlow',
    description: 'A Kanban-style project management tool with drag-and-drop, deadlines, and team collaboration.',
    longDescription: 'Developed a productivity app inspired by Trello and Notion, featuring drag-and-drop task boards, sub-tasks, priority labels, deadline reminders, and team workspaces.',
    techStack: ['React', 'TypeScript', 'Redux', 'Node.js', 'PostgreSQL', 'Prisma'],
    category: 'Full Stack',
    github: 'https://github.com/username/taskflow',
    live: 'https://taskflow-demo.vercel.app',
    image: '/projects/task-manager.svg',
  },
  {
    id: 4,
    title: 'CloudVault',
    description: 'A secure cloud storage platform with file encryption, sharing links, and storage analytics.',
    longDescription: 'Created a cloud storage solution with AES-256 file encryption, shareable links with expiry, real-time upload progress, and visual storage usage dashboards.',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Node.js'],
    category: 'Full Stack',
    github: 'https://github.com/username/cloudvault',
    live: 'https://cloudvault-demo.vercel.app',
    image: '/projects/cloud-storage.svg',
  },
  {
    id: 5,
    title: 'WeatherLens',
    description: 'A beautiful weather dashboard with location-based forecasts, radar maps, and severe weather alerts.',
    longDescription: 'Built a visually rich weather application featuring 7-day forecasts, interactive radar maps, air quality index, UV index tracking, and push notifications for severe weather.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    category: 'Frontend',
    github: 'https://github.com/username/weatherlens',
    live: 'https://weatherlens-demo.vercel.app',
    image: '/projects/weather.svg',
  },
];

export const projectCategories: ProjectCategory[] = ['All', 'Frontend', 'Full Stack', 'Backend'];

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'work' | 'education';
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechNova Solutions',
    duration: 'Jan 2024 — Present',
    description: [
      'Led the frontend architecture migration from CRA to Next.js, improving page load times by 40%.',
      'Built and maintained microservices handling 50K+ daily API requests.',
      'Mentored a team of 4 junior developers through code reviews and pair programming.',
    ],
    type: 'work',
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'PixelCraft Agency',
    duration: 'Jun 2022 — Dec 2023',
    description: [
      'Developed responsive, accessible web applications for 10+ clients across e-commerce and SaaS domains.',
      'Integrated third-party APIs including Stripe, Twilio, and SendGrid.',
      'Reduced client-reported bugs by 60% through comprehensive test coverage.',
    ],
    type: 'work',
  },
  {
    id: 3,
    role: 'Frontend Developer Intern',
    company: 'StartUp Hub',
    duration: 'Jan 2022 — May 2022',
    description: [
      'Built reusable UI component library used across 3 internal products.',
      'Collaborated with designers to implement pixel-perfect, responsive interfaces.',
      'Participated in agile sprints and daily standups.',
    ],
    type: 'work',
  },
  {
    id: 4,
    role: 'B.Tech in Computer Science',
    company: 'National Institute of Technology',
    duration: '2018 — 2022',
    description: [
      'Graduated with honors (CGPA: 8.9/10).',
      'Specialized in Data Structures, Algorithms, and Web Technologies.',
      'Led the college coding club and organized 3 inter-college hackathons.',
    ],
    type: 'education',
  },
];

export const socialLinks = {
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
  email: 'hello@example.com',
};
