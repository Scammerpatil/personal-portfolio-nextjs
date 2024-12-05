const FeatureSkeleton = () => {
  const array = new Array(4).fill(0);
  return array.map((_, index) => (
    <>
      <div className="w-1/3 rounded-md mx-3 group z-10">
        <div className="border border-base-content select-none max-w-[80%] my-[5rem] bg-opacity-50 shadow-lg backdrop-blur-[7px] overflow-hidden transition-all duration-500 bg-gradient-to-b p-4 rounded-lg main">
          <div className="flex flex-col p-4">
            {/* Skeleton for Image */}
            <div className="w-40 h-40 mx-auto skeleton animate-pulse rounded-full" />

            {/* Skeleton for Title */}
            <div className="mt-4 w-3/4 h-6 mx-auto skeleton animate-pulse"></div>

            {/* Skeleton for Description */}
            <div className="mt-2 w-full h-24 skeleton animate-pulse"></div>

            {/* Skeleton for Token Info */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div className="mr-2 w-6 h-6 skeleton animate-pulse rounded-full"></div>
                <div className="w-1/2 h-6 skeleton animate-pulse"></div>
              </div>
            </div>

            {/* Skeleton for Horizontal Line */}
            <hr className="my-4 border-gray-300 skeleton animate-pulse" />

            {/* Skeleton for Creator Info */}
            <div className="creator flex items-center">
              <div className="w-10 h-10 skeleton animate-pulse rounded-full mr-3" />
              <div className="w-1/4 h-6 skeleton animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
};

export default FeatureSkeleton;
