import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Couple from "./components/Couple";
import About from "./components/About";
import Search from "./components/Search";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/couple" element={<Couple />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/couple" element={<Couple />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
