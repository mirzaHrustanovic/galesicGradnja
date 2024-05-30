import ImageSlider from "./pages/ImageSlider"
import images from "./data/ImagesCarousel";
import "./styles/ImageSlider.css"

const Carousel = () => {
  return (
    <div>
      <ImageSlider data={images}/>
    </div>
  )
}

export default Carousel
