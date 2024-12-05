"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import ToastContainer from "@/components/ToastContainer";
import { useEffect, useState } from "react";
import axios from "axios";

type user = {
  identifier: string;
  isAdmin: boolean;
  github: string;
  designation: string;
};

export default function Home() {
  const [user, setUser] = useState<user>({
    identifier: "",
    isAdmin: false,
    github: "",
    designation: "",
  });
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await axios.get("/api/getUser");
      setUser(userData.data);
    };

    fetchUser();
  }, []);
  return (
    <>
      <ScrollUp />
      <ToastContainer />
      <Hero />
      <Features user={user} />
      <Video />
      <About />
      <Testimonials />
      <Blog user={user} />
      <Contact />
    </>
  );
}
