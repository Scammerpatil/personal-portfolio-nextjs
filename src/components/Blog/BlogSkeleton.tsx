const BlogSkeleton = () => {
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            {/* Title Skeleton */}
            <div className="animate-pulse mb-8 h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>

            {/* Meta Info Skeleton */}
            <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
              <div className="flex flex-wrap items-center">
                {/* Author Info */}
                <div className="mb-5 mr-10 flex items-center">
                  <div className="mr-4">
                    <div className="relative h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="w-full">
                    <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>

                {/* Date and Other Meta */}
                <div className="mb-5 flex items-center">
                  <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded mr-5"></div>
                  <div className="h-4 w-10 bg-gray-300 dark:bg-gray-700 rounded mr-5"></div>
                  <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>

            {/* Content Skeleton */}
            <div>
              <div className="mb-10 h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="mb-10 h-4 w-11/12 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="mb-10 h-4 w-10/12 bg-gray-300 dark:bg-gray-700 rounded"></div>

              {/* Image Placeholder */}
              <div className="mb-10 w-full overflow-hidden rounded bg-gray-300 dark:bg-gray-700 aspect-video"></div>

              <div className="mb-8 h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="mb-10 h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>

              {/* List Skeleton */}
              <ul className="mb-10 list-inside list-disc text-body-color">
                <li className="mb-2 h-4 w-11/12 bg-gray-300 dark:bg-gray-700 rounded"></li>
                <li className="mb-2 h-4 w-10/12 bg-gray-300 dark:bg-gray-700 rounded"></li>
                <li className="mb-2 h-4 w-9/12 bg-gray-300 dark:bg-gray-700 rounded"></li>
                <li className="mb-2 h-4 w-8/12 bg-gray-300 dark:bg-gray-700 rounded"></li>
              </ul>

              {/* Quote Box Skeleton */}
              <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8">
                <div className="animate-pulse h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="animate-pulse h-4 w-9/12 bg-gray-300 dark:bg-gray-700 rounded mt-2"></div>
                <div className="animate-pulse h-4 w-8/12 bg-gray-300 dark:bg-gray-700 rounded mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSkeleton;
