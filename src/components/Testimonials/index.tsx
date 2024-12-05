"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import React, { Suspense, useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import TestimonialSkeleton from "./TestimonialSkeleton";
import TestimonialMapping from "./TestimonialMapping";

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    content: "",
    designation: "friend",
    image: "",
    star: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = axios.post("/api/addReview", formData);
      toast.promise(response, {
        loading: "Submitting review...",
        success: () => {
          for (let key in formData) {
            setFormData({ ...formData, [key]: "" });
          }
          (document.getElementById("newReview") as HTMLDialogElement).close();
          return "Review submitted successfully";
        },
        error: "Failed to submit review",
      });
    } catch (error: any) {
      toast.error("Failed to submit review", error.message);
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<null | NodeJS.Timeout>(null);
  const scrollContainer = scrollContainerRef.current as HTMLDivElement;

  function autoScroll() {
    const maxScrollLeft =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;

    if (scrollContainer.scrollLeft < maxScrollLeft) {
      scrollContainer.scrollBy({
        left: scrollContainer.clientWidth,
        behavior: "smooth",
      });
    } else {
      scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (!scrollContainer) return;
    intervalRef.current = setInterval(autoScroll, 3000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  const handleMouseEnter = () => clearInterval(intervalRef.current!);
  const handleMouseLeave = () =>
    (intervalRef.current = setInterval(() => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        autoScroll();
      }
    }, 3000));

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What My Clients Say"
          paragraph="Discover what clients and collaborators have to say about working with me."
          center
        />

        <div
          className="carousel w-full mx-auto mt-8 overflow-x-scroll"
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Suspense fallback={<TestimonialSkeleton />}>
            <TestimonialMapping autoplay={true} />
          </Suspense>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            className="btn btn-accent text-base-300 mt-8"
            onClick={() =>
              (
                document.getElementById("newReview") as HTMLDialogElement
              )?.showModal()
            }
          >
            Add Your Review
          </button>
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <dialog id="newReview" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg mt-36">Submit a Review</h3>
          <p className="py-4">
            Fill in the details below to submit your review.
          </p>
          <div className="modal-action">
            <form method="dialog" onSubmit={handleSubmit}>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <X size={24} />
              </button>
              {/* Name input */}
              <div className="flex flex-col w-full">
                <label className="label">Your Name :</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full mb-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email input */}
              <div className="flex flex-col">
                <label className="label">Your Email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs mb-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* GitHub input */}
              <div className="flex flex-col">
                <label className="label">GitHub Profile :</label>
                <input
                  type="text"
                  name="github"
                  placeholder="GitHub Profile"
                  className="input input-bordered w-full max-w-xs mb-2"
                  value={formData.github}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Content input */}
              <div className="flex flex-col">
                <label className="label">Your Review :</label>
                <textarea
                  name="content"
                  placeholder="Your Review"
                  className="input input-bordered w-full max-w-xs mb-2 pt-2"
                  rows={10}
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Star rating input */}
              <div className="flex flex-col">
                <label className="label">Rating :</label>
                <input
                  type="number"
                  name="star"
                  placeholder="Rating (0-5)"
                  className="input input-bordered w-full max-w-xs mb-2"
                  min="0"
                  max="5"
                  value={formData.star}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Designation dropdown */}
              <div className="flex flex-col">
                <label className="label">Designation :</label>
                <select
                  name="designation"
                  className="select select-bordered w-full max-w-xs mb-2"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                >
                  <option value="friend">Friend</option>
                  <option value="colleague">Colleague</option>
                  <option value="client">Client</option>
                </select>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-circle btn-accent w-full max-w-xs"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Testimonials;
