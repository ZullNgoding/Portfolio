"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="bg-gradient-to-br from-neutral-100 via-white to-gray-200 dark:from-neutral-900 dark:via-neutral-950 dark:to-black text-neutral-900 dark:text-white transition-colors duration-500">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <span className="font-bold text-xl">Zul</span>
          <div className="flex gap-6 items-center">
            {["hero", "about", "skills", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="capitalize text-sm hover:text-blue-400 transition"
              >
                {id}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-white/20 transition"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I’m <span className="text-blue-500">Muhammad Zulfan</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A Full-stack Developer passionate about building modern, responsive,
          and eye-catching web applications.
        </motion.p>
      </section>

      {/* About */}
      <section
        id="about"
        className="h-screen flex items-center justify-center px-6"
      >
        <div className="glass-box max-w-3xl p-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed">
            I’m a developer with experience in building web apps using React,
            Next.js, Tailwind, and Node.js. My focus is on creating seamless user
            experiences and scalable full-stack solutions.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
          {[
            { title: "Frontend", desc: "React, Next.js, Tailwind", level: "Expert" },
            { title: "Backend", desc: "Node.js, Express, MongoDB", level: "Intermediate" },
            { title: "DevOps", desc: "Docker, CI/CD", level: "Beginner" },
          ].map((skill, idx) => (
            <div key={idx} className="glass-box p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-2">
                {skill.desc}
              </p>
              <span className="px-3 py-1 rounded-full text-sm bg-white/20 text-neutral-100">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
          {[
            { title: "Portfolio Website", desc: "Modern Next.js portfolio with Tailwind." },
            { title: "E-commerce App", desc: "Full-stack MERN e-commerce solution." },
          ].map((project, idx) => (
            <div key={idx} className="glass-box p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center px-6"
      >
        <div className="glass-box max-w-3xl p-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Let’s collaborate or just say hi 👋
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:Zulfankaltara@gmail.com" className="hover:text-blue-400 transition">
              <Mail size={28} />
            </a>
            <a href="https://github.com/ZullNgoding" target="_blank" className="hover:text-blue-400 transition">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/muhammad-zulfan-6445862b7" target="_blank" className="hover:text-blue-400 transition">
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
