import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Layout } from "./components/Layout";
import { Blog } from "./pages/Blog";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import "./index.css";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence mode="wait" initial={false}>
          <Layout>
            <Routes>
              <Route path="*" element={<Error />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Layout>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
};
