function Card({ data }) {
  // console.log(data.name);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-2">
      {data.map((index) => {
        return (
          <>
            <div
              class="max-w-sm p-1 rounded-lg shadow-md hover:shadow-lg border-1  bg-gradient-to-r from-purple-600 to-blue-500  hover:first-line:bg-gradient-to-l hover:from-white hover:to-fuchsia-500 "
              key={index}
            >
              <div className="bg-[#242424] w-full h-full p-4 rounded-md">
                {!index.institution ? (
                  <img src={index.svg} alt="svg" className="w-16 pb-6" />
                ) : (
                  <img
                    src={index.image}
                    alt="svg"
                    className="rounded-t-lg pb-6"
                  />
                )}
                <a href="#">
                  <h5 class="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {index.name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-sm">
                  {index.description
                    ? index.description
                    : "Go to this step by step guideline process on how to certify for your weekly benefits"}
                </p>
                <span class="inline-flex items-center text-inherit hover:underline">
                  {index.institution ? (
                    <a
                      href={index.links}
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="#ffff"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="sr-only">GitHub account</span>
                    </a>
                  ) : (
                    <a href={index.views}>View</a>
                  )}
                  <a
                    href={index.link}
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                  >
                    <svg
                      class="w-5 h-5 ml-2"
                      fill="#ffff"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card;
