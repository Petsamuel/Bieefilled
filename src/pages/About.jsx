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
    <section className="bg-black ">
      <Header />
      <div className="flex py-20 lg:mx-10 mx-4 gap-14 lg:flex-row flex-col">
        {/* grid lg:grid-cols-3 md:grid-cols-2 px-4 gap-8 grid-cols-1 py-9 */}
        <div className="  w-[90%] ">
          <Content eventState={eventState} />
        </div>

        <div className="flex-1 mt-10">
          <Stepper handleEvent={handleEvent} />
        </div>
      </div>
    </section>
  );
}

export default About;
