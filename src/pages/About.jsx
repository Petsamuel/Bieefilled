import { useState } from "react";
import { motion } from "framer-motion";
import { Stepper } from "../components/Stepper";
import Content from "../components/Content";

function About() {
  const [eventState, setEventState] = useState(1);
  function handleEvent(num) {
    setEventState(num);
  }
  return (
    <motion.section exit={{ opacity: 0 }}>
      <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 px-4 gap-x-8 grid-cols-1 ">
        <div className=" lg:items-end lg:col-span-2 text-right ">
          <Content eventState={eventState} />
        </div>

        <div className=" ">
          <Stepper handleEvent={handleEvent} />
        </div>
      </div>
    </motion.section>
  );
}

export default About;
