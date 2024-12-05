const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        <h1 className="text-2xl font-bold mt-10">Loading...</h1>
      </div>
    </>
  );
};
export default Loading;
