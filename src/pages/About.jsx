import { useState } from "react";
import { Stepper } from "../components/Stepper";
import Content from "../components/Content";

function About() {
  const [eventState, setEventState] = useState(1);
  function handleEvent(num) {
    setEventState(num);
  }
  return (
    <section className="grid grid-cols-1 place-content-center">
      <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 px-4 gap-x-4 grid-cols-1">
        <div className=" lg:items-end lg:col-span-2 text-right ">
          <Content eventState={eventState} />
        </div>
        <div className="lg:col-span-1">
          <div className="hidden  md:block lg:block ">
            <Stepper handleEvent={handleEvent} />
          </div>
          {/* <div className="lg:hidden md:hidden flex-1">
            <Stepper2 handleEvent={handleEvent} />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
