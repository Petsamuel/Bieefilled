function Card({ data }) {
  // console.log(data.name);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-2">
      {data.map((index) => {
        return (
          <>
            <div
              class="max-w-sm p-1 rounded-lg shadow-md hover:shadow-md border-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-white "
              key={index}
            >
              <div className="bg-[#242424] w-full h-full p-4 rounded-md">
                <img src={data.svg} alt="svg" className="" />
                <a href="#">
                  <h5 class="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {index.name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-sm">
                  Go to this step by step guideline process on how to certify
                  for your weekly benefits:
                </p>
                <a
                  href={index.link}
                  class="inline-flex items-center text-inherit hover:underline"
                >
                  View
                  <svg
                    class="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card;
