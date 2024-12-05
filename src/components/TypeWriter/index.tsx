"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = () => {
  const words = [
    { text: "The Scammer 🤖", className: "text-error font-bold" },
    { text: "A Decent Developer 💻", className: "text-primary font-semibold" },
    { text: "A Tech Enthusiast 🚀", className: "text-secondary font-medium" },
    { text: "An Open Source Lover 🌐", className: "text-accent font-semibold" },
    { text: "Problem Solver 🧠", className: "text-info font-medium" },
    { text: "Code Whisperer 📝", className: "text-success font-bold" },
    { text: "Creative Thinker 🎨", className: "text-warning font-semibold" },
    { text: "Team Player 🤝", className: "text-neutral font-medium" },
    { text: "Tech Explorer 🧭", className: "text-base-content font-semibold" },
    { text: "Coffee Fueled Coder ☕", className: "text-blue-500 font-bold" },
  ];

  const renderWords = () => {
    return (
      <div className="inline-block text-center">
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="inline-block mr-2">
            {word.text.split("").map((char, charIndex) => (
              <motion.span
                key={`char-${wordIndex}-${charIndex}`}
                className={cn("inline-block", word.className)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: wordIndex * 2 + charIndex * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
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
          {renderWords()}
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
