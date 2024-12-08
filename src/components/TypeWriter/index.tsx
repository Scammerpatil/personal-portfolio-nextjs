"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = () => {
  const words = [
    { text: "The Scammer 🤖", className: "text-error font-bold" },
    { text: "Team Player 🤝", className: "text-base-content font-medium" },
    { text: "A Decent Developer 💻", className: "text-primary font-semibold" },
    { text: "A Tech Enthusiast 🚀", className: "text-secondary font-medium" },
    { text: "An Open Source Lover 🌐", className: "text-accent font-semibold" },
    { text: "Problem Solver 🧠", className: "text-info font-medium" },
    { text: "Code Whisperer 📝", className: "text-success font-bold" },
    { text: "Creative Thinker 🎨", className: "text-warning font-semibold" },
    { text: "Tech Explorer 🧭", className: "text-base-content font-semibold" },
    { text: "Coffee Fueled Coder ☕", className: "text-blue-500 font-bold" },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderWords = ({
    currentWord,
  }: {
    currentWord: { text: string; className: string };
  }) => {
    const characters = Array.from(currentWord.text).map((char, index) => {
      const isSpace = char === " ";
      return (
        <motion.span
          key={`char-${currentWordIndex}-${index}`}
          className={cn(
            "inline-block",
            currentWord.className,
            isSpace ? "px-1" : ""
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: index * 0.05,
          }}
        >
          {isSpace ? "\u00A0" : char} {/* Preserve space using nbsp */}
        </motion.span>
      );
    });

    return (
      <div key={`word-container-${currentWordIndex}`} className="inline-block">
        {characters}
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center space-x-1 my-6">
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords({ currentWord: words[currentWordIndex] })}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-current"
      ></motion.span>
    </div>
  );
};
