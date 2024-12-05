"use client";
import { Suspense, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SubSection from "../Common/SubSection";
import axios from "axios";
import toast from "react-hot-toast";
import FeatureMapping from "./FeatureMapping";
import FeatureSkeleton from "./FeatureSkeleton";
import CountUp from "react-countup";
import { Briefcase, Calendar, Code, Smile } from "lucide-react";

type user = {
  isAdmin: boolean;
  identifier: string;
  github: string;
  designation: string;
};

const StatCard = ({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: JSX.Element;
}) => (
  <div className="p-4 border border-base-content/30 rounded-lg backdrop-blur-md flex items-center justify-center flex-col bg-base-content/10">
    <div className="flex items-center justify-center w-10 h-10 bg-base-content rounded-full shadow-md text-base-300">
      {icon}
    </div>
    <h1 className="text-2xl font-bold">{<CountUp end={value} />} +</h1>
    <p className="text-base text-base-content/90">{label}</p>
  </div>
);

const Features = ({ user }: { user: user }) => {
  const stats = [
    { value: 100, label: "Projects Completed", icon: <Briefcase size={24} /> },
    { value: 90, label: "Client Satisfaction Rate", icon: <Smile size={24} /> },
    { value: 50, label: "Technologies Mastered", icon: <Code size={24} /> },
    { value: 2, label: "Years of Experience", icon: <Code size={24} /> },
  ];
  const [formData, setFormData] = useState({
    languageName: "",
    description: "",
    imgURL: "",
    levelOfExpertise: "",
    tag: "",
    uploadedAt: new Date(),
  });

  const handleChange: React.ChangeEventHandler<
    HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (
      !formData.languageName ||
      !formData.description ||
      !formData.imgURL ||
      !formData.levelOfExpertise ||
      !formData.tag
    ) {
      return toast.error("Please fill in all fields");
    }

    const language = axios.post("/api/addLanguage", formData);
    toast.promise(language, {
      loading: "Adding language...",
      success: "Language added successfully",
      error: "Something went wrong",
    });
  };

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-base-100">
        <div className=" min-h-screen">
          <SectionTitle
            title="So, Who Am I?"
            paragraph="👋 I'm Saurav Deepak Patil, a Software Developer crafting solutions with Java, Python, and backend technologies. Exploring the world of machine learning and driven by a passion for innovation. 🌍🚀"
            center
          />
          <div className="flex flex-wrap gap-6 justify-center my-10">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {[
            { title: "Languages", filter: "Programming" },
            { title: "Web Technologies", filter: "WebDev" },
            { title: "Tools", filter: "Tools" },
            { title: "Frameworks", filter: "Framework" },
          ].map(({ title, filter }, index) => (
            <div key={index} className="bg-base-300 px-[1rem]">
              <SubSection title={title} />
              <div className="carousel carousel-center w-full rounded-box my-[3rem]">
                <Suspense fallback={<FeatureSkeleton />}>
                  <FeatureMapping filter={filter} />
                </Suspense>
              </div>
            </div>
          ))}
          {/* {language.filter((feature) => feature.tag === "MobileDev").length >
            0 && (
            <>
              <SubSection title="Mobile Development" center />
              <div className="carousel carousel-center w-full rounded-box mb-28">
                {isLoading
                  ? [...Array(5)].map((_, index) => (
                      <FeatureSkeleton key={index} />
                    ))
                  : language
                      .filter((feature) => feature.tag === "MobileDev")
                      .map((feature) => (
                        <SingleFeature key={feature._id} feature={feature} />
                      ))}
              </div>
            </>
          )} */}
        </div>

        {user?.isAdmin && (
          <div className="flex justify-center my-8">
            <button
              className="btn btn-accent text-base-300"
              onClick={() =>
                (
                  document.getElementById("my_modal_3") as HTMLDialogElement
                ).showModal()
              }
            >
              Add a New Language
            </button>
          </div>
        )}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="post">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Add a New Language</h3>

              {/* Language Name */}
              <div className="py-4">
                <label className="block text-sm font-medium">
                  Language Name:
                </label>
                <input
                  type="text"
                  name="languageName"
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter language name"
                  value={formData.languageName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Description */}
              <div className="py-4">
                <label className="block text-sm font-medium">
                  Description:
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full mt-1"
                  placeholder="Enter a brief description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Image URL */}
              <div className="py-4">
                <label className="block text-sm font-medium">Image URL:</label>
                <input
                  type="text"
                  name="imgURL"
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter image URL"
                  value={formData.imgURL}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Level of Expertise */}
              <div className="py-4">
                <label className="block text-sm font-medium">
                  Level of Expertise:
                </label>
                <select
                  name="levelOfExpertise"
                  className="select select-bordered w-full mt-1"
                  value={formData.levelOfExpertise}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select expertise level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              {/* Tag */}
              <div className="py-4">
                <label className="block text-sm font-medium">Tag:</label>
                <select
                  name="tag"
                  className="select select-bordered w-full mt-1"
                  value={formData.tag}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select tag</option>
                  <option value="Programming">Programming</option>
                  <option value="WebDev">Web Development</option>
                  <option value="Framework">Framework</option>
                  <option value="Tools">Tools</option>
                  <option value="MachineLearning">Machine Learning</option>
                  <option value="MobileDev">Mobile Development</option>
                </select>
              </div>
              <input
                type="hidden"
                name="uploadedAt"
                value={new Date().toISOString()}
              />

              <div className="modal-action">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Add Language
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </section>
    </>
  );
};

export default Features;
