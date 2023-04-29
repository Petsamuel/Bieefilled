import { Post } from "./store/post";

function BlogCard() {
  return (
    <section class="">
      <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
          <h1 className="py-4 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white mt-4">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2 text-3xl">
              Blog&nbsp;
            </span>
          </h1>

          <p class="max-w-lg mx-auto mt-4 text-gray-500">
            Latest Blog Post on technology trends
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {Post.map((value, key) => (
            <div key={key}>
              <div class="relative">
                <img
                  class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={value.featured_img}
                  alt=""
                />

                <div class="absolute bottom-0 flex p-3 bg-black">
                  <img
                    class="object-cover object-center w-10 h-10 rounded-full"
                    src="https://miro.medium.com/v2/resize:fill:96:96/0*6Ts5md0OPNbNzI9v"
                    alt=""
                  />

                  <div class="mx-4">
                    <h1 class="text-sm text-gray-700 dark:text-gray-200">
                      Samuel Peters
                    </h1>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Software Developer
                    </p>
                  </div>
                </div>
              </div>

              <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                {value.title}
              </h1>

              <hr class="w-32 my-6 text-blue-500" />

              <p class="text-sm text-gray-500 dark:text-gray-400">
                {value.description}
              </p>

              <a
                href={value.href}
                class="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
