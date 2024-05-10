import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Bikes from "./components/Bikes";
import Accessories from "./components/Accessories";
import Apparel from "./components/Apparel";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
