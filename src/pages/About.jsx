import { useState } from "react";
import { motion } from "framer-motion";
import { Stepper } from "../components/Stepper";
import Content from "../components/Content";
import Header from "../components/Header";

function About() {
  const [eventState, setEventState] = useState(1);
  function handleEvent(num) {
    setEventState(num);
  }
  return (
    <section className="bg-black lg:h-full h-screen py-5">
      <Header />
      <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 px-4 gap-x-8 grid-cols-1 ">
        <div className=" lg:items-end lg:col-span-2 text-right z-auto">
          <Content eventState={eventState} />
        </div>

        <div>
          <Stepper handleEvent={handleEvent} />
        </div>
      </div>
    </section>
  );
}

export default About;
