import Head from "next/head";
import Layout from "../components/Layout";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import '@fancyapps/ui/dist/carousel.css';
import axios from "axios";
import useSWR, { mutate } from "swr";
import moment from 'moment'
import 'moment/locale/th';
import Image from 'next/image'

moment.locale('th');

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const URL = `https://iservices.ssdapp.net/get-feed-facebook`;

const fetcher = (url) => axios.get(url).then((res) => res.data);

const News = () => {

    const router = useRouter();
    const { locale } = router;

    const { data, error } = useSWR(URL, fetcher);
    if (!data) {
        return (
            <div className="h-screen w-full flex items-center text-white flex-col bg-[#08250D] justify-center">
                <img src="/assets/Soccer_ball.svg" alt="ball" className="w-24 h-24 roll" />
                Loading ...</div>
        )
    }

    const ConditionalMessage = ({ data }) => {
        if (!data) {

            return (
                <p className="font-light text-base"> {data} </p>
            )
        }
        else {

            return (
                <p className="font-light text-base">  {data.replace(/(<([^>]+)>)/gi, "").slice(0, 160).concat('...')}  </p>
            )

        }

    }

    return (
        <Layout>
            <Head>
                <title>ข่าว ประสัมพันธ์ กิจกรรม :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน</title>
                <meta name="description" content="สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta name="keywords" content="สนามฟุตบอล,สนามกีฬา,สนามฟุตบอลหญ้าเทียม,โปโลฟุตบอลพาร์ค,สนามฟุตบอลในร่ม,สนามฟุตซอลในร่ม,สนามฟุตบอล,สนามฟุตซอล,ซอยโปโล,ถนนวิทยุ,ซอยปลูกจิต,พระราม 4,เช่าสนามฟุตบอล,จัดกิจกรรม,กีฬาสี,หญ้าเทียม,จัดการแข่งขัน,ฝึกซ้อม,สนาม 7 คน,สนามกีฬา,สนามกีฬาจัดกิจกรรม,สนามหญ้าเทียมให้เช่า,สนามหญ้าเทียมให้บริการ,จัดกิจกรรมกีฬาสี,จัดกิจกรรม Sport day" />
                <meta name="stats-in-th" content="80ff" />
                <meta property="fb:app_id" content="1148488061869620" />
                <meta property="og:site_name" content="ข่าว ประสัมพันธ์ กิจกรรม :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta property="og:title" content="ข่าว ประสัมพันธ์ กิจกรรม :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://polofootballpark.com/news" />
                <meta property="og:image" content="" />
                <meta property="og:locale" content="th_TH" />
                <meta property="og:description" content="สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta name="google-site-verification" content="4ZT9gu8JLi_2XvxmfHtfCzcw5VqGVdDtaxbO4siV2sc" />
                <meta name="author" content="POLO Football Park @ Siam Sindhorn" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full w-full relative flex justify-center">
                <div className="w-full h-full bg-white md:rounded-tr-[100px]  max-w-7xl  py-10 relative ">
                    <div className="absolute -top-5 -left-8  hidden md:block z-10">
                        <img src="/assets/Soccer_ball.svg" alt="ball" className="w-24 h-24 roll" />
                    </div>

                    <section className="flex w-full flex-col justify-center items-center px-4 lg:px-10">
                        <p className="md:hidden text-3xl font-medium">
                            {locale == "en" ? "News&Event" : "ข่าวสารและกิจกรรม"}
                        </p>
                        {/* Highlight */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 w-full h-full gap-2 mt-10 ">
                            {data.feed.data
                                .filter((p, index) => p.message != null)
                                .map((item, index) => {
                                    if (index >= 3) return null

                                    return (

                                        <div key={index} className={classNames(index == 0 ? "h-[250px] sm:h-[614px] col-span-2 sm:row-span-2 w-full  sm:col-span-2 relative m-0" : "h-[300px] w-full  relative")}>

                                            <div className="absolute bottom-0 p-5 text-white bg-gradient-to-t from-black w-full h-2/3 flex justify-end flex-col hover:h-full duration-200 z-10">


                                                <p className="font-light text-sm overflow-hidden">  {item.message.replace(/(<([^>]+)>)/gi, "").slice(0, 160).concat('...')}  </p>

                                                {/* <ConditionalMessage data={item.message} /> */}

                                                <div className="font-light text-sm flex flex-col md:flex-row md:justify-between md:items-center"> {moment(item.created_time).format('LL')}

                                                    <Link href={item.permalink_url}>
                                                        <a aria-label="news" target="_blank" rel="noopener noreferrer">
                                                            <button className="w-fit my-1 px-2 py-1 border-[1px] border-white text-xs md:text-sm">อ่านเพิ่มเติม</button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="w-full h-full absolute">
                                                <Image
                                                    src={item.full_picture}
                                                    alt="feed"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    objectPosition="top"
                                                />

                                                {/* <img src={item.full_picture} alt="feed1" className="object-cover w-full h-full object-top" /> */}
                                            </div>

                                        </div>
                                    )
                                }
                                )}

                        </div>

                        {/* News from facebook */}
                        <div className="my-10 w-full h-full ">
                            <p className="text-2xl font-medium mb-2">Hot</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                                {data.feed.data
                                    .filter(p => p.message != null)
                                    .map((item, index) => (

                                        <div key={index} className="grid grid-cols-1 lg:grid-cols-3 shadow-sm  lg:h-[200px] h-full">
                                            <div className="w-full h-full overflow-hidden">
                                                <img src={item.full_picture} alt="facebook" className="object-cover object-top w-full h-full max-h-96 sm:max-h-52 md:max-h-72" />
                                            </div>
                                            <div className="sm:col-span-2 p-5 h-full flex flex-col justify-center ">

                                                <ConditionalMessage data={item.message} />

                                                <div className=" font-light text-base flex justify-between  mt-2 items-center">
                                                    <p className="bg-black text-white px-2 bg-opacity-50">
                                                        {moment(item.created_time).format('LL')}
                                                    </p>
                                                    <Link href={item.permalink_url}>
                                                        <a aria-label="news" target="_blank" rel="noopener noreferrer">
                                                            <button className="w-fit border-2 border-black px-2">อ่านเพิ่มเติม</button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </Layout >
    );
}

export default News;