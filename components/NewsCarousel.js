import React, { useState, useEffect } from "react";
import { Carousel } from '@fancyapps/ui';
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";
Carousel.Plugins.Autoplay = Autoplay;


const NewsCarousel = () => {

    useEffect(() => {
        const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
            ScrollLock: false,
            Autoplay: {
                timeout: 1000,
                hoverPause: true
            },
        });
    }, []);

    return (
        <>
            <div id="mainCarousel" className="carousel mb-4 w-full mx-auto">
                <div className="carousel__slide w-72 h-72 md:h-96 bg-red-400 ">

                </div>
                <div className="carousel__slide w-72 h-72 md:h-96  ">

                </div>
                <div className="carousel__slide w-72 h-72 md:h-96  ">

                </div>
                <div className="carousel__slide w-72 h-72 md:h-96  ">

                </div>
                <div className="carousel__slide w-72 h-72 md:h-96  ">

                </div>
                {/* <div className="carousel__slide w-72 h-72 md:h-96 overflow-hidden">
                    <img data-lazy-src="/assets/25a6377024da56275cdbf402880cb7df_60cb592d503411e03d8f618aa18c56a6-1464256224.jpg" className="object-cover w-full h-full" alt="news5" />
                </div> */}
            </div>


        </>
    );
}

export default NewsCarousel;