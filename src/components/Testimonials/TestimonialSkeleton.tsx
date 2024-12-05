const TestimonialSkeleton = () => {
  const array = new Array(3).fill(0);
  return array.map((_, index) => (
    <>
      <div
        className="w-full md:w-1/2 lg:w-1/3 m-2 carousel-item flex flex-row justify-center items-center"
        key={index}
      >
        <div className="lg:max-w-[400px] h-96 rounded-sm p-8 shadow-two duration-300 bg-base-200 lg:px-5 xl:px-8 flex flex-col justify-around">
          {/* Rating Icons Skeleton */}
          <div className="mb-5 flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full bg-content skeleton"
              ></div>
            ))}
          </div>

          {/* Content Skeleton */}
          <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed">
            <span className="block w-full my-1 h-4 skeleton bg-content"></span>
            <span className="block w-4/5 my-1 h-4 skeleton bg-content mb-2"></span>
            <span className="block w-3/4 my-1 h-4 skeleton bg-content mb-2"></span>
            <span className="block w-2/3 my-1 h-4 skeleton bg-content"></span>
          </p>

          {/* Profile Image and Details Skeleton */}
          <div className="flex items-center">
            <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
              <div className="w-full h-full  skeleton bg-content rounded-full"></div>
            </div>
            <div className="w-full flex justify-between gap-1">
              <div>
                <h3 className="mb-1 h-4 w-24  skeleton bg-content rounded"></h3>
                <p className="text-sm text-body-color capitalize flex flex-row gap-1">
                  <span className="h-3 w-16 skeleton bg-content"></span>
                  <span className="h-3 w-8 skeleton bg-content"></span>
                  <span className="h-3 w-24 skeleton bg-content"></span>
                </p>
              </div>
              <div className="mt-2">
                <div className="w-6 h-6 skeleton bg-content rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
};

export default TestimonialSkeleton;
