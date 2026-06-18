import { toast } from "react-toastify";

export const useConfirmToast = () => {
  const confirm = (message: string, onConfirm: () => void) => {
    toast(
      ({ closeToast }) => (
        <div className="p-5 w-70 flex flex-col gap-4">
          <p className="text-center text-gray-800 font-medium">
            {message}
          </p>

          <div className="flex justify-between gap-3">
            <button
              onClick={closeToast}
              className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded-lg"
            >
              No
            </button>

            <button
              onClick={() => {
                onConfirm();
                closeToast();
              }}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
            >
              Yes
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: true,
        draggable: false,
        position: "top-right"
      }
    );
  };

  return { confirm };
};