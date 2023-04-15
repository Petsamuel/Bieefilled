import { useState } from "react";
function Header() {
  const [toggle, setToggle] = useState(true);
  // const [active, setActive] = useState();

  const [updateNavbar, setUpdateNavbar] = useState();
  function scrollHandler() {
    if (window.scrollY >= 20) {
      setUpdateNavbar(true);
    } else {
      setUpdateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <nav
        class={
          updateNavbar
            ? " w-screen fixed z-50 bg-[#242424] bg-opacity-[0.9]"
            : " w-screen fixed z-50 "
        }
      >
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a href="/" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white brandname">
              Samuel Peters
            </span>
          </a>
          <div class="flex items-center md:order-2">
            <a
              href="/blog"
              class="text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none"
            >
              Blog
            </a>

            {/* 🌤️sun &&  🌙moon */}
            <button
              data-collapse-toggle="mega-menu"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-blue-600 rounded-lg md:hidden outline-none focus:outline-none hover:text-gray-700"
              aria-controls="mega-menu"
              aria-expanded="false"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            id="mega-menu"
            class={
              toggle
                ? "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between  w-full md:flex md:w-auto md:order-1 bg-[#242424]"
            }
          >
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <a
                  href="/"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#242424]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  id="mega-menu-dropdown-a"
                  data-dropdown-toggle="mega-menu-dropdown"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#242424]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#242424]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#242424]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
