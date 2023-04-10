import { projects } from "../components/store/data";
import Card from "../components/Card";

function Project() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="py-2 text-center my-10 px-2 mb-3 text-white  text-semibold font-[Poppins] text-2xl  bg-gradient-to-r from-purple-600 to-blue-500 w-screen">
          Projects
        </h1>

        <Card data={projects} />
      </section>
    </>
  );
}

export default Project;
