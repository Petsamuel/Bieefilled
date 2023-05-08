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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-gray-200">
            Personal{" "}
          </span>
          Info
        </h1>
        <span className="text-sm">
          Hello! My Name is Samuel Peters a competent Software Engineer with a
          strong desire to create efficient, user-friendly solutions that
          increase the productivity and effectiveness of organizations. An
          expert in technologies, and coding for the creation of dependable,
          user-friendly systems. I'm a talented team player who encourages,
          teaches, and leads a team of experts to develop softwares, and track
          changes effectively.
          <p className="py-2">
            In conclusion If you're seeking a creative developer with the
            ability to customize software to your company's specific needs,
            enhance its unique features, and drive its success, look no further.
            As a skilled speaker and innovative software creator, I take pride
            in my reputation for creating accessible websites that meet the
            highest standards of excellence. With a proven track record of
            developing imaginative software solutions, I'm confident that I have
            the expertise and experience to help your company achieve its goals.
            So if you want a developer who is committed to delivering results
            and going above and beyond for their clients, I'm the right person
            for the job.
          </p>
        </span>

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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2 ">
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2">
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2">
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
