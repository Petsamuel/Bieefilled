import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
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
  return (

    <main data-scroll-container ref={scrollRef}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Error />} />
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
