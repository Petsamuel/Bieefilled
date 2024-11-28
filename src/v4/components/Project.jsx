import { projects } from "../../components/store/data";
import { Heading } from "./Heading"
import { StickyScroll } from "./ui/sticky-scroll-reveal";


export const Project = () => {

    return (
        <section>
            <Heading title="Project" />

            <div>
                <StickyScroll content={projects} />
                
            </div>
        </section>
    )
}
