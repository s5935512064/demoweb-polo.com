import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";
import moment from "moment";
import "moment/locale/th";

import { Carousel } from "@fancyapps/ui";
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";

Carousel.Plugins.Autoplay = Autoplay;
moment.locale("th");



const URL = `https://graph.facebook.com/v13.0/PoloFootballPark/feed?fields=id%2Cmessage%2Cmessage_tags%2Cfull_picture%2Cpermalink_url%2Ccreated_time&limit=15&access_token=EAAQUizb03jQBAPSiQVZBjgrhLbhTFiic5oSfMMZCyNLMEk7JSWB3hkztNwiEf4KgbTXdnv2ZACwdBskLRUwaDHebzdMwLW90WrPiJ4ZBR4fTt9CVcqoZAbV1thHge4J8MyIuAkHw7J4H02RP4X0RMF5Rpk76XdYYprgM7ZA9xpWZCevtqRZAlAPpbt4cWd3h78H8cEOyvU8NLPdaIG1ZAEXs80ZCEwz80OerwZD`;

const fetcher = (url) => axios.get(url).then((res) => res.data);

const NewsCarousel = () => {
  const [mounted, setMounted] = useState(false)
  const { data, error } = useSWR(mounted ? URL : null, fetcher)
  if (!data) {
    return <div> Loding.. </div>
  }


  // const { data, error } = useSWR(news ? URL : null, fetcher);
  // if (!data) {

  //   return <div> Loading ..</div>;
  // }



  // useEffect(() => {
  //   const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  //     ScrollLock: false,
  //     Autoplay: {
  //       timeout: 1000,
  //       hoverPause: true,
  //     },
  //   });
  // }, []);

  useEffect(() => {
    console.log(data);
    setMounted(true)
  }, [])




  return (
    <>
      {/* <div id="mainCarousel" className="carousel mb-4 w-full mx-auto">
        <div className="carousel__viewport px-12">

        </div>
      </div> */}

      <div>
        {/* {data.map((item, index) => (
          <div key={index} className="w-52 h-52 bg-red-300">
            1
          </div>

        ))} */}
      </div>
    </>
  );
};

export default NewsCarousel;
