import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

// import Test from "./components/test";
import "./index.css";

function App() {
  return (
    <div className="App dark:bg-black bg-[#242424]">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
