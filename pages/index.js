import Head from "next/head";
import Layout from "../components/Layout";
import Link2 from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import $ from "jquery";
import NewsCarousel from "../components/NewsCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLine } from "@fortawesome/free-brands-svg-icons";
import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'

class Navopen extends React.Component {
  componentDidMount() {

    (function () {
      window.onscroll = (function (e) {

        var Num = (window.pageYOffset || document.documentElement.scrollTop) / 500;
        var Num2 = (window.pageYOffset || document.documentElement.scrollTop) * .0004;
        var Num2mod = Num2 + 1;

        if (window.scrollY <= 500) {
          return (
            $(".shade").css("opacity", Num),
            $(".heroEffects").css({ transform: "scale(" + Num2mod + ")" })
          );
        }
      });
    }.call(this));
  }
  render() {
    const { route } = this.props;
    const { locale } = route;
    return (
      <Layout>
        <Head>
          <title>หน้าแรก :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน </title>
          <meta name="description" content="สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
          <meta name="keywords" content="สนามฟุตบอล,สนามกีฬา,สนามฟุตบอลหญ้าเทียม,โปโลฟุตบอลพาร์ค,สนามฟุตบอลในร่ม,สนามฟุตซอลในร่ม,สนามฟุตบอล,สนามฟุตซอล,ซอยโปโล,ถนนวิทยุ,ซอยปลูกจิต,พระราม 4,เช่าสนามฟุตบอล,จัดกิจกรรม,กีฬาสี,หญ้าเทียม,จัดการแข่งขัน,ฝึกซ้อม,สนาม 7 คน,สนามกีฬา,สนามกีฬาจัดกิจกรรม,สนามหญ้าเทียมให้เช่า,สนามหญ้าเทียมให้บริการ,จัดกิจกรรมกีฬาสี,จัดกิจกรรม Sport day" />
          <meta name="stats-in-th" content="80ff" />
          <meta property="fb:app_id" content="1148488061869620" />
          <meta property="og:site_name" content="หน้าแรก :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน " />
          <meta property="og:title" content="หน้าแรก :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน " />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://polofootballpark.com/" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="th_TH" />
          <meta property="og:description" content="สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
          <meta name="google-site-verification" content="4ZT9gu8JLi_2XvxmfHtfCzcw5VqGVdDtaxbO4siV2sc" />
          <meta name="author" content="POLO Football Park @ Siam Sindhorn" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="min-h-screen w-full h-full relative  overflow-hidden top-0 left-0">
          <div className="heroEffects bg-[url('/assets/hero2.jpg')] bg-cover bg-center fixed min-h-screen w-full h-full">
            <div className="bg-gradient-to-r from-[#08250D] absolute w-full h-full opacity-75" />
            <div className="w-full h-full flex justify-center absolute">

              <div className="max-w-7xl px-4 w-full h-[80vh]  flex flex-col text-white  justify-center gap-5 z-30 ">
                <p
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  className="text-4xl sm:text-5xl font-medium"
                >
                  {locale === "en"
                    ? "The Best Soccer Field in CBD"
                    : "สนามหญ้าเทียมย่านใจกลางธุรกิจ"}
                </p>
                <p
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                  className="text-base sm:text-xl whitespace-pre-line font-light"
                >
                  {locale === "en"
                    ? " Indoor Soccer Field Turf,In the Central Business District,(CBD) \n Conveniently access from Wireless Road or Rama IV Road."
                    : "สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมืองเดินทางสะดวก\nเข้าออกได้จากซอยโปโลด้านถนนวิทยุ หรือ ซอยปลูกจิต ถนนพระรามสี่"}
                </p>
                <div data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  className="inline-flex gap-3 flex-col xs:flex-row">
                  <Link2 href="https://www.facebook.com/PoloFootballPark">
                    <a aria-label="facebook" target="_blank" rel="noopener noreferrer">
                      <button

                        className="bg-[#1877F2] text-white p-3 w-48 inline-flex items-center justify-center"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="w-5 h-5 mr-2 -ml-1"
                        />
                        {locale === "en"
                          ? "Join our club"
                          : "เป็นส่วนหนึ่งกับเรา"}
                      </button>
                    </a>
                  </Link2>
                  <Link2 href="https://page.line.me/ewb3453i?openQrModal=true">
                    <a aria-label="line" target="_blank" rel="noopener noreferrer">
                      <button

                        className="bg-[#3ACE01] text-white p-3 w-48 inline-flex items-center justify-center"
                      >
                        <FontAwesomeIcon
                          icon={faLine}
                          className="w-5 h-5 mr-2 -ml-1"
                        />
                        {locale === "en" ? "Add Friend" : "เพิ่มเพื่อน"}
                      </button>
                    </a>
                  </Link2>
                </div>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-180}
                  duration={1000}
                >

                  <div className="arrow animate-bounce cursor-pointer">
                    <svg height="25" width="50">
                      <polygon
                        points="0,0 25,10 50,0 25,25"
                        fill="rgba(255,255,255)"
                        strokeWidth="0"
                        stroke="rgba(255,255,255,.3)"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

            </div>
            <div className="shade" />
          </div>
        </section>

        <section className="h-full w-full  flex justify-center relative bg-[url('/assets/background.jpg')] bg-fixed bg-cover  ">
          <div className="w-full h-full absolute  bg-gradient-to-b from-[#08250D]"></div>
          <div id="section1" className="w-full  bg-white rounded-t-2xl  max-w-7xl  mt-10 px-4 lg:px-10 pt-10 relative ">
            <div className="flex w-full justify-between mb-5 border-b-[1px] border-black pb-2">

              <p className="text-2xl font-medium">
                {locale === "en" ? "News&Event" : "ข่าวสารและกิจกรรม"}
              </p>
              <Link2 href="/news">

                <button className="border-black border px-2 w-fit ">
                  {locale === "en" ? "SEE ALL" : "ดูทั้งหมด"}

                </button>
              </Link2>
            </div>

            <NewsCarousel as="div" />

            <div className="w-full my-10 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-3 ">

              <div className="h-full w-full md:col-span-2 rounded relative">
                <Image
                  src="/assets/banner.jpg"
                  alt="banner"
                  layout="responsive"
                  width={100}
                  height={55}
                  objectFit="cover"
                  className=" hover:animate-pulse duration-200" />

              </div>

              <div className="h-full w-full rounded relative">
                <Image
                  src="/assets/banner3.jpg"
                  alt="banner3"
                  layout="responsive"
                  width={100}
                  height={80}
                  objectFit="cover"
                  className="hover:animate-pulse duration-200" />

              </div>

              <div className="h-full w-full rounded relative">
                <Image
                  src="/assets/banner4.png"
                  alt="banner4"
                  layout="responsive"
                  width={100}
                  height={80}
                  objectFit="cover"
                  className=" hover:animate-pulse duration-200" />

              </div>

            </div>

          </div>
        </section>
      </Layout>
    );
  }
}

const Home = (props) => {
  const router = useRouter();
  return <Navopen {...props} route={router} />;
};

export default Home;
