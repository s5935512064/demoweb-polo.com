import Head from "next/head";
import Layout from "../components/Layout";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import '@fancyapps/ui/dist/carousel.css';
import FlexMasonry from '../node_modules/flexmasonry/src/flexmasonry'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";


const images = [
    {
        id: 1,
        src: "https://polofootballpark.com//images/gallery/25a6377024da56275cdbf402880cb7df_80758bb0c6a00f1ffc073118c1b63f49-1464256224.jpg",
        width: "400px",
        height: "300px"
    },
    {
        id: 2,
        src: "https://polofootballpark.com//images/gallery/25a6377024da56275cdbf402880cb7df_276c0d4db77ba709a3f91279250ef947-1464256224.jpg",
        width: "200px",
        height: "200px"
    },
    {
        id: 3,
        src: "https://polofootballpark.com//images/gallery/25a6377024da56275cdbf402880cb7df_8f3014d0ea8f73530b14bc3feb12c9ea-1464256224.jpg",
        width: 300,
        height: 400
    },
    {
        id: 4,
        src: "https://polofootballpark.com//images/gallery/25a6377024da56275cdbf402880cb7df_60cb592d503411e03d8f618aa18c56a6-1464256224.jpg",
        width: 300,
        height: 300
    },
    {
        id: 5,
        src: "https://polofootballpark.com//images/gallery/2a3edc4ed681a421c845f6f612906ee8__2630f05a48843b1e62afded3c01cd198-1458615947.jpg",
        width: 200,
        height: 200
    },
    {
        id: 6,
        src: "https://polofootballpark.com//images/gallery/756bdad4eca19d3c2db070078fa7602a_80676db8f32b521cf13f39219b9f6581-1458615514.jpg",
        width: 400,
        height: 300
    },
    {
        id: 7,
        src: "https://polofootballpark.com//images/gallery/756bdad4eca19d3c2db070078fa7602a_46cc1a050b20bede38e637b09bf5607e-1458615530.jpg",
        width: 300,
        height: 200
    },
    {
        id: 8,
        src: "https://polofootballpark.com//images/gallery/756bdad4eca19d3c2db070078fa7602a_c7609d0ccdd061f83a2e6d472ec6af39-1458615530.jpg",
        width: 400,
        height: 300
    },
    {
        id: 9,
        src: "https://polofootballpark.com//images/gallery/dad63fb652cacc4a7342a85dfa083981__58d27b0105fb733450b7965c80c11617-1458615604.jpg",
        width: 400,
        height: 300
    },
    {
        id: 10,
        src: "https://polofootballpark.com//images/gallery/dad63fb652cacc4a7342a85dfa083981__dbaddba7bef06e6366c5b72e23eed549-1458615604.jpg",
        width: 400,
        height: 400
    },
    {
        id: 11,
        src: "https://polofootballpark.com//images/gallery/dad63fb652cacc4a7342a85dfa083981__df22c85210f5be98c596fdc6940649c5-1458615604.jpg",
        width: 400,
        height: 400
    },
    {
        id: 12,
        src: "https://polofootballpark.com//images/gallery/dad63fb652cacc4a7342a85dfa083981__440ee9a747dbb8cd3bf7cf3675ffbbe2-1458615604.jpg",
        width: 400,
        height: 400
    },
    {
        id: 13,
        src: "https://polofootballpark.com//images/gallery/dad63fb652cacc4a7342a85dfa083981__4dd91103129cbcb61ea1da8816fc14ba-1458615604.jpg",
        width: 400,
        height: 400
    }
];

const Gallery = () => {

    const router = useRouter();
    const { locale } = router;

    useEffect(() => {
        FlexMasonry.init('.grid2', {
            responsive: true,
            breakpointCols: {
                'min-width: 1500px': 4,
                'min-width: 1200px': 3,
                'min-width: 992px': 3,
                'min-width: 768px': 2,
                'min-width: 390px': 2,
            },
            numCols: 6
        })

    }, []);
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: false,
            Toolbar: {
                display: [
                    { id: "prev", position: "center" },
                    { id: "counter", position: "center" },
                    { id: "next", position: "center" },
                    "zoom",
                    "slideshow",
                    "fullscreen",
                    "download",
                    "thumbs",
                    "close",
                ],
            },

            Image: {
                zoom: false,
                click: false,
                wheel: "slide",
            },
        });

    }, []);
    return (
        <Layout>
            <Head>
                <title>Gallery - Polo Football Park</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full w-full relative flex justify-center">
                <div className="w-full h-full bg-white md:rounded-tr-[100px]  max-w-7xl  py-10 relative ">
                    <div className="absolute -top-5 -left-8  hidden md:block z-10">
                        <img src="http://upload.wikimedia.org/wikipedia/en/e/ec/Soccer_ball.svg" alt="ball" className="w-24 h-24 roll" />
                    </div>
                    <section className="flex w-full flex-col justify-center items-center px-4 lg:px-10">
                        <p className="text-3xl font-medium md:hidden">
                            {locale === "en" ? "Gallery" : "แกลอรี่"}
                        </p>
                        <div className='overflow-hidden w-full relative my-10 '>
                            <div className="grid2">
                                {images.map((item) => (
                                    <div key={item.id} className="overflow-hidden relative w-full">
                                        <div
                                            className="p-1 cursor-pointer"
                                            // onClick={() => openLightboxOnSlide(item.id)}
                                            data-caption=""
                                            data-fancybox="gallery"
                                            href={item.src}
                                            style={{ width: item.width, height: item.height }}
                                        >

                                            <div className="w-full h-full overflow-hidden absolute">

                                                <img
                                                    className="object-cover w-full h-full transition-transform duration-100 absolute hover:scale-110"
                                                    src={item.src}
                                                    alt={item.id}
                                                />
                                            </div>


                                        </div>

                                    </div>


                                ))}

                                {/* <FsLightbox
                                    toggler={lightboxController.toggler}
                                    sources={images.map((item) => (
                                        item.src
                                    ))}
                                    slide={lightboxController.slide}
                                /> */}
                            </div>


                        </div>


                    </section>

                </div>



            </div>
        </Layout>
    );
}

export default Gallery;