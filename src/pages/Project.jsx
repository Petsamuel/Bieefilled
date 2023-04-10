import { projects } from "../components/store/data";
import Card from "../components/Card";

function Project() {
  return (
    <>
      <section>
        <h1 className="py-2 text-center my-10 px-2 mb-3 text-white  text-semibold font-[Poppins] text-2xl  bg-gradient-to-r from-purple-600 to-blue-500">
          Projects
        </h1>
        <div>
          <Card data={projects} />
        </div>
      </section>
    </>
  );
}

export default Project;
