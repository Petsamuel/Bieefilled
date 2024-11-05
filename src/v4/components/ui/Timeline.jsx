import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Experiences } from "../../../components/store/data";

export const Timeline = ({
    data
}) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        (<div
            className="w-full bg-white dark:bg-neutral-950 lg:md:px-2"
            ref={containerRef}>
            <div className="max-w-7xl px-4 md:px-3 lg:px-10">
                {/* <h2 className="text-sm lg:md:text-xl mb-4 text-black dark:text-white max-w-4xl">
                    
                </h2> */}
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {Experiences.map((item, index) => (
                    <div key={index} className="flex justify-start md:pt-5 md:gap-10">
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div
                                    className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3
                                className="hidden md:block text-md md:pl-20 lg:md:text-md font-semibold text-neutral-500 dark:text-neutral-500 capitalize">
                                {item.date}
                                {/* <p className="text-semibold text-xs my-3">{item.date}</p> */}

                            </h3>

                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3
                                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                            </h3>
                            <p className="text-semibold text-lg my-3">{item.title}</p>
                            <p className="text-xs">{item.institution} <br /><span className="text-xs "> {item.skills}</span></p>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
                </div>
            </div>
        </div>)
    );
};
