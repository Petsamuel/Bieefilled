import { useState } from "react";

export const Stepper = ({ handleEvent }) => {
  // const [status, setStatus]=useState()
  const [counter, setCounter] = useState(1);
  handleEvent(counter);
  return (
    <div className="fixed z-40">
      <div className="hidden  md:block lg:block ">
        <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li
            className={
              counter == 1
                ? "text-white mb-10 ml-6 cursor-pointer"
                : "mb-10 ml-6 cursor-pointer hover:text-white"
            }
            onClick={() => {
              setCounter(1);
            }}
          >
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Personal Info</h3>
            <p className="text-sm">See details here</p>
          </li>
          <li
            className={
              counter == 2
                ? "text-white mb-10 ml-6 cursor-pointer"
                : "mb-10 ml-6 cursor-pointer hover:text-white"
            }
            onClick={() => {
              setCounter(2);
            }}
          >
            <span
              className={
                counter >= 2
                  ? "bg-gradient-to-br from-purple-600 to-blue-500 absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900"
                  : "absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              }
            >
              <svg
                aria-hidden="true"
                className={
                  counter >= 2
                    ? "w-5 h-5 text-white dark:text-white"
                    : "w-5 h-5 text-gray-500 dark:text-gray-400"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="font-medium leading-tight">
              Education & Experience
            </h3>
            <p className="text-sm">See details here</p>
          </li>
          <li
            className={
              counter == 3
                ? "text-white mb-10 ml-6 cursor-pointer"
                : "mb-10 ml-6 cursor-pointer hover:text-white"
            }
            onClick={() => {
              setCounter(3);
            }}
          >
            <span
              className={
                counter >= 3
                  ? "bg-gradient-to-br from-purple-600 to-blue-500 absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900"
                  : "absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              }
            >
              <svg
                aria-hidden="true"
                className={
                  counter >= 3
                    ? "w-5 h-5 text-white dark:text-white"
                    : "w-5 h-5 text-gray-500 dark:text-gray-400"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Certifications</h3>
            <p className="text-sm">See details here</p>
          </li>
          <li
            className={
              counter == 4
                ? "text-white mb-10 ml-6 cursor-pointer"
                : "mb-10 ml-6 cursor-pointer hover:text-white"
            }
            onClick={() => {
              setCounter(4);
            }}
          >
            <span
              className={
                counter == 4
                  ? "bg-gradient-to-br from-purple-600 to-blue-500 absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900"
                  : "absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              }
            >
              <svg
                aria-hidden="true"
                className={
                  counter == 4
                    ? "w-5 h-5 text-white dark:text-white"
                    : "w-5 h-5 text-gray-500 dark:text-gray-400"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Recommendations</h3>
            <p className="text-sm">See details here</p>
          </li>
        </ol>
      </div>
      {/* mobile stepper */}
      <div className="lg:hidden md:hidden fixed  w-full bg-[#242424] bg-opacity-50 bottom-0 ">
        <ol className="flex items-center w-full my-3 ">
          <li
            className={
              "flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800 cursor-pointer "
            }
            onClick={() => {
              setCounter(1);
            }}
          >
            <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
              1
            </span>
          </li>
          <li
            className={
              counter <= 2
                ? "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700 cursor-pointer"
                : "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-blue-800 cursor-pointer"
            }
            onClick={() => {
              setCounter(2);
            }}
          >
            <span
              className={
                counter <= 2
                  ? "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
                  : "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
              }
            >
              2
            </span>
          </li>
          <li
            className={
              counter <= 3
                ? "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700 cursor-pointer"
                : "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-blue-800 cursor-pointer "
            }
            onClick={() => {
              setCounter(3);
            }}
          >
            <span
              className={
                counter <= 2
                  ? "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
                  : "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
              }
            >
              3
            </span>
          </li>
          <li
            className="flex items-center w-full cursor-pointer "
            onClick={() => setCounter(4)}
          >
            <span
              className={
                counter <= 2
                  ? "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
                  : "flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
              }
            >
              4
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};
