import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/th";
import { Carousel } from "@fancyapps/ui";
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";
import FacebookNews from './FacebookNews'

Carousel.Plugins.Autoplay = Autoplay;
moment.locale("th");

const NewsCarousel = () => {

  useEffect(() => {
    const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
      Autoplay: {
        timeout: 1000,
        hoverPause: true,
      },
    });
  }, []);

  return (
    <>
      <div id="mainCarousel" className="carousel  mx-auto py-5 max-h-[300px] sm:max-h-[400px]">

        <FacebookNews />

      </div>




    </>
  );
};

export default NewsCarousel;
