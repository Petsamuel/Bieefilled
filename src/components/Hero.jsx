import { useState } from "react";
import Typewriter from "typewriter-effect";
import Socials from "./Socials";
import smile from "../assets/smile.svg";
import smiles from "../assets/smiles.svg";
import right from "../assets/right.svg";
import left from "../assets/left.svg";

function Hero() {
  const [imgChange, setImgChange] = useState(smiles);

  const checker = (e) => {
    var y = e.movementY;
    var x = e.movementX;
    switch (true) {
      case x > 0:
        setImgChange(right);
        break;
      case x < 0:
        setImgChange(left);
        break;
      default:
        setImgChange(smiles);
        break;
    }
  };
  // console.log(imgChange);

  return (
    <>
      <section>
        <div className="lg:pt-20 flex lg:flex-row flex-col justify-center items-center px-16">
          <div
            className="flex-auto"
            onMouseMove={(e) => {
              checker(e);
            }}
          >
            <img
              src={imgChange}
              alt="smile"
              className={
                imgChange ? " rounded-full w-full" : "rounded-full w-full"
              }
            />
          </div>
          <div className="lg:w-2/4 dark:text-white flex-auto ">
            <span className="text-white font-[Poppins]  text-3xl font-extrabold  md:text-2xl lg:text-5xl leading-loose">
              Samuel Peters
            </span>{" "}
            <br />
            <span className="font-[Poppins]  lg:text-3xl flex  sm:text-1xl md:text-2xl">
              I'm &nbsp;
              <span className=" px-2 bg-gradient-to-r from-purple-600 to-blue-500  ">
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
                    writer.pauseFor(5000);
                    writer.deleteAll();

                    writer.typeString("An Open Source Contributor...");
                    writer.pauseFor(5000).start();
                  }}
                />
              </span>
            </span>
            <div class="text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400 lg:w-4/5 py-4 place-items-center leading-normal ">
              I'm a skilled software engineer creating efficient and
              user-friendly solutions to enhance productivity.
              <Socials />
            </div>
            <div className="">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-purple-500/50"
                onMouseEnter={() => setImgChange(smile)}
                onMouseLeave={() => setImgChange(smiles)}
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#242424] rounded-md group-hover:bg-opacity-0">
                  RESUME
                </span>
              </button>
              <button
                class="relative inline-flex items-center ju
              stify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-purple-500/50"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#242424] rounded-md group-hover:bg-opacity-0">
                  QUOTES
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
