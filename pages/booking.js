import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "@fancyapps/ui/dist/carousel.css";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import axios from "axios";
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');
moment().format();

const URL = "https://polomanage.ssdapp.net/booking_status.php?date";
const parse = require('html-react-parser');

const Booking = () => {
  const router = useRouter();
  const { locale } = router;
  var currentDate = moment().format("YYYY-MM-DD");

  const [value, setValue] = useState(new Date(currentDate));
  const [table, setTable] = useState('');


  const getTable = async (date) => {

    return await axios.post(`${URL}=${date}`).then((res) => {
      if (res.data) {
        setTable(res.data)
      }
    });
  };

  const handleChange = (newValue) => {
    setValue(newValue);
    getTable(moment(newValue).format('YYYY-MM-DD'))

  };

  useEffect(() => {
    setTimeout(() => {
      handleChange()
    }, 1000)
  }, []);


  return (

    <Layout>
      <Head>
        <title>ราคาและโปรโมชั่น  :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน</title>
        <meta name="description" content="สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
        <meta name="keywords" content="สนามฟุตบอล,สนามกีฬา,สนามฟุตบอลหญ้าเทียม,โปโลฟุตบอลพาร์ค,สนามฟุตบอลในร่ม,สนามฟุตซอลในร่ม,สนามฟุตบอล,สนามฟุตซอล,ซอยโปโล,ถนนวิทยุ,ซอยปลูกจิต,พระราม 4,เช่าสนามฟุตบอล,จัดกิจกรรม,กีฬาสี,หญ้าเทียม,จัดการแข่งขัน,ฝึกซ้อม,สนาม 7 คน,สนามกีฬา,สนามกีฬาจัดกิจกรรม,สนามหญ้าเทียมให้เช่า,สนามหญ้าเทียมให้บริการ,จัดกิจกรรมกีฬาสี,จัดกิจกรรม Sport day" />
        <meta name="stats-in-th" content="80ff" />
        <meta property="fb:app_id" content="1148488061869620" />
        <meta property="og:site_name" content="ราคาและโปรโมชั่น  :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
        <meta property="og:title" content="ราคาและโปรโมชั่น  :  สนามฟุตบอลในร่มหญ้าเทียมแห่งแรกในย่านธุรกิจใจกลางเมือง  เดินทางสะดวก  เข้าออกได้หลายทางจากซอยโปโล ด้านถนนวิทยุ  หรือ ซอยปลูกจิต ถนนพระรามสี่ หญ้าเทียมนำเข้าจากประเทศเบลเยี่ยม ใช้เทคโนโลยีการผลิตและติดตั้งมาตรฐานยุโรปให้ความรู้สึกเรียบ เนียน ไม่สะดุดเท้า เปิดบริการถึงเที่ยงคืน" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://polofootballpark.com/booking" />
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
            <img
              src="/assets/Soccer_ball.svg"
              alt="ball"
              className="w-24 h-24 roll"
            />
          </div>

          <section className="flex w-full flex-col justify-center items-center px-4 lg:px-10">
            <p className="text-3xl font-medium md:hidden">
              {locale === "en" ? " Rate&Booking" : "ราคาและการจอง"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 w-full h-full mt-5 md:mt-10">
              <div className="sm:col-span-4 overflow-x-scroll">
                <p className="mb-1 text-lg">
                  {locale == 'en' ? "Please select a date to check the booking schedule" : "ตรวจสอบการจองสนาม จากวันที่ (กรุณาเลือกวันที่ ที่ต้องการตรวจเช็ค)"}
                </p>
                <div className="relative mb-2">
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={4}>
                      <DesktopDatePicker
                        mask='__/__/____'
                        inputFormat="DD/MM/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>

                </div>

                <div className="">
                  {parse(table)}
                </div>

              </div>
              <div className="sm:col-span-2  ">
                <div className="mt-8 flex gap-3 w-full">
                  <button className="bg-red-400 p-3 w-36">
                    {locale == 'en' ? "Reserved" : "มีจองแล้ว"}
                  </button>

                  <button className="bg-[#94E661] p-3 w-36 "> {locale == 'en' ? "Can be booked" : "สามารถจองได้"} </button>
                </div>
                <p className="text-red-400  font-light">
                  {locale == 'en' ? "*** Status Table reservations are just booking information field. At the current time Changes can not be adjusted, and reserves the right to change. If you have any questions, please contact us." : "***ตารางบอกสถานะการจองนี้เป็นเพียงข้อมูลการจองใช้สนาม ณ เวลาปัจจุบัน ไม่สามารถเปลี่ยนแปลงปรับเปลี่ยนได้ และขอสงวนสิทธิ์ในการเปลี่ยนแปลง หากมีข้อสงสัยกรุณาติดต่อเจ้าหน้าที่"}

                </p>

                <div className="w-full h-96 my-5">
                  <div className="grid grid-cols-3 grid-rows-6 justify-items-center w-full h-4/5 border-b border-r divide-y divide-x font-light bg-slate-200 gap-1 p-2 text-xs sm:text-sm md:text-xs lg:text-base ">
                    <div className="w-full h-full flex justify-center border-l border-t items-center !font-normal bg-white shadow">
                      {locale == "en" ? "Day" : "วัน"}

                    </div>
                    <div className="w-full h-full flex justify-center items-center !font-normal bg-white shadow">
                      {locale == "en" ? "Time" : "เวลา"}

                    </div>
                    <div className="w-full h-full flex justify-center items-center !font-normal bg-white shadow">
                      {locale == "en" ? "Price" : "ราคา"}

                    </div>
                    <div className="row-span-3 w-full h-full flex items-center justify-center bg-white shadow">
                      {locale == "en" ? "Mon-Fri" : " จันทร์-ศุกร์"}

                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      12.00 - 18.00
                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      {locale == "en" ? " 1,200 Baht" : " 1,200 บาท"}

                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      18.00 - 22.00
                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      {locale == "en" ? "2,000 Baht" : "2,000 บาท"}

                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      22.00 - 24.00
                    </div>


                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      {locale == "en" ? "1,700 Baht" : " 1,700 บาท"}

                    </div>
                    <div className="row-span-2 w-full h-full flex items-center justify-center text-center bg-white shadow">
                      {locale == "en" ? "Sat-Sun & Holiday" : "เสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์"}

                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      09.00 - 18.00
                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      {locale == "en" ? " 1,500 Baht" : " 1,500 บาท"}

                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      18.00 - 24.00
                    </div>
                    <div className="w-full h-full flex justify-center items-center bg-white shadow">
                      {locale == "en" ? " 1,700 Baht" : " 1,700 บาท"}

                    </div>


                  </div>
                  <p className="mt-2 font-light text-red-400 ">
                    {locale == "en" ? "**Price before opening hours Mon-Fri (09.00-12.00 AM) 1,200 Baht**" : "**ราคาก่อนเวลาเปิดให้บริการ จันทร์-ศุกร์ (09.00-12.00) ชั่วโมงละ 1200 บาท**"}
                  </p>
                </div>

                <div className="w-full h-48 bg-yellow-200 flex flex-col justify-center items-end my-5 py-5 relative px-6">
                  <p className="inline-flex items-center  justify-center w-full text-xl text-center mb-2">
                    {locale == "en" ? "For events & activities rule,please contact." : "หากต้องการทราบอัตราค่าบริการ เช่าจัดงาน event และกิจกรรม กรุณาติดต่อ"}
                  </p>


                  <a href="tel:+6670708833" className="w-full h-[50px] rounded bg-[#08250D] text-white inline-flex items-center  justify-center ">
                    <FontAwesomeIcon icon={faPhone} className="text-white w-8 h-8  rotate-12 hover:animate-bounce duration-150" />
                    <p className="text-xl ml-4">08-7070-8833</p>  </a>

                  <div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
