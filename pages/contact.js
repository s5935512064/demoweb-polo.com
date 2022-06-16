import Head from "next/head";
import Layout from "../components/Layout";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTrain, faLocationDot, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import en from '../locales/en'
import th from '../locales/th'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import Image from 'next/image'


const Contact = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : th;

    useEffect(() => {
        Fancybox.bind('[data-fancybox="map"]', {
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
                <title>ติดต่อเรา : สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน</title>
                <meta name="description" content="สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta name="keywords" content="สนามฟุตบอล,สนามกีฬา,สนามฟุตบอลหญ้าเทียม,โปโลฟุตบอลพาร์ค,สนามฟุตบอลในร่ม,สนามฟุตซอลในร่ม,สนามฟุตบอล,สนามฟุตซอล,ซอยโปโล,ถนนวิทยุ,ซอยปลูกจิต,พระราม 4,เช่าสนามฟุตบอล,จัดกิจกรรม,กีฬาสี,หญ้าเทียม,จัดการแข่งขัน,ฝึกซ้อม,สนาม 7 คน,สนามกีฬา,สนามกีฬาจัดกิจกรรม,สนามหญ้าเทียมให้เช่า,สนามหญ้าเทียมให้บริการ,จัดกิจกรรมกีฬาสี,จัดกิจกรรม Sport day" />
                <meta name="stats-in-th" content="80ff" />
                <meta property="fb:app_id" content="1148488061869620" />
                <meta property="og:site_name" content="ติดต่อเรา : สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta property="og:title" content="ติดต่อเรา : สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://polofootballpark.com/contact" />
                <meta property="og:image" content="" />
                <meta property="og:locale" content="th_TH" />
                <meta property="og:description" content="สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta name="google-site-verification" content="4ZT9gu8JLi_2XvxmfHtfCzcw5VqGVdDtaxbO4siV2sc" />
                <meta name="author" content="POLO Football Park @ Siam Sindhorn" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="h-full w-full flex justify-center relative ">

                <div className="w-full h-full bg-white md:rounded-tr-[100px]  max-w-7xl  py-10 relative ">
                    <div className="absolute -top-5 -left-8  hidden md:block z-10">
                        <img src="/assets/Soccer_ball.svg" alt="ball" className="w-24 h-24 roll" />
                    </div>
                    {/* Heading */}
                    <section className="flex w-full flex-col justify-center items-center  px-4 lg:px-10">
                        <div className="md:hidden text-center">

                            <p className="text-3xl font-medium">
                                {locale == "en" ? "Contact" : "ติดต่อเรา"}
                            </p>
                            <p className="font-light">
                                {locale == "en" ? " Get in touch with us!" : "ใกล้ชิดกับเรามากยิ่งขึ้น"}
                            </p>
                        </div>


                        <fieldset className="border border-solid border-gray-300 p-3 w-full md:w-4/5 rounded mt-5 md:mt-10">
                            <legend className="text-sm inline-flex items-center">
                                <FontAwesomeIcon icon={faCar} className="w-10 h-10 mr-2" />
                                {locale == "en" ? "BY CAR" : "เดินทางด้วยรถยนต์"}
                            </legend>
                            <div className=" grid grid-cols-1  gap-3  justify-items-center  ">
                                {t.contact.directionByCar
                                    .map((item, index) => (
                                        <div key={index} className="w-full items-center justify-items-center lg:p-4 shadow-sm ">

                                            <div className="tracking-normal font-light">
                                                {item.description}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </fieldset>

                        <fieldset className="border border-solid border-gray-300 p-3 w-full md:w-4/5 rounded mt-4">
                            <legend className="text-sm inline-flex items-center">
                                <FontAwesomeIcon icon={faTrain} className="w-10 h-10 mr-2" />
                                {locale == "en" ? "BY MRT" : "เดินทางด้วย MRT"}
                            </legend>
                            <div className=" grid grid-cols-1  gap-3  justify-items-center  ">
                                {t.contact.directionByMRT
                                    .map((item, index) => (
                                        <div key={index} className="w-full items-center justify-items-center lg:p-4 ">

                                            <div className="tracking-normal font-light">
                                                {item.description}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </fieldset>
                        <fieldset className="border border-solid border-gray-300 p-3 w-full md:w-4/5 rounded my-4">
                            <legend className="text-sm inline-flex items-center">
                                <FontAwesomeIcon icon={faTrain} className="w-10 h-10 mr-2" />
                                {locale == "en" ? "BY BTS" : "เดินทางด้วย BTS"}
                            </legend>
                            <div className=" grid grid-cols-1  gap-3  justify-items-center  ">
                                {t.contact.directionByBTS
                                    .map((item, index) => (
                                        <div key={index} className="w-full items-center justify-items-center lg:p-4  ">

                                            <div className="tracking-normal font-light">
                                                {item.description}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </fieldset>
                    </section>

                    {/* GGmap */}
                    <section className="bg-white h-full w-full relative flex flex-col  justify-center items-center min-h-[400px] mt-5 md:mt-10">
                        <div id="map" className="relative w-full">
                            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7751.615252793088!2d100.5505607!3d13.7300938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f21c794f57d%3A0x3a7266e4c23a8943!2sPolo%20Football%20Park!5e0!3m2!1sth!2sth!4v1651027474367!5m2!1sth!2sth" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </section>
                    {/* Company */}
                    <section className="w-full h-full px-4 lg:px-10 my-5 md:my-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                            <a
                                data-fancybox
                                data-download-src={locale === "en" ? "/assets/PoloMap.jpeg" : "/assets/polo_map.png"}
                                href={locale === "en" ? "/assets/PoloMap.jpeg" : "/assets/polo_map.png"}

                                className="w-full h-full relative overflow-hidden">

                                <Image
                                    src={t.contact.polomapSrc}
                                    alt="map"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    objectFit="cover"
                                    className="hover:scale-110 transition-transform duration-500" />
                                {/* <img

                                    src={t.contact.polomapSrc} alt="map" className="object-cover object-center w-full h-full hover:scale-110 transition-transform duration-500 " /> */}
                            </a>
                            <div className="flex h-full w-full  justify-center flex-col ">

                                <p className="text-xl"> {t.contact.companyName} </p>

                                <div className="flex flex-col ml-3">
                                    <p className="text-sm whitespace-pre-line font-light xs:text-base inline-flex items-center mt-4">
                                        <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 mr-4" />
                                        {t.contact.companyAddress}</p>
                                    <p className="text-sm whitespace-pre-line font-light xs:text-base inline-flex items-center mt-4">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-4" />
                                        {t.contact.companyPhone}</p>

                                    <a aria-label="email" href="mailto:info@polofootballpark.com" target="_blank" rel="noopener noreferrer" className="text-sm whitespace-pre-line font-light xs:text-base inline-flex items-center mt-4">
                                        <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-4" />
                                        {t.contact.companyEmail}</a>

                                    <p className="text-sm whitespace-pre-line font-light xs:text-base inline-flex items-center mt-2">
                                        <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 mr-4" />
                                        {t.contact.companySite}</p>

                                    <Link href="https://www.facebook.com/PoloFootballPark">
                                        <a aria-label="facebook" target="_blank" rel="noopener noreferrer" className="text-sm whitespace-pre-line font-light xs:text-base inline-flex items-center mt-2">
                                            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 mr-4" />
                                            {t.contact.companyfacebook}</a>
                                    </Link>

                                    <Link href="https://www.instagram.com/polo_football_park/">

                                        <a aria-label="instagram" target="_blank" rel="noopener noreferrer" className="text-sm whitespace-pre-line font-light xs:text-base inline-flex items-center mt-2">
                                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 mr-4" />
                                            {t.contact.companyIg}</a>
                                    </Link>

                                    <Link href="https://page.line.me/ewb3453i?openQrModal=true">

                                        <a aria-label="line" target="_blank" rel="noopener noreferrer" className="text-sm whitespace-pre-line font-light xs:text-base inline-flex items-center mt-2">
                                            <FontAwesomeIcon icon={faLine} className="w-5 h-5 mr-4" />
                                            {t.contact.companyLine}</a>
                                    </Link>
                                </div>


                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;