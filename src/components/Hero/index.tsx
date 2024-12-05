import {
  Facebook,
  Github,
  LucideLinkedin,
  Twitter,
  YoutubeIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../TypeWriter";
import { useEffect, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = [
    {
      text: "The Scammer 🤖",
      className: "text-error font-bold",
    },
    {
      text: "A Decent Developer 💻",
      className: "text-primary font-semibold",
    },
    {
      text: "A Tech Enthusiast 🚀",
      className: "text-secondary font-medium",
    },
    {
      text: "An Open Source Lover 🌐",
      className: "text-accent font-semibold",
    },
    {
      text: "Problem Solver 🧠",
      className: "text-info font-medium",
    },
    {
      text: "Code Whisperer 📝",
      className: "text-success font-bold",
    },
    {
      text: "Creative Thinker 🎨",
      className: "text-warning font-semibold",
    },
    {
      text: "Team Player 🤝",
      className: "text-neutral font-medium",
    },
    {
      text: "Tech Explorer 🧭",
      className: "text-base-content font-semibold",
    },
    {
      text: "Coffee Fueled Coder ☕",
      className: "text-blue-500 dark:text-blue-500 font-bold",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="#home">
      <div className="relative overflow-hidden bg-base-200 min-h-screen flex items-center justify-center">
        <div className="absolute right-0 top-0 z-[1] opacity-30">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop
                  offset="0.145833"
                  stopColor="currentColor"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop
                  offset="0.145833"
                  stopColor="currentColor"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[1] opacity-30">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center text-center p-10">
          <div className="mt-32 mb-10 max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="w-full text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-16">
                Hi, I'm{" "}
                <span className="text-accent bg-accent-content px-3 rounded-xl">
                  Saurav Patil
                </span>
              </h1>
              <TypewriterEffectSmooth />
            </motion.div>

            <p className="mt-4 text-lg md:text-xl text-base-content">
              Undergraduate at RCPIT | Full Stack Developer | Open to work
            </p>
            <div className="flex flex-row flex-1 items-center justify-center gap-2 mt-5">
              <a
                href="/resumes"
                className="btn btn-primary mt-6 text-primary-content rounded-lg px-6 py-3"
              >
                See My Resumes
              </a>
              <a
                href="https://github.com/scammerpatil"
                target="_blank"
                className="btn btn-outline btn-primary mt-6 text-primary-content rounded-lg px-6 py-3"
              >
                <Github size={24} /> See My Github
              </a>
            </div>
          </div>

          {/* Pill Links */}
          <div className="flex flex-wrap justify-center mt-5 gap-4 max-w-screen-lg">
            {[
              "Design Innovation",
              "Authenticity",
              "Collaboration",
              "Excellence",
              "Use Centricity",
              "Sustainability",
            ].map((pill, index) => (
              <div
                key={index}
                className="btn btn-accent btn-outline text-base px-4"
              >
                {pill}
              </div>
            ))}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/saurav.patil.16121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-color hover:text-primary duration-300 btn"
              >
                <Facebook size={32} />
              </a>
              <a
                href="https://x.com/ScammerPatil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-color hover:text-primary duration-300 btn"
              >
                <Twitter size={32} />
              </a>
              <a
                href="https://www.youtube.com/@scammer104"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-color hover:text-error duration-300 btn"
              >
                <YoutubeIcon size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/scammerpatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-color hover:text-primary duration-300 btn"
              >
                <LucideLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
