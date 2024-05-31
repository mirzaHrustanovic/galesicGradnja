import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Galery from "./pages/Galery";
import "./styles/Header.css";
import Adaptation from "./pages/Adaptation";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/adaptacije" element={<Adaptation/>}/>
          <Route path="/galery" element={<Galery />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
