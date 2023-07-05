import React, { useState } from "react";

//Image caurosel
const App=()=>{
    const images=[
       'https://picsum.photos/id/22/367/267',
       'https://picsum.photos/id/26/367/267',
       'https://picsum.photos/id/27/367/267',
       'https://picsum.photos/id/10/367/267',
       'https://picsum.photos/id/20/367/267',
       'https://picsum.photos/id/25/367/267',
       'https://picsum.photos/id/28/367/267',
    ]
    const[current,setCurrent]=useState(0);
    const previousSlide=()=>{
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }
    const nextSlide=()=>{
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }
    return (
        <div className="image_carousel">
            <div className="slide">
                <h1>Image Carousel Using React Js</h1>
                <button onClick={previousSlide}><i class="fa fa-arrow-left"></i></button>
                {images.map((val,index)=>
                    current==index &&(
                            <img src={val} alt="images" />
                    )
                )}
                <button onClick={nextSlide}><i className="fa fa-arrow-right"></i></button>
            </div>
        </div>
    );
}

export default App;
