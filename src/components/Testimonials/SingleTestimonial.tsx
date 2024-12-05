import { Testimonial } from "@/types/testimonial";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation, github, email } =
    testimonial;
  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full md:w-full lg:w-1/2 xl:w-1/3 m-2 carousel-item flex flex-row justify-center items-center">
      <div className="lg:max-w-[430px] h-full rounded-sm p-8 shadow-two duration-300 hover:shadow-one bg-base-200 lg:px-5 xl:px-8 flex flex-col justify-around">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed ">
          ❝{content.slice(0, 270)}❞
        </p>
        <div className="flex items-center">
          <Image
            src={image}
            alt={name}
            height={50}
            width={50}
            className="rounded-full mr-4"
          />
          <div className="w-full flex justify-between">
            <div>
              <h3 className="mb-1 text-lg font-semibold text-dark lg:text-base xl:text-lg">
                {name}
              </h3>
              <p className="text-sm text-body-color capitalize flex flex-row gap-1">
                {designation}
                <span>| </span>
                <Link className="lowercase" href={`mailto:${email}`}>
                  {email}
                </Link>
              </p>
            </div>
            <div className="mt-2">
              <Link href={`https://github.com/${github}`} target="_blank">
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
