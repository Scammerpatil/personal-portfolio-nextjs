import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="progress-container h-1 w-full bg-transparent fixed top-24 z-50">
      <div
        className="progress-bar h-0.5 bg-base-content"
        style={{ width: width + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
