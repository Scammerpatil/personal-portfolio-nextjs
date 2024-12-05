import toast from "react-hot-toast";

const toastContainer = (message: string, type: string) => {
  return toast.custom((t) => (
    <div
      className={`${
        type === "error"
          ? "bg-red-500"
          : type === "success"
          ? "bg-green-500"
          : "bg-blue-500"
      } p-4 rounded-md text-white`}
    >
      {message}
    </div>
  ));
};
