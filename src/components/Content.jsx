import Certification from "./Certification";
import Experience from "./Experience";
import Reviews from "./Reviews";
import { Tool } from "./Tools";

function Content({ eventState }) {
  return (
    <section className=" dark:gray-500 pb-16">
      <div
        className={
          eventState === 1
            ? "text-justify leading-normal text relative w-2xl"
            : "hidden"
        }
      >
        <h1 className="py-2 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white  ">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-gray-200">
            Personal{" "}
          </span>
          Info
        </h1>
        <p className="text-sm">
          Hello! My Name is Samuel I'm a competent Software Engineer with a
          strong desire to create efficient, user-friendly solutions that
          increase the productivity and effectiveness of organizations. Expert
          in technology, and coding for the creation of dependable,
          user-friendly systems.
          <br />
          <br /> A talented leader who encourages, teaches, and leads a team of
          experts to develop software, and track changes effectively. An
          imaginative developer whose software is tailored to meet the demands
          of a company, emphasize its key assets, and encourage its success. A
          skilled speaker, and inventive software creator. I pride myself on my
          reputation in the community by creating accessible websites.
        </p>
        <div>
          <Tool />
        </div>
      </div>

      <div
        className={
          eventState === 2
            ? "text-justify leading-normal overflow-y-scroll h-5/6 "
            : "hidden"
        }
      >
        <h1 className="py-2 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white  ">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2 ">
            Education &{" "}
          </span>
          Experience
        </h1>
        <Experience />
      </div>
      <div
        className={
          eventState === 3
            ? "text-justify leading-normal overflow-y-scroll h-5/6"
            : "hidden"
        }
      >
        <h1 className="py-2 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white  ">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2">
            Certifi
          </span>
          cations
        </h1>
        <div className="">
          <Certification />
        </div>
      </div>
      <div
        className={
          eventState === 4 ? "text-justify leading-normal  " : "hidden"
        }
      >
        <h1 className="py-2 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white  ">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2">
            Top&nbsp;
          </span>
          Recommendations
        </h1>
        <div>
          <Reviews />
        </div>
      </div>
    </section>
  );
}

export default Content;
