
import Head from "next/head";
import Layout from "../components/Layout";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import '@fancyapps/ui/dist/carousel.css';
import en from '../locales/en'
import th from '../locales/th'
import Image from 'next/image'

const About = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : th;

    return (
        <Layout>
            <Head>
                <title>เกี่ยวกับเรา : สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน </title>
                <meta name="description" content="สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
                <meta name="keywords" content="สนามฟุตบอล,สนามกีฬา,สนามฟุตบอลหญ้าเทียม,โปโลฟุตบอลพาร์ค,สนามฟุตบอลในร่ม,สนามฟุตซอลในร่ม,สนามฟุตบอล,สนามฟุตซอล,ซอยโปโล,ถนนวิทยุ,ซอยปลูกจิต,พระราม 4,เช่าสนามฟุตบอล,จัดกิจกรรม,กีฬาสี,หญ้าเทียม,จัดการแข่งขัน,ฝึกซ้อม,สนาม 7 คน,สนามกีฬา,สนามกีฬาจัดกิจกรรม,สนามหญ้าเทียมให้เช่า,สนามหญ้าเทียมให้บริการ,จัดกิจกรรมกีฬาสี,จัดกิจกรรม Sport day" />
                <meta name="stats-in-th" content="80ff" />
                <meta property="fb:app_id" content="1148488061869620" />
                <meta property="og:site_name" content="เกี่ยวกับเรา : สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน " />
                <meta property="og:title" content="เกี่ยวกับเรา : สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน " />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://polofootballpark.com/about" />
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

                    <div className="flex w-full flex-col justify-center items-center px-4 lg:px-10">
                        <p className="text-3xl font-medium md:hidden">
                            {locale === "en" ? "About us" : "เกี่ยวกับเรา"}
                        </p>
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 md:mt-10">

                            <div className=" md:mr-10 relative w-full h-[350px]">

                                <Image
                                    src="/assets/aboutPolo.webp"
                                    alt="aboutus"
                                    layout="fill"
                                    objectFit="cover"
                                    className="shadow-md rounded" />


                            </div>
                            <div className="flex h-full items-center md:mx-10 font-light text-base sm:text-lg">
                                {t.aboutus.about}
                            </div>
                        </div>

                        <div className="mt-10 w-full h-full flex flex-col justify-center items-center">
                            <p className="text-3xl font-medium mb-4">
                                {locale === "en" ? "Facilities" : "สิ่งอำนวยความสะดวก"}
                            </p>

                            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 ">
                                {t.aboutus.facilities.map((item, index) => (
                                    <div key={index} className="h-48 shadow-sm flex flex-col" >
                                        <div className="w-full h-28 relative">
                                            <Image
                                                src={item.src}
                                                alt="facilities"
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>


                                        <p className="text-center font-light text-sm sm:text-base">{item.description}</p>
                                    </div>
                                ))

                                }

                            </div>
                        </div>
                        <div className="mt-10 w-full h-full flex flex-col justify-center items-center mb-4">
                            <p className="text-3xl font-medium ">
                                {locale === "en" ? "Regulations" : "ระเบียบการใช้งานสนาม"}
                            </p>
                            <p className="w-full lg:w-1/2 text-center px-5 font-light mb-4">
                                {locale === "en" ? "Im order to play football with fun. please follow our instructions as follows." : "เพื่อความเป็นระเบียบเรียบร้อยในสนาม ขอความร่วมมือจากผู้มาใช้บริการปฏิบัติตามกฎต่างๆ ดังต่อไปนี้"}
                            </p>

                            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 ">
                                {t.aboutus.regulations.map((item, index) => (
                                    <div key={index} className="max-h-72 shadow-sm flex flex-col p-2" >
                                        <div className="w-full h-28 relative">
                                            <Image
                                                src={item.src}
                                                alt="regulations"
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                        <p className="text-center font-light text-sm sm:text-base">{item.description}</p>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;