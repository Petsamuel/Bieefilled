import { useState } from "react";
import { Modal } from "./Modal";
import Typewriter from "typewriter-effect";
import Socials from "./Socials";
import smile from "../assets/smile.svg";
import smiles from "../assets/smiles.svg";
import right from "../assets/right.svg";
import left from "../assets/left.svg";

function Hero() {
  const [imgChange, setImgChange] = useState(smiles);
  const [serveModal, setServeModal] = useState(false);

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
      <section className="place-content-center">
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
            <span className="text-white font-[Poppins]  text-2xl font-extrabold  md:text-2xl lg:text-5xl leading-loose">
              Samuel Peters
            </span>{" "}
            <br />
            <span className="font-[Poppins]  lg:text-3xl flex  sm:text-2xl md:text-2xl items-center">
              <span className="">I'm&nbsp;</span>
              <span className=" px-2 bg-gradient-to-r from-purple-600 to-blue-500  sm:text-sm">
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
            <div className="text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400 lg:w-4/5 py-4 place-items-center leading-normal ">
              I'm a skilled software engineer creating efficient and
              user-friendly solutions to enhance productivity.
              <Socials />
            </div>
            <div className="">
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500bg-[#242424]bg-[#242424]bg-[#242424]bg-[#242424]focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm"
                onMouseEnter={() => setImgChange(smile)}
                onMouseLeave={() => setImgChange(smiles)}
                onClick={() => {
                  setServeModal(!serveModal);
                }}
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] dark:bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white">
                  RESUME
                </span>
              </button>
              <a
                href="/contact"
                className="relative inline-flex items-center ju
              stify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] dark:bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white">
                  QUOTES
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* modal */}
        <div className="absolute top-0 w-full">
          {serveModal ? <Modal message="RESUME" /> : ""}
        </div>
      </section>
    </>
  );
}

export default Hero;
