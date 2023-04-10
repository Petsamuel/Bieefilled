import { Review } from "./store/data";

function Reviews() {
  return (
    <figure class=" relativemax-w-screen-md mx-auto text-left ">
      {Review.map((index, key) => (
        <>
          <figure
            class="relative max-w-screen-md mx-auto text-left py-2"
            key={key}
          >
            <svg
              aria-hidden="true"
              class="absolute w-6 h-6 mx-auto mb-3 left-0  text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-sm text-left italic font-medium text-gray-900 dark:text-white my-5 mx-6">
                {index.reviews}
              </p>
            </blockquote>
            <figcaption class="flex items-left justify-left mt-6 space-x-3">
              <img
                class="w-8 h-8 rounded-full"
                src={index.image}
                alt="profile picture"
              />
              <div class="flex items-left divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                  {index.name}
                </cite>
                <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  {index.title}
                </cite>
              </div>
            </figcaption>
          </figure>
        </>
      ))}
    </figure>
  );
}

export default Reviews;
