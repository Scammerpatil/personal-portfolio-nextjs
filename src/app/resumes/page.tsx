"use client";
import Resume from "@/components/Resume";
import ResumeDetails from "@/types/resumeDetails";
import axios from "axios";
import { useEffect, useState } from "react";

const initialResumeDetails: ResumeDetails = {
  contactInformation: {
    name: "",
    titles: [
      {
        title: "",
        description: "",
      },
    ],
    address: "",
    phone: "",
    email: "",
    links: {
      LinkedIn: "",
      GitHub: "",
      PersonalPortfolio: "",
      CodeChef: "",
      LeetCode: "",
    },
  },
  internshipExperience: [
    {
      company: "",
      location: "",
      role: "",
      duration: "",
      details: [""],
    },
  ],
  education: [
    {
      institution: "",
      location: "",
      degree: "",
      CGPA: "",
      percentage: "",
      duration: "",
    },
  ],
  certificationsAndTraining: {
    certifications: [""],
    training: [""],
  },
  skills: {
    programmingLanguagesAndDatabases: [""],
    webDevelopmentAndFrameworks: [""],
    toolsAndTechnologies: [""],
    softSkills: [""],
  },
  achievements: [""],
  techstack: {
    General: {
      projects: [
        {
          name: "",
          description: "",
          technologies: [""],
        },
      ],
    },
    // Add other techstack categories as needed with empty arrays
    "Frontend Developer": {
      projects: [
        {
          name: "",
          description: "",
          technologies: [""],
        },
      ],
    },
    "Backend Developer": {
      projects: [
        {
          name: "",
          description: "",
          technologies: [""],
        },
      ],
    },
  },
};

const Resumes = () => {
  const [resumeDetails, setResumeDetails] =
    useState<ResumeDetails>(initialResumeDetails);

  useEffect(() => {
    async function getResumeDetails() {
      try {
        const details = await axios.get("/api/getResumeDetails");
        if (details.data && details.data.length > 0) {
          const detail = details.data[0];
          setResumeDetails(detail);
        }
      } catch (error) {
        console.error("Error fetching resume details:", error);
      }
    }
    getResumeDetails();
  }, []);

  return (
    <>
      <section className="relative z-10 overflow-hidden min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex items-start justify-center">
        <div
          role="tablist"
          className="tabs tabs-boxed w-full bg-base-300 my-5 p-10 px-5"
        >
          {resumeDetails.contactInformation?.titles?.map(
            (item: { title: string }, index: number) => (
              <>
                <input
                  type="radio"
                  name="tabs"
                  id={`tab-${index}`}
                  className="tab text-base flex justify-center items-center w-full h-full"
                  aria-label={item.title}
                  defaultChecked={index === 0}
                />
                <div
                  role="tabpanel"
                  className="tab-content p-10 min-h-screen bg-base-200 m-10
                "
                >
                  <Resume
                    contactInformation={resumeDetails.contactInformation}
                    skills={resumeDetails.skills}
                    internshipExperience={resumeDetails.internshipExperience}
                  />
                </div>
              </>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Resumes;
