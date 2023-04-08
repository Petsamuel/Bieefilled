import { useState } from "react";
import Typewriter from "typewriter-effect";
import Socials from "./Socials";
import smile from "../assets/smile.svg";
import smiles from "../assets/smiles.svg";

function Hero() {
  const [imgChange, setImgChange] = useState(true);
  return (
    <>
      <section>
        <div className="lg:pt-20 flex lg:flex-row flex-col justify-center items-center px-16">
          <div>
            <img
              onMouseEnter={() => setImgChange(!imgChange)}
              onMouseLeave={() => setImgChange(!imgChange)}
              src={imgChange ? smiles : smile}
              alt="smile"
              className={
                imgChange ? " rounded-full w-full" : "rounded-full w-full"
              }
            />
          </div>
          <div className="lg:w-2/4 dark:text-white">
            <span className="text-white font-[Poppins]  text-2xl font-extrabold  md:text-5xl lg:text-6xl leading-loose">
              Hi There,
            </span>{" "}
            <br />
            <span className="font-[Poppins]  text-2xl">I'm Samuel Peters</span>
            <span className=" text-gray-500  font-[brandname] ">
              <Typewriter
                options={{ loop: true }}
                onInit={(writer) => {
                  writer.typeString("A Software Engineer...");
                  writer.pauseFor(5000);
                  writer.deleteAll();

                  writer.typeString("A Technical Writer...");
                  writer.pauseFor(5000);
                  writer.deleteAll();

                  writer.typeString("A Freelance Analysts...");
                  writer.pauseFor(5000).start();
                }}
              />
            </span>
            <div class="text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400 w-4/5 py-4 place-items-center leading-normal">
              I'm a skilled software engineer creating efficient and
              user-friendly solutions to enhance productivity.
              <Socials />
            </div>
            <div className="">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md shadow-purple-500/50">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#242424] rounded-md group-hover:bg-opacity-0">
                  RESUME
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md shadow-purple-500/50">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#242424] rounded-md group-hover:bg-opacity-0">
                  CONNECT
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
