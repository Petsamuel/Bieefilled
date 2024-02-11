import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Stacks } from "../components/Stacks";
import { About, Experiences, projects, Review } from "../../components/store/data";
import { Post } from "../../components/store/post";
import { FaExternalLinkAlt } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export const Index = () => {
    const [trigger, setTrigger] = useState();
    return (
        <>

            <section className="flex flex-col lg:m-16 m-6 md:m-8">
                <header className="">
                    <Header />
                </header>

                <main className="max-h-content">
                    <section className="lg:mx-8  mx-2 ">
                        <Stacks />
                    </section>
                    <section className="my-12 font-[Inter] text-md" id="About">
                        <div class="quote h-14">

                            <span className=" mb-5 lg:text-3xl flex  sm:text-2xl md:text-2xl  lg:text-justify items-center text-center justify-center lg:justify-normal">

                                <span className="flex  px-6 sm:text-sm text-xs italic  gap-1"> <p>"</p>
                                    <Typewriter
                                        options={{ loop: true }}
                                        onInit={(writer) => {
                                            writer.typeString("The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt");
                                            writer.pauseFor(5000);
                                            writer.deleteAll();

                                            writer.typeString("Your attitude determines your altitude. Rise above the challenges with a positive mindset and soar to new heights. - Zig Ziglar");
                                            writer.pauseFor(5000);
                                            writer.deleteAll();
                                            writer.typeString("The only limit to our realization of tomorrow will be our doubts of today. - Franklin D.Roosevelt");
                                            writer.pauseFor(5000);
                                            writer.deleteAll();

                                            writer.typeString("Don't watch the clock; do what it does. Keep going. - Sam Levenson");
                                            writer.pauseFor(5000).start();
                                        }}
                                    />

                                </span>
                            </span>

                        </div>

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
                            <>
                                <input
                                    onClick={() => {
                                        setTrigger(!trigger);
                                    }}
                                    type="button"
                                    value="Readmore..."
                                    className="text-md cursor-pointer font-bold py-3"
                                />

                            </>)}
                    </section>
                    <section className="" id="Resume">
                        <p class="text-2xl font-extrabold py-8 font-['Inter'] ">Resume</p>
                        <div className="pb-8 ">
                            {Experiences.map((value, index) => (
                                <div className="font-[Inter] text-sm">
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
                        <div className="pb-4 flex flex-col gap-6  font-['Inter'] text-sm">
                            {projects.map((value, index) => (
                                <div className=" cursor-pointer py-2  hover:text-lg  " key={index}>
                                    <a href={value.link} className="font-extrabold">{value.name} <span className="text-[10px] text-gray-400 mx-2 absolute"><FaExternalLinkAlt /></span></a>
                                    <div className="">{value.institution}</div>

                                </div>
                            ))}
                            <hr />
                        </div>
                    </section>
                    <section className="" id="Reviews">
                        <p class="text-2xl font-extrabold py-8 font-['Inter'] ">Reviews</p>
                        <div className="pb-8 ">
                            {Review.map((value, index) => (
                                <div className="font-[Inter] text-sm cursor-pointer flex-col flex gap-1" key={index}>
                                    <div>{value.date}</div>
                                    <a href={value.link} className="font-extrabold gap-x-2 flex flex-wrap ">{value.name} <span className="text-sm font-thin">{value.title}</span></a>
                                    <div>{value.reviews}</div>
                                    {/* <div >{value.Review}</div> */}
                                    <hr className="my-4 h-[0px]" />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="Articles">
                        <p class=" font-black py-8 text-2xl font-['Inter']">Articles</p>
                        <div className="pb-4 font-['Inter'] text-sm">
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

                </main>





                <footer mt-5>
                    <Footer />
                </footer>
            </section>
        </>
    );
};
