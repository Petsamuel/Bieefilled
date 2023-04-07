import { useState } from "react";
import Typewriter from "typewriter-effect";
import Socials from "./Socials";
import smile from "../assets/smile.svg";
import smiles from "../assets/smiles.svg";

function Hero() {
  const [imgChange, setImgChange] = useState(false);
  return (
    <>
      <section className="relative  text-center leading-loose justify-center grid place-items-center">
        <div className="pt-28 items-center flex justify-center">
          <img
            onMouseEnter={() => setImgChange(!imgChange)}
            onMouseLeave={() => setImgChange(!imgChange)}
            src={imgChange ? smiles : smile}
            alt="smile"
            className="h-auto rounded-full w-1/2 "
          />
        </div>
        <div className="pt-4 leading-loose text-center  justify-center w-1/2">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-500 md:text-5xl lg:text-6xl leading-loose">
            <span class="text-white font-[Poppins] leading-normal">
              Hi, I'm{" "}
              <span className="underline underline-offset-4 decoration-8 decoration-blue-400 dark:decoration-blue-500  ">
                Samuel
              </span>
            </span>
            <span className="text-white justify-center text-sm">
              <Typewriter
                options={{ loop: true }}
                onInit={(writer) => {
                  writer.typeString("Web Developer");
                  writer.pauseFor(5000);
                  writer.deleteAll();
                  writer.typeString("Technical Writer");
                  writer.pauseFor(5000).start();
                }}
              />
            </span>
          </h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 ">
            I'm a competent software engineer with a strong desire to create
            efficient, user-friendly solutions that increase the productivity
            and effectiveness of organizations.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Socials />
        </div>
      </section>
    </>
  );
}

export default Hero;
