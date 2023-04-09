import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import "./index.css";

export const App=()=> {
  return (
    <div className="App dark:bg-black bg-[#242424]">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}