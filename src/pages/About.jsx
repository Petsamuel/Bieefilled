import { useState } from "react";
import { Stepper, Stepper2 } from "../components/Stepper";
import Content from "../components/Content";

function About() {
  const [eventState, setEventState] = useState(1);
  function handleEvent(num) {
    setEventState(num);
  }
  return (
    <section className="grid grid-cols-1 place-content-center">
      <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 px-4 gap-x-8">
        <div className="col-span-2 items-end flex flex-col text-right ">
          <Content eventState={eventState} />
        </div>
        <div className="hidden lg:block">
          <Stepper handleEvent={handleEvent} />
        </div>
        <div className="lg:hidden">
          <Stepper2 handleEvent={handleEvent} />
        </div>
      </div>
    </section>
  );
}

export default About;
