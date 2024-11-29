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
          <Route path="/" element={<LandingPage />} />
          <Route path="/v3" element={<Index />} />
          <Route path="/v2" element={<Home />} />
          <Route path="/v3/about" element={<About />} />
          <Route path="/v3/projects" element={<Project />} />
          <Route path="/v3/contact" element={<Contact />} />
          <Route path="/v3/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
