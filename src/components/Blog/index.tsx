"use client";
import { use, useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import axios from "axios";
import toast from "react-hot-toast";
import { Blog as blog } from "@/types/blog";

type user = {
  identifier: string;
  isAdmin: boolean;
  github: string;
  designation: string;
};

const Blog = ({ user }: { user: user }) => {
  const [formData, setFormData] = useState({
    title: "",
    paragraph: "",
    tags: "",
    github: user.identifier,
    author: {
      name: user.identifier,
      image: `https://avatars.githubusercontent.com/${user.github}`,
      designation: user.designation,
    },
    slug: "",
    imageURL: "",
    pusblisDate: new Date(),
  });
  const [blogs, setBlogs] = useState<blog[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog = {
      ...formData,
      slug: formData.title.toLowerCase().split(" ").join("-"),
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };
    const uploadBlog = axios.post("/api/addBlog", newBlog);
    toast.promise(uploadBlog, {
      loading: "Uploading blog...",
      success: "Blog uploaded successfully",
      error: "An error occurred while uploading the blog",
    });
    (document.getElementById("newBlog") as HTMLDialogElement)?.close();
  };

  useEffect(() => {
    axios.get("/api/getBlogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <section
      id="blog"
      className="px-[1rem] bg-base-300 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Explore Our Latest Insights"
          paragraph="Discover a range of insightful articles and updates from our team. We cover diverse topics to keep you informed and engaged."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 ">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog._id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))
          ) : (
            <div className="w-full">
              <p className="">No Blog</p>
            </div>
          )}
        </div>
        {user.isAdmin && (
          <div className="flex justify-center mt-10">
            <button
              className="btn btn-accent text-base-300"
              onClick={() => {
                (
                  document.getElementById("newBlog") as HTMLDialogElement
                ).showModal();
              }}
            >
              Add New Blog
            </button>
          </div>
        )}
      </div>
      <dialog id="newBlog" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4">
              Add New Blog
            </h2>

            {/* Title */}
            <div className="form-group">
              <label className="block text-sm font-medium">Title:</label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full mt-1"
                placeholder="Enter blog title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Paragraph */}
            <div className="form-group mt-4">
              <label className="block text-sm font-medium">Paragraph:</label>
              <textarea
                name="paragraph"
                className="textarea textarea-bordered w-full mt-1"
                placeholder="Enter the blog content"
                value={formData.paragraph}
                onChange={handleChange}
                required
              />
            </div>

            {/* Tags */}
            <div className="form-group mt-4">
              <label className="block text-sm font-medium">
                Tags (comma-separated):
              </label>
              <input
                type="text"
                name="tags"
                className="input input-bordered w-full mt-1"
                placeholder="Enter tags (e.g., JavaScript, WebDev)"
                value={formData.tags}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-4">
              <label className="block text-sm font-medium">
                Supporting Image URL:
              </label>
              <input
                type="text"
                name="imageURL"
                className="input input-bordered w-full mt-1"
                placeholder="Ehter the image URL"
                value={formData.imageURL}
                onChange={handleChange}
                required
              />
            </div>

            <div className="modal-action mt-6 mx-auto w-full">
              <button type="submit" className="btn btn-primary">
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default Blog;
