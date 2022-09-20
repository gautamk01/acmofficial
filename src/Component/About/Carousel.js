import { useState } from "react";
import ImageData from "./ImageData";
import './carousel.css'
const Carousel = () => {
    const[picIndex, setPicIndex] = useState(0);
    const len = ImageData.length
    setTimeout(()=>{
        setPicIndex((picIndex+1)%(len))
    },5000)
    return ( 
        <img src={ImageData[picIndex].image} alt={ImageData[picIndex].alt} className="animation object-cover rounded-3xl h-[35em] w-[25em] center" />
    );
}
 
export default Carousel;