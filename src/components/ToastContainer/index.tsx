import toast, { ToastBar, Toaster } from "react-hot-toast";

export default function index() {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 5000,
          success: {
            duration: 3000,
            style: {
              backgroundColor: "var(--tw-bg-base-200)",
              color: "var(--tw-text-base-content)",
            },
          },
          error: {
            duration: 3000,
            style: {
              backgroundColor: "var(--tw-bg-base-200)",
              color: "var(--tw-text-base-content)",
            },
          },
          style: {
            backgroundColor: "var(--tw-bg-base-200)",
            color: "var(--tw-text-base-content)",
            zIndex: 999999,
          },
        }}
        position="top-center"
        reverseOrder={false}
        containerStyle={{ zIndex: 99999 }}
      ></Toaster>
    </>
  );
}
