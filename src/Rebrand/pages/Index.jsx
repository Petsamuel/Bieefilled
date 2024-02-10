import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Stacks } from "../components/Stacks";
import { About, Experiences, projects } from "../../components/store/data";
import { Post } from "../../components/store/post";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { Modal } from "../components/modal";

export const Index = () => {
    const [trigger, setTrigger] = useState();
    return (
        <section className="flex flex-col lg:m-16 m-6 md:m-8">
            <header className="">
                <Header />
            </header>
            <main className="max-h-content">
                <section className="lg:mx-8  mx-2 ">
                    <Stacks />
                </section>
                <section className="my-12 font-[Inter] " id="About">
                    {About.map((value, index) => (
                        <p key={index}>
                            {value.about}
                            {trigger ? (
                                <span>
                                    <p className="py-2">{value.more}</p>
                                    <p>{value.extra}</p>
                                </span>
                            ) : (
                                ""
                            )}
                        </p>
                    ))}
                    {trigger ? (
                        ""
                    ) : (
                        <input
                            onClick={() => {
                                setTrigger(!trigger);
                            }}
                            type="button"
                            value="Readmore..."
                            className=" cursor-pointer font-bold text-gray-600 text-left w-[50%] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-1 z-50"
                        />
                    )}
                </section>
                <section className="" id="Resume">
                    <p class="text-2xl font-extrabold py-8 font-['Inter']">Resume</p>
                    <div className="py-8">
                        {Experiences.map((value, index) => (
                            <div className="font-[Inter]">
                                <div>{value.date}</div>
                                <div className="font-extrabold">{value.institution}</div>
                                <div>{value.title}</div>
                                <div >{value.skills}</div>
                                <hr className="my-4 h-[0px]" />
                            </div>
                        ))}
                    </div>
                </section>
                <section Id="Portfolio">
                    <p class=" font-black py-8 text-2xl font-['Inter']">Portfolio</p>
                    <div className="py-4 flex flex-col gap-6  font-['Inter']">
                        {projects.map((value, index) => (
                            <div className=" cursor-pointer hover: py-2  hover:text-lg  " key={index}>
                                <a href={value.link} className="font-extrabold">{value.name} <span className="text-[10px] text-gray-400 mx-2 absolute"><FaExternalLinkAlt /></span></a>
                                <div className="">{value.institution}</div>

                            </div>
                        ))}
                        <hr />
                    </div>
                </section>
                <section id="Articles">
                    <p class=" font-black py-8 text-2xl font-['Inter']">Articles</p>
                    <div className="py-8 font-['Inter']">
                        {Post.map((value, index) => (
                            <div className="flex">
                                <div className=" flex cursor-pointer hover:text-lg  py-4 " key={index}>

                                    <a class="flex " href={value.href}>{1 + index}. {value.title}  <span className="text-[10px] text-gray-400 mx-2">
                                        <FaExternalLinkAlt />

                                    </span>
                                    </a>
                                    <hr className="my-4 h-[0px]" />
                                </div>


                            </div>
                        ))}
                    </div>
                </section>
                {/* <section id="Recommendation"></section> */}


            </main>
            {/* <Modal/> */}
            <footer mt-5>
                <Footer />
            </footer>
        </section>
    );
};
