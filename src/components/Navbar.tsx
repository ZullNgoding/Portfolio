"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 glass">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <div className="flex items-center gap-6">
        <a href="#about" className="hover:text-primary-500">About</a>
        <a href="#skills" className="hover:text-primary-500">Skills</a>
        <a href="#projects" className="hover:text-primary-500">Projects</a>
        <a href="#contact" className="hover:text-primary-500">Contact</a>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full glass hover:scale-105 transition"
        >
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
}
