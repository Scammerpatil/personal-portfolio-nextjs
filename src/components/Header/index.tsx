"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import MyImage from "./MyImage";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <>
      <header
        className={`px-[1rem] header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed shadow-md backdrop-blur-lg transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/#home" className="flex items-center space-x-3">
            <MyImage />
          </Link>
          <button
            onClick={navbarToggleHandler}
            className="lg:hidden flex items-center justify-center rounded-lg p-2 text-primary focus:outline-none focus:ring focus:ring-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {navbarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navbar Links */}
          <nav
            className={`absolute left-0 top-[60px] w-full bg-transparent shadow-md lg:static lg:block lg:w-auto lg:shadow-none ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center gap-4 p-4 lg:flex-row lg:space-x-6 lg:p-0">
              {[
                { name: "Home", path: "/#home" },
                { name: "About", path: "/#about" },
                { name: "Services", path: "/#services" },
                { name: "Contact", path: "/#contact" },
                { name: "Blog", path: "/#blog" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="block px-3 py-2 text-lg font-medium text-base-content hover:text-primary focus:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggler */}
          <div className="hidden lg:block">
            <ThemeToggler />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
