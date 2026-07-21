import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full mt-12 py-8 border-t border-zinc-800/60 text-zinc-400">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-4">
        <div className="flex items-center font-medium">
          Astra Music © {new Date().getFullYear()} — Created with{" "}
          <span className="text-player-accent mx-1.5 text-lg">♥</span> by{" "}
          <span className="font-semibold text-white ml-1">Jatin</span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://jatinagrahari.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2 group"
          >
            <IoGlobeOutline className="text-xl group-hover:-translate-y-0.5 transition-transform" />{" "}
            Portfolio
          </a>
          <a
            href="https://github.com/jatinagrahari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2 group"
          >
            <IoLogoGithub className="text-xl group-hover:-translate-y-0.5 transition-transform" />{" "}
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jatinagrahari"
            target="_blank"
            className="hover:text-white transition-colors flex items-center gap-2 group"
          >
            <IoLogoLinkedin className="text-xl group-hover:-translate-y-0.5 transition-transform" />{" "}
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
