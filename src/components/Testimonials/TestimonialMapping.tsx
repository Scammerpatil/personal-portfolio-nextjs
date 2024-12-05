import { Testimonial } from "@/types/testimonial";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

var testimonialPromise: Promise<Testimonial[]> | null = null;
var cachedTestimonials: Testimonial[] | null = null;

const fetchTestimonials = () => {
  if (cachedTestimonials) {
    return cachedTestimonials;
  }
  if (!testimonialPromise) {
    testimonialPromise = axios.get("/api/testimonials").then((res) => {
      cachedTestimonials = res.data.sort(() => Math.random() - 0.5);
      return res.data;
    });
  }
  throw testimonialPromise;
};

const TestimonialMapping = ({ autoplay = false }: { autoplay?: boolean }) => {
  const testimonials = fetchTestimonials();
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <>
      <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
        <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial._id}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Link
                      href={`https://github.com/${testimonial.github}`}
                      target="_blank"
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-base-content">
                {testimonials[active].name}{" "}
                <div className="my-2 flex items-center space-x-1">
                  {Array.from({ length: testimonials[active].star }).map(
                    (_, index) => (
                      <StarIcon key={index} className="text-yellow" size={24} />
                    )
                  )}
                </div>
              </h3>
              <p className="text-base text-base-content/80 capitalize">
                {testimonials[active].designation}
                <span> | </span>
                <Link
                  className="lowercase"
                  href={`mailto:${testimonials[active].email}`}
                >
                  {testimonials[active].email}
                </Link>
              </p>
              <motion.p className="text-base text-base-content mt-8">
                {testimonials[active].content.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-16 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-primary flex items-center justify-center group/button"
              >
                <ArrowLeft className="h-5 w-5 text-primary-content group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-primary flex items-center justify-center group/button"
              >
                <ArrowRight className="h-5 w-5 text-primary-content group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialMapping;
