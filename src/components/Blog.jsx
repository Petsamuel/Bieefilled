import { Post } from "./store/post";

function BlogCard() {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="py-4 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2 text-3xl">
              Blog&nbsp;
            </span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-white">
            Latest Blog Post on technology trends
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {Post.map((value, key) => (
            <div key={key}>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={value.featured_img}
                  alt=""
                />

                <div className="absolute bottom-0 flex p-3 bg-black">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://miro.medium.com/v2/resize:fill:96:96/0*6Ts5md0OPNbNzI9v"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-200 ">Samuel Peters</h1>
                    <p className="text-sm text-gray-400 ">Software Developer</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-white ">
                {value.title}
              </h1>

              <hr className="w-32 my-6 text-blue-500" />

              <p className="text-sm text-gray-400 ">{value.description}</p>

              <a
                href={value.href}
                className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >
                Read more ➳
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
