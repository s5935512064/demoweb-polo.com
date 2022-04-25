import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";
import moment from "moment";
import "moment/locale/th";

import { Carousel } from "@fancyapps/ui";
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";

Carousel.Plugins.Autoplay = Autoplay;
moment.locale("th");

const URL2 = "https://polomanage.ssdapp.net/booking_status.php?date=2022-04-22";

const URL = `https://graph.facebook.com/v13.0/PoloFootballPark/feed?fields=full_picture,permalink_url,message,created_time&limit=15&access_token=EAAooxZBZBd3LcBAPdOHKvdEET61eDH1ah8mBVnXLJhaoIYBwGUKUimZBi7eZBZBbvyjjLa5tzprhTTU8ZCiRkEYY1D2qtY5mL6sVWpKrZAUVrNZAxRfXAZC5S1u6miEzMgzfcWYjmehEjQxD66m9BE1ar4OOnebhFMzAAS4OECCjQko5vZAIxkCFxJ6ZBjOOu18htJWjBb4VZAKYXgZDZD&format=json`;

const fetcher = (url) => axios.get(url).then((res) => res.data);

const NewsCarousel = () => {
  //   const [news, setNews] = useState([]);
  //   const getNews = async (e) => {
  //     const res = await axios.get(URL).then((response) => {
  //       if (!response) {
  //         return <div> Loding ...</div>;
  //       }
  //       setNews(response.data.data);
  //     });
  //   };

  //   useEffect(() => {
  //     getNews();
  //   }, []);

  //   const FilterNews = ({ data }) => {
  //     if (!data.message) {
  //       return;
  //     } else {
  //       return (
  //         <div className="carousel mb-6 max-w-6xl mx-auto bg-gray-50 py-10">
  //           <img
  //             src={data.full_picture}
  //             alt="news"
  //             className="object-cover w-full h-full"
  //           />
  //         </div>
  //       );
  //     }
  //   };

  const { data, error } = useSWR(URL, fetcher);
  if (!data) {
    return <div> Loading ..</div>;
  }

  useEffect(() => {
    const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
      ScrollLock: false,
      Autoplay: {
        timeout: 1000,
        hoverPause: true,
      },
    });
  }, []);

  return (
    <>
      <div id="mainCarousel" className="carousel mb-4 w-full mx-auto">
        <div className="carousel__viewport px-12">
          {news.map((item, index) => (
            <figure key={index} className="carousel__slide py-0 px-4 w-1/3">
              <img className="mb-4 w-full rounded-lg" src={item.full_picture} />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsCarousel;
