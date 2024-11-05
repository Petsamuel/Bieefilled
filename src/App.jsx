import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import { LandingPage } from "./v4/pages/LandingPage";
// import Loading from "./components/Loading";
// import { Layout } from "./components/Layout";
import { Blog } from "./pages/Blog";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import "./index.css";
import { Index } from "./Rebrand/pages/Index";
import { Usetheme } from "./components/store/store";
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import 'locomotive-scroll/dist/locomotive-scroll.css';

export const App = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  const scrollRef = useRef(null);
  const theme = Usetheme(state => state.theme)
  

  return (

    <main data-scroll-container ref={scrollRef} className={`${theme === "light" ? 'bg-white' : 'bg-black'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/v4" element={<LandingPage />} />
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
