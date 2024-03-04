import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Stacks } from "../components/Stacks";
import { About, Experiences, projects, Review, tools } from "../../components/store/data";
import { Post } from "../../components/store/post";
import { FaExternalLinkAlt, FaRegArrowAltCircleUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
// import GitHubCalendar from "react-github-calendar";s
import Typewriter from "typewriter-effect";
import 'swiper/css';
import 'swiper/css/autoplay';



export const Index = () => {
    const [trigger, setTrigger] = useState();

    const [back2Top, setBack2Top] = useState();

    function scrollHandler() {
        if (window.scrollY >= 250) {
            setBack2Top(true);
        } else {
            setBack2Top(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);
    return (
        <>

            <section className="flex flex-col lg:m-16 m-6 md:m-8" id="Home">
                <header className="">
                    <Header />
                </header>

                <main className="max-h-content">
                    <section className="lg:mx-8 ">
                        <Stacks />
                    </section>
                    <section className="my-12 font-[Inter] text-md" id="Resume">
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
                            <p key={index} className="text-justify">
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
                    <section className="" id="Resume ">
                        <p class="text-2xl font-extrabold py-8 font-['Inter'] uppercase">Resume</p>
                        <div className="pb-8">
                            {Experiences.map((value, index) => (
                                <div className="font-[Inter] text-sm cursor-pointer">
                                    <div>{value.date}</div>
                                    <div className="font-extrabold uppercase">{value.institution}</div>
                                    <div>{value.title}</div>
                                    <div >{value.skills}</div>
                                    <hr className="my-4 h-[0px]" />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section Id="Portfolio">
                        <p class=" font-black py-8 text-2xl font-['Inter'] uppercase ">Portfolio</p>
                        <div className="pb-4 flex flex-col gap-6  font-['Inter'] text-sm">
                            {projects.map((value, index) => (
                                <div className=" cursor-pointer py-2" key={index}>
                                    <a href={value.link} className="font-extrabold uppercase">{value.name} <span className="text-[10px] text-gray-400 mx-2 absolute"><FaExternalLinkAlt /></span></a>
                                    <div className="">{value.institution}</div>
                                    <div className="flex items-center space-x-2 flex-wrap">
                                        {value.stack.map((val) => (
                                            <div className=" text-xs font-light py-2 rounded-lg items-center flex hover:scale-95 active:scale-90 ">{val}</div>
                                        ))}
                                    </div>

                                </div>
                            ))}
                            <hr />
                        </div>
                    </section>
                    <section className="" id="Reviews">
                        <p class="text-2xl font-extrabold py-8 font-['Inter'] uppercase">Reviews</p>
                        <div className="pb-8 ">
                            {Review.map((value, index) => (
                                <div className="hover:scale-95 active:scale-90 font-[Inter]  text-sm cursor-pointer flex-col flex gap-1 " key={index}>
                                    <div className="text-xs">{value.date}</div>
                                    <a href={value.link} className="font-extrabold gap-x-2 flex flex-wrap uppercase">{value.name} <span className="text-sm font-thin">{value.title}</span></a>
                                    <div> <span className="text-2xl text-bold">"</span>{value.reviews}</div>

                                    <hr className="my-4 h-[0px]" />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="tools" className=" my-9 h-16">

                        <div className="">
                            <Swiper
                                modules={[Autoplay, Navigation,]}

                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={15}
                                slidesPerView={5}
                                onSwiper={(swipper) => console.log(swipper)}
                            >
                                {tools.map((val, key) => (
                                    <SwiperSlide key={key} className="cursor-pointer hover:text-2xl"><div className="flex items-center flex-col lg:text-4xl text-md">{val.icon} <div className="font['Inter'] cursor-pointer text-xs font-thin py-1">{val.name}</div></div></SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </section>

                    {/* <section id="Opensource">
                        <p class=" font-black py-8 text-2xl font-['Inter'] uppercase">Open Sourcery</p>
                        <GitHubCalendar
                            username="Petsamuel"
                            color="black"
                            hideColorLegend
                        />

                    </section> */}

                    <section id="Articles">
                        <p class=" font-black py-8 text-2xl font-['Inter'] uppercase">Articles</p>
                        <div className="pb-4 font-['Inter'] text-sm">
                            {Post.map((value, index) => (
                                <div className="flex">
                                    <div className=" flex cursor-pointer hover:text-lg hover:scale-95 active:scale-90  py-4 " key={index}>

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


                <div className="relative ">
                    <a href="#Home" className={!back2Top ? "hidden" :
                        " hover:text-3xl hover:scale-90 active:scale-90 fixed text-2xl animate-bounce rounded-full bottom-10 right-5"} id="back2Top"><FaRegArrowAltCircleUp /></a>

                </div>

                <footer mt-5>
                    <Footer />
                </footer>
            </section>
        </>
    );
};
