import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
// import Test from "./components/test";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/test" element={<Test />} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
