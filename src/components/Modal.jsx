import { useState } from "react";
import { InputField } from "./ContactForm";
import { SuccessAlerts, FailedAlert } from "./Alerts";
import Loading from "./Loading";
export const Modal = ({ message }) => {
  const [close, setClose] = useState(true);
  const [loader, setLoader] = useState(false);

  const SubmitForm = (e) => {
    e.preventDefault;
    setLoader(!loader);
  };

  return (
    <div
      className={
        close
          ? "fixed z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] bg-opacity-30  max-h-full grid place-content-center  w-full  dark:bg-[#242424] bg-[#242424] duration-300 transform translate-y-screen scale-full origin-[0]"
          : " hidden"
      }
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-[#242424]">
          <button
            onClick={() => {
              setClose(!close);
            }}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center grid place-items-center">
            <div className="grid place-items-center">
              {" "}
              Kindly Enter
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                The Email Address to send the {message} to
              </h3>
            </div>
            <form class="" onSubmit={() => {}}>
              <div className="grid place-items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row bg-black rounded-lg my-4 w-md">
                <InputField type="email" label="email" name="user_email" />
              </div>
              <div className="flex max-w-lg">
                <button
                  type="button"
                  class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-lg"
                  onClick={() => {
                    setClose(!close);
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => {
                    SubmitForm(e);
                  }}
                  type="button"
                  class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 w-lg"
                >
                  {!loader ? `Submit` : <Loading />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
