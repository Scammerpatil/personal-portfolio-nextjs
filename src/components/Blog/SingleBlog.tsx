import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, imageURL, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-base-100 shadow-one duration-300 hover:shadow-two">
        <Link
          href={`/blog/${[title.replace(/\s+/g, "-").toLowerCase()]}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-base-100">
            {tags[0]}
          </span>
          <Image src={imageURL} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/blog/${[title.replace(/\s+/g, "-").toLowerCase()]}`}
              className="mb-4 block text-xl font-bold hover:text-primary text-base-content sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color border-base-content dark:border-opacity-10">
            {paragraph.slice(0, 100)}...
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-base-content capitalize">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-bg-content">Date</h4>
              <p className="text-xs text-body-color">
                {new Date(publishDate).getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
