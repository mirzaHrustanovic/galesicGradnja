import Carousel from "../Carousel";
import Header from "../Header";
import About from "./About";
import Services from "./Services";
import Galery from "./Galery";
import Contact from "./Contact";


const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Services />
      <Galery />
      <Contact />
    </>
  );
};

export default Home;
