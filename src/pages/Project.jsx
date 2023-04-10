import { projects } from "../components/store/data";
import Card from "../components/Card";
import GitHubCalendar from "react-github-calendar";

function Project() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="py-4 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white  mt-4">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2">
            Projects&nbsp;
          </span>
        </h1>

        <Card data={projects} />

        <div>
          <h1 className="py-4 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white  mt-4">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2">
              Open Source
            </span>
            &nbsp; Activities
          </h1>
          <div className="px-8">
            <GitHubCalendar
              username="Petsamuel"
              color="Purple"
              hideColorLegend
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
