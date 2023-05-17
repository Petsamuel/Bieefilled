import { Experiences } from "./store/data";
function Experience() {
  return (
    <section>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ">
        {Experiences.map((index, key) => (
          <li className="mb-10 ml-4" key={key}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {index.date}
            </time>
            <h3 className="text-lg font-semibold  dark:text-white text-white">
              {index.institution}
            </h3>
            <h6 className="text-sm font-semibold  dark:text-white text-white">
              {index.title}
            </h6>
            <p className="mb-4 text-base font-normal text-gray-300 ">
              {index.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
