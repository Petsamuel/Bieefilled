function InitialTransition() {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 4.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },

  };
   const text = {
     initial: {
       y: 40,
     },
     animate: {
       y: 80,
       transition: {
         duration: 1.5,
         ease: [0.87, 0, 0.13, 1],
       },
     },
   };

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-white dark:bg-purple-500"
          initial="initial"
          animate="animate"
          variants={blackBox}
        />
        <motion.svg className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect className="w-full h-full text-gray-600 fill-current" />
          </pattern>
          <text
            className="text-4xl font-bold"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Bieefilled
          </text>
        </motion.svg>
        <motion.svg
          variants={textContainer}
          className="absolute z-50 flex"
        ></motion.svg>
        ;
      </div>
     

<motion.rect
  variants={text}
  className="w-full h-full text-gray-600 fill-current"
/>
    </>
  );
}

export default InitialTransition;
