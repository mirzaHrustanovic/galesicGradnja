import Carousel from "../Carousel";
import Header from "../Header";
import About from "./About";

import Galery from "./Galery";
import Contact from "./Contact";


const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      
      <Galery />
      <Contact />
    </>
  );
};

export default Home;
