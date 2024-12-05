import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { languageName, description, imgURL, levelOfExpertise, uploadedAt } =
    feature;

  // Calculate "time ago" for uploaded date
  const timeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (seconds < 60) return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ago`;
    if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  };

  const formattedTimeAgo = uploadedAt ? timeAgo(new Date(uploadedAt)) : "";

  return (
    <div className="carousel-item px-3 mx-20 sm:w-2/3 md:w-1/2 lg:w-1/3">
      <div className="border border-base-content/30 bg-gradient-to-b from-success via-base-300 to-base-100 shadow-lg backdrop-blur-lg p-4 rounded-lg">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full ring-4 ring-accent glow-effect"
            src={imgURL}
            alt={languageName || "Feature"}
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-lg md:text-xl font-bold text-center text-base-content">
          {languageName} - {levelOfExpertise}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm sm:text-base text-center text-base-content truncate sm:whitespace-normal h-24">
          {description}
        </p>

        {/* Time Ago */}
        <div className="mt-4 flex justify-between items-center text-sm text-accent">
          <div className="flex items-center gap-2">
            <span>⏲</span>
            <p className="text-base">{formattedTimeAgo}</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-base-content" />

        {/* Creator Section */}
        <div className="flex items-center">
          <div className="border border-base-300 p-1 rounded-full mr-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://github.com/scammerpatil.png"
              alt="Creator Avatar"
            />
          </div>
          <p className="text-base text-base-content">
            <span className="font-semibold text-accent">Scammer Patil</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
