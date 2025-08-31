import { useState, useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Stacks } from "../components/Stacks";
import {
  About,
  Experiences,
  projects,
  Review,
  tools,
} from "../../components/store/data";
import { Post } from "../../components/store/post";
import { FaExternalLinkAlt, FaRegArrowAltCircleUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import {  useLocomotiveScroll } from 'react-locomotive-scroll';
import Typewriter from "typewriter-effect";
import { getQuotes } from "../../service/api";
import "swiper/css";
import "swiper/css/autoplay";
import { Avatar } from "@radix-ui/themes";

export const Index = () => {
  const [trigger, setTrigger] = useState();
  const [back2Top, setBack2Top] = useState();

  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchQuotes = async () => {
      const data = await getQuotes();
      setQuotes(data.quotes);
    };
    fetchQuotes();
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 250) {
      setBack2Top(true);
    } else {
      setBack2Top(false);
    }
  }
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2); // Take first 2 initials
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", scrollHandler);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      <div className="scroll-container">
        <section className=" flex flex-col " id="Home">
          <header className="lg:mx-16 mx-6 md:mx-8">
            <Header />
          </header>

          <main className="max-h-content">
            <section className="lg:mx-16 lg:m-16 m-6 md:m-8 text-black">
              <Stacks />
            </section>
            <section
              className="my-12 font-[Inter] text-md lg:m-16 m-6 md:m-8"
              id="Resume"
              data-scroll
              data-scroll-speed={2}
            >
              <div class="quote h-14">
                <span className=" mb-5 lg:text-3xl flex sm:text-2xl md:text-2xl  lg:text-justify items-center text-center justify-center lg:justify-normal text-black">
                  <span className="flex  px-6 sm:text-sm text-xs italic gap-1 text-black ">
                    {quotes.length > 0 && (
                      <Typewriter
                        options={{ loop: true }}
                        onInit={(writer) => {
                          if (quotes.length > 0) {
                            quotes.forEach((quote) => {
                              writer
                                .typeString(`${quote.text} - ${quote.author}`)
                                .pauseFor(5000)
                                .deleteAll();
                            });
                            writer.start();
                          }
                        }}
                      />
                    )}
                  </span>
                </span>
              </div>

              {About.map((value, index) => (
                <p key={index} className="text-justify text-black">
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
                    className="text-md cursor-pointer font-bold py-3 text-black"
                  />
                </>
              )}
            </section>
            <section
              className="lg:mx-16 mx-6 md:mx-8 text-black"
              id="Resume"
              data-scroll
              data-scroll-speed={10}
            >
              <p className="text-2xl font-extrabold py-8 font-['Inter'] uppercase">
                Resume
              </p>
              <div className="pb-8">
                {Experiences.map((value, index) => (
                 <>
                  <div className="flex gap-4 w-full p-2" key={index}>
                    <div className="bg-gray-100 text-black cursor-pointer hover:bg-gray-200 items-center flex justify-center  h-[3rem]">
                      <Avatar
                        size="3"
                        radius="full"
                        className=" flex items-center p-4 "
                        fallback={getInitials(value.institution)}
                      />
                    </div>
                    <div className="font-[Inter] text-sm cursor-pointer hover:bg-gray-50">
                      <div>{value.date}</div>
                      <div className="font-extrabold uppercase">
                        {value.institution}
                      </div>
                      <div>{value.title}</div>
                      <div>{value.skills}</div>
                    </div>
                  </div>
                    <hr className="my-4 h-[0px] w-full" />
                 </>
                ))}
              </div>
            </section>

            <section
              id="Portfolio"
              className="lg:mx-16 mx-6 md:mx-8 text-black"
            >
              <p className=" font-black py-8 text-2xl font-['Inter'] uppercase ">
                Projects
              </p>
              <div className="pb-4 flex flex-col gap-6  font-['Inter'] text-sm">
                {projects.map((value, index) => (
                  <div className=" cursor-pointer py-2" key={index}>
                    <a href={value.link} className="font-extrabold uppercase">
                      {value.name}{" "}
                      <span className="text-[10px] text-gray-400 mx-2 absolute">
                        <FaExternalLinkAlt />
                      </span>
                    </a>
                    <div className="">{value.institution}</div>
                    <div className="flex items-center space-x-2 flex-wrap">
                      {value.stack.map((val, index) => (
                        <div
                          key={index}
                          className=" text-xs font-light py-2 rounded-lg items-center flex hover:scale-95 active:scale-90 "
                        >
                          <span>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <hr />
              </div>
            </section>
            {/* reviews */}
            <section className="lg:m-16 m-6 md:m-8 text-black" id="Reviews">
              <p className="text-2xl font-extrabold py-8 font-['Inter'] uppercase">
                Reviews
              </p>
              <div className="pb-8 ">
                {Review.map((value, index) => (
                  <div
                    className="font-[Inter]  text-sm cursor-pointer flex-col flex gap-1 "
                    key={index}
                  >
                    <div className="text-xs">{value.date}</div>
                    <a
                      href={value.link}
                      className="font-extrabold gap-x-2 flex flex-wrap uppercase"
                    >
                      {value.name}{" "}
                      <span className="text-sm font-thin hover:font-normal">
                        {value.title}
                      </span>
                    </a>
                    <div className="relative">
                      {" "}
                      <span className="font-extrabold text-2xl absolute ">
                        "
                      </span>{" "}
                      <span className="text-2xl text-bold text-justify p-2"></span>
                      {value.reviews}
                    </div>

                    <hr className="my-2 h-[0px]" />
                  </div>
                ))}
              </div>
            </section>
            {/* tools */}

            <section id="tools" className=" my-9 text-black">
              <div className="">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={15}
                  slidesPerView={5}
                  // onSwiper={(swipper) => console.log(swipper)}
                >
                  {tools.map((val, key) => (
                    <SwiperSlide
                      key={key}
                      className="cursor-pointer hover:text-2xl"
                    >
                      <div className="flex items-center flex-col lg:text-4xl text-md">
                        {val.icon}{" "}
                        <div className="font['Inter'] cursor-pointer text-xs font-thin py-1">
                          {val.name}
                        </div>
                      </div>
                    </SwiperSlide>
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

            <section id="Articles" className="lg:mx-16 mx-6 md:m-8 text-black">
              <p className=" font-black py-8 text-2xl font-['Inter'] uppercase">
                Articles
              </p>
              <div className="pb-4 font-['Inter'] text-sm">
                {Post.map((value, index) => (
                  <div className="flex" key={index}>
                    <div
                      className=" flex cursor-pointer hover:text-lg hover:scale-95 active:scale-90  py-4 "
                      key={index}
                    >
                      <a className="flex " href={value.href}>
                        {1 + index}. {value.title}{" "}
                        <span className="text-[10px] text-gray-400 mx-2">
                          <FaExternalLinkAlt />
                        </span>
                      </a>
                      <hr className="my-2 h-[0px]" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <div className="relative lg:m-16 mx-6 md:mx-8 text-black">
            <a
              href="#Home"
              className={
                !back2Top
                  ? "hidden"
                  : " hover:text-3xl hover:scale-90 active:scale-90 fixed text-2xl animate-bounce rounded-full bottom-10 right-5"
              }
              id="back2Top"
            >
              <FaRegArrowAltCircleUp />
            </a>
          </div>

          <footer className=" lg:m-16 m-6 md:m-8 text-black">
            <Footer />
          </footer>
        </section>
      </div>
    </>
  );
};
