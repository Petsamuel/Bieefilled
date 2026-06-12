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
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);

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
            <section className="lg:mx-16 lg:my-4 text-black">
              <Stacks />
            </section>
            <section
              className="my-12 font-[Inter] text-md lg:m-16 m-6 md:m-8"
              id="Resume"
              data-scroll
              data-scroll-speed={2}
            >
              <div class="quote h-14 lg:block hidden">
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
                  <div className="flex gap-4 w-full p-2 " key={index}>
                    <div className="bg-gray-100 text-black cursor-pointer  items-center flex justify-center h-[3rem]">
                      <Avatar
                        size="3"
                        radius="full"
                        className=" flex items-center p-4 "
                        fallback={getInitials(value.institution)}
                      />
                    </div>
                    <div className="font-[Inter] text-sm cursor-pointer ">
                      <div>{value.date}</div>
                      <div className="font-extrabold uppercase">
                        {value.link ? (
                          <a
                            href={value.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-blue-600 transition-colors"
                          >
                            {value.institution}
                          </a>
                        ) : (
                          value.institution
                        )}
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
              <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-['Inter'] text-sm">
                {(showAllProjects ? projects : projects.slice(0, 3)).map((value, index) => (
                  <a
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="project-card group relative overflow-hidden border border-gray-200 block"
                  >
                    {/* Image area */}
                    {value.image ? (
                      <div className="relative h-44 overflow-hidden bg-gray-100">
                        <img
                          src={value.image}
                          alt={value.name}
                          className="project-img w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-44 bg-gray-100 flex items-center justify-center text-4xl font-black text-gray-300 uppercase tracking-widest select-none">
                        {value.name.charAt(0)}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-extrabold uppercase text-xs leading-tight">
                          {value.name}
                        </span>
                        <FaExternalLinkAlt className="text-[10px] text-gray-400 flex-shrink-0 mt-0.5 group-hover:text-black transition-colors" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{value.institution}</div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {value.stack.map((val, i) => (
                          <span
                            key={i}
                            className="text-[10px] border border-gray-300 px-2 py-0.5 font-light"
                          >
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              {projects.length > 3 && (
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="mt-4 mb-6 text-xs font-bold uppercase border border-black px-5 py-2 hover:bg-black hover:text-white transition-colors font-['Inter'] tracking-widest"
                >
                  {showAllProjects ? "View Less ↑" : `View More (${projects.length - 3} more) ↓`}
                </button>
              )}
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
              <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-['Inter']">
                {(showAllArticles ? Post : Post.slice(0, 3)).map((value, index) => (
                  <a
                    key={index}
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card group relative overflow-hidden border border-gray-200 block"
                  >
                    {/* Cover image */}
                    <div className="relative h-40 overflow-hidden bg-gray-100">
                      <img
                        src={value.featured_img}
                        alt={value.title}
                        className="project-img w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback placeholder — hidden unless image errors */}
                      <div
                        style={{ display: "none" }}
                        className="absolute inset-0 flex items-center justify-center text-4xl font-black text-gray-300 uppercase tracking-widest select-none bg-gray-100"
                      >
                        {value.title.charAt(0)}
                      </div>
                      {/* Index badge */}
                      <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 font-['Inter']">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-extrabold uppercase text-xs leading-tight line-clamp-2">
                          {value.title}
                        </p>
                        <FaExternalLinkAlt className="text-[10px] text-gray-400 flex-shrink-0 mt-0.5 group-hover:text-black transition-colors" />
                      </div>
                      <p className="text-[11px] text-gray-500 mt-2 leading-relaxed line-clamp-3">
                        {value.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              {Post.length > 3 && (
                <button
                  onClick={() => setShowAllArticles(!showAllArticles)}
                  className="mt-4 mb-6 text-xs font-bold uppercase border border-black px-5 py-2 hover:bg-black hover:text-white transition-colors font-['Inter'] tracking-widest"
                >
                  {showAllArticles ? "View Less ↑" : `View More (${Post.length - 3} more) ↓`}
                </button>
              )}
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
