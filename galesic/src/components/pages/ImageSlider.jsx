import { useState,useEffect } from "react";
const ImageSlider = ({data}) =>{
    const [currentSlide,setCurrentSlide] = useState(0);

    useEffect(() =>{
        const inerval = setInterval(() =>{
            setCurrentSlide((prevSlide)=> (prevSlide+ 1) % data.length);
        },5000);
    });

    return(
    <div className="slideShow">
    <div className="slideshowSlider" style={{ transform: `translateX(${-currentSlide * 0}%)` }}>
    {data.map((item, id) => (<div key={id} className={`slide ${id === currentSlide ? "active" : ""}`}>
        
        <img src={item.src} alt={item.alt}  />
        <div className="text">{item.title}</div>
        </div>
    ))}
    </div>
</div>)
        

    
}
export default ImageSlider;