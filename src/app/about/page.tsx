"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="I'm a passionate software developer with expertise in various technologies, from frontend to full-stack development. I love crafting efficient, scalable solutions and continuously learning new skills to stay ahead in the fast-paced tech industry."
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
