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


class Navopen extends React.Component {
  componentDidMount() {
    (function () {
      $(window).scroll(function () {
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * 0.0004; // higher number for more zoom
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * 0.2; // Title speed
        var Num3mod = Num3 + 1;
        return (
          $(".shade").css("opacity", Num),
          $(".heroEffects").css({ transform: "scale(" + Num2mod + ")" })
        );
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
          <div className="heroEffects bg-[url('/assets/hero.jpg')] bg-cover bg-center fixed min-h-screen w-full h-full">
            <div className="bg-gradient-to-r from-[#08250D] absolute w-full h-full opacity-75" />
            <div className="w-full h-full flex justify-center absolute">
              <div className="max-w-7xl px-4 w-full h-full flex flex-col text-white pt-28 sm:pt-52 gap-5 z-30 ">
                <p
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  className="text-5xl font-medium"
                >
                  {locale === "en"
                    ? "The Best Soccer Field in CBD"
                    : "สนามหญ้าเทียมย่านใจกลางธุรกิจ"}
                </p>
                <p
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                  className="text-xl whitespace-pre-line font-light"
                >
                  {locale === "en"
                    ? " Indoor Soccer Field Turf,In the Central Business District,(CBD) \n Conveniently access from Wireless Road or Rama IV Road."
                    : "สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมืองเดินทางสะดวก\nเข้าออกได้จากซอยโปโลด้านถนนวิทยุ หรือ ซอยปลูกจิต ถนนพระรามสี่"}
                </p>
                <div className="inline-flex gap-3 flex-col xs:flex-row">
                  <Link2 href="https://www.facebook.com/PoloFootballPark">
                    <a target="_blank" rel="noopener">

                      <button
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                        className="bg-[#D90A0C] text-white p-3 w-48 inline-flex items-center justify-center"
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
                    <a target="_blank" rel="noopener">

                      <button
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                        className="bg-[#176724] text-white p-3 w-48 inline-flex items-center justify-center"
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
            <div className="shade "></div>
          </div>
        </section>

        <section className="h-full w-full  flex justify-center relative bg-[url('/assets/wepik-2022321-93143.png')] bg-fixed bg-cover  ">
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

            <NewsCarousel />

            <div className="w-full my-10 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-3 ">

              <img src="/assets/banner1.jpeg" alt="banner" className="object-contain w-full md:col-span-2 rounded hover:animate-pulse duration-200" />

              <img src="/assets/banner3.jpg" alt="banner" className="object-cover w-full rounded hover:animate-pulse duration-200" />
              <img src="/assets/banner4.png" alt="banner" className="object-cover w-full h-full rounded hover:animate-pulse duration-200" />
            </div>




            <div className=" w-full grid justify-items-center justify-center gap-3 mt-2 items-center overflow-hidden grid-cols-2 sm:flex">

              <img
                src="/assets/siamsindhorn.jpeg"
                alt="glass"
                className="w-36 sm:w-48 h-full object-contain"
              />
              <img
                src="/assets/download 11(1).png"
                alt="srijul"
                className="w-28 sm:w-36 h-full  object-contain"
              />
              <img
                src="/assets/256527691_3053998368171556_3431729866755465441_n.jpg"
                alt="eifel"
                className="w-28 sm:w-36 h-full object-contain"
              />
              <img
                src="https://theoldsiam.co.th/images/logoweb-1528342110.png"
                alt="theold"
                className="w-28 sm:w-36 h-full object-contain"
              />

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
