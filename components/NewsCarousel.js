import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";
import Image from "next/image";
import moment from 'moment'
import 'moment/locale/th';
import Link2 from "next/link";

moment.locale('th');
Carousel.Plugins.Autoplay = Autoplay;

const URL = `https://iservices.ssdapp.net/get-feed-facebook`;

const NewsCarousel = () => {

  const fetcher = async (url) => await axios.get(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((res) => res.data).catch(function (err) {
    console.log(err);
  });


  const { data, error } = useSWR(URL, fetcher);

  useEffect(() => {
    setTimeout(() => {
      const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
        Autoplay: {
          timeout: 1000,
          hoverPause: true,
        },
      }, 2000);
    })
  });


  return (
    <>
      {!data ? <div id="mainCarousel">Loading..</div> : <div id="mainCarousel" className="carousel  mx-auto py-5 max-h-[300px] sm:max-h-[400px] overflow-hidden ">
        <div className="carousel__viewport">
          {data.feed.data
            .filter(p => p.message != null)
            .map((item, index) => (
              <div key={index} className="carousel__slide md:!w-[400px] min-h-[250px] sm:min-h-[350px] md:mx-4 rounded shadow">
                <Image
                  loader={() => item.full_picture}
                  unoptimized={true}
                  src={item.full_picture}
                  alt="news"
                  layout="fill"
                  className="object-cover !w-full !relative !h-[unset] !py-0 px-4 "
                  quality={100}
                />
                <div className="w-1/2 bg-black absolute bottom-0 -mx-4 text-white px-4 py-2 mb-2 bg-opacity-70 z-10">
                  <p>{moment(item.created_time).format('LL')}</p>
                </div>

                <div className="inset-0 absolute bg-black text-white justify-center items-center flex opacity-0 hover:opacity-90 duration-200">
                  <Link2 href={item.permalink_url}>
                    <a aria-label="news" target="_blank" rel="noopener noreferrer">
                      <button className="!z-50 h-32 w-32  ">

                        อ่านเพิ่มเติม
                      </button>
                    </a>
                  </Link2>
                </div>
              </div>
            ))}
        </div>
      </div>}

    </>
  );
}

export default NewsCarousel;