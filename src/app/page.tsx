"use client";

import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Menu, 
  X, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe 
} from 'lucide-react';

// --- Configuration & Data ---
// TODO: Update these details with your specific project info
const personalInfo = {
  name: "Sumit Kumar",
  role: "Software Engineer", // Edit this based on your specialization
  bio: "I am a passionate developer dedicated to building scalable and efficient web solutions. With a focus on clean code and user-centric design, I transform complex problems into elegant digital experiences.",
  email: "sipusumit@gmail.com", // Add your real email
  socials: {
    github: "https://github.com/sipusumit",
    linkedin: "https://www.linkedin.com/in/sumitkr0777/",
  }
};

const skills = [
  "React.js", "TypeScript", "Node.js", "Tailwind CSS", 
  "Git", "SQL", "REST APIs", "Cloud Services"
];

// const projects = [
//   {
//     title: "Project One",
//     description: "A full-stack web application built to solve real-world problems. Features secure authentication and real-time data updates.",
//     tags: ["React", "Node.js", "MongoDB"],
//     githubUrl: "https://github.com/sipusumit", // Replace with specific repo URL
//     liveUrl: "#"
//   },
//   {
//     title: "Project Two",
//     description: "An interactive dashboard visualization tool helping users analyze complex datasets with ease.",
//     tags: ["TypeScript", "D3.js", "Tailwind"],
//     githubUrl: "https://github.com/sipusumit",
//     liveUrl: "#"
//   },
//   {
//     title: "Project Three",
//     description: "A mobile-first e-commerce platform focusing on speed, accessibility, and conversion optimization.",
//     tags: ["Next.js", "Stripe", "PostgreSQL"],
//     githubUrl: "https://github.com/sipusumit",
//     liveUrl: "#"
//   }
// ];

const projects = [
  {
    title: "MyOS",
    description: "A custom operating system kernel built from scratch. Features include memory management, interrupt handling, and a custom file system implementation. Demonstrates deep understanding of low-level computing and hardware architecture.",
    tags: ["C", "Assembly", "Kernel Dev", "Makefile"],
    githubUrl: "https://github.com/sipusumit/myos",
    liveUrl: "#" // You can remove this line if there is no live demo
  },
  {
    title: "Omlang",
    description: "A statically typed programming language compiler/interpreter. Includes a custom lexer, parser, and code generation backend. designed to be efficient and expressive.",
    tags: ["C/C++", "Compiler Design", "Lexing", "Parsing"],
    githubUrl: "https://github.com/sipusumit/omlang",
    liveUrl: "#"
  },
  {
    title: "Android Reverse Engineering",
    description: "Tools and scripts for analyzing obfuscated Android application code, focusing on security analysis and understanding internal app logic.",
    tags: ["Java", "Smali", "Frida", "Security"],
    githubUrl: "https://github.com/sipusumit", // Link to your profile or specific repo
    liveUrl: "#"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm text-white z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-wider">
            SUMIT<span className="text-blue-500">.DEV</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 text-white pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h2 className="text-blue-500 font-semibold tracking-wide uppercase">Portfolio</h2>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm {personalInfo.name} <br />
          <span className="text-slate-400 text-2xl md:text-4xl">{personalInfo.role}</span>
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto md:mx-0 text-lg">
          {personalInfo.bio}
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a 
            href={personalInfo.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a 
            href={personalInfo.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
        <div className="pt-4">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
            View Work
          </a>
        </div>
      </div>
      
      {/* Abstract Visual/Avatar Placeholder */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse absolute"></div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-2xl">
          <Code2 size={64} className="text-blue-400" />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me & Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            I am a developer with a strong interest in building robust and scalable applications. 
            My journey in tech has equipped me with a versatile skill set, allowing me to tackle 
            challenges across the full stack.
          </p>
          <p>
            Whether it's architecting a backend system or crafting a pixel-perfect frontend, 
            I strive for excellence in every line of code. I am constantly learning and adapting 
            to the latest industry trends.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Terminal size={20} className="text-blue-500" /> Technical Arsenal
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-slate-900 text-blue-400 rounded-lg text-sm font-medium border border-slate-700 hover:border-blue-500 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-16 text-center">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <Globe size={24} />
                </div>
                <div className="flex gap-3">
                  <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  {/* <a href={project.liveUrl} className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a> */}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-slate-900 text-white border-t border-slate-800">
    <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
      <h2 className="text-3xl font-bold">Get In Touch</h2>
      <p className="text-slate-400 text-lg">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
        I'll try my best to get back to you!
      </p>
      <a 
        href={`mailto:${personalInfo.email}`}
        className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
      >
        Say Hello
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 py-8 text-slate-500 text-sm text-center border-t border-slate-900">
    <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href={personalInfo.socials.github} className="hover:text-white transition-colors">GitHub</a>
      <a href={personalInfo.socials.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}