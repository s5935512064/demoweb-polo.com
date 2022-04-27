import { Dialog, Transition, Switch } from '@headlessui/react'
import React, { Fragment, useState, useEffect } from 'react'
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Cookies() {
    let [bannerOpen, setBannerOpen] = useState(true)
    let [isOpen, setIsOpen] = useState(false)
    const [analysis, setAnalysis] = useState(false)
    const [marketing, setMarketing] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeCookie() {

        setBannerOpen(false)
    }

    useEffect(() => {
        const btn = document.querySelector("#acceptBannerHide");
        const banner = document.querySelector("#banner");

        btn.addEventListener("click", () => {
            // mobileMenu.classList.toggle("hidden")
            banner.classList.toggle("translate-y-full");
        });
    }, []);

    return (
        <>
            <div id="banner" className="fixed w-full bottom-0 flex flex-col py-4 px-4 lg:px-10 justify-center bg-[#08250D] bg-opacity-80 max-h-[300px] text-white duration-200">
                <p className="text-lg">เว็บไซต์นี้ใช้คุกกี้</p>
                <div className="flex flex-col justify-between lg:items-center lg:flex-row gap-3">
                    <p className="font-light text-sm sm:text-base">
                        เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ และประสบการณ์ที่ดีในการใช้งานเว็บไซต์ คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก การตั้งค่าคุกกี้

                        <Link href="/cookiesPolicy">
                            <span className="underline ml-2">นโยบายการใช้คุ๊กกี้</span>
                        </Link>
                    </p>

                    <div className="flex gap-2 w-full lg:w-1/3 lg:flex-row flex-row-reverse justify-end ">

                        <button
                            type="button"
                            onClick={openModal}
                            className="px-4 py-2 font-medium text-white underline "
                        >
                            การตั้งค่าคุ๊กกี้
                        </button>
                        <button
                            id="acceptBannerHide"
                            type="button"
                            onClick={closeCookie}
                            className="px-4 py-2  font-medium text-white bg-orange-500 rounded-md shadow hover:bg-orange-400 duration-150"
                        >
                            ยอมรับทั้งหมด
                        </button>
                    </div>

                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment} >
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center  ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-2xl p-3 md:p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl md:text-2xl font-medium leading-6 text-gray-900 pb-2"
                                >
                                    การตั้งค่าความเป็นส่วนตัว

                                </Dialog.Title>
                                <div className="mt-2 border p-3 md:p-6 rounded ">
                                    <div className="flex justify-between text-base md:text-lg">
                                        <p>คุกกี้พื้นฐานที่จำเป็น</p>
                                        <p className="text-right">เปิดใช้งานตลอดเวลา</p>
                                    </div>
                                    <p className=" text-gray-500 font-light text-sm md:text-base">
                                        คุกกี้พื้นฐานที่จำเป็น เพื่อช่วยให้การทำงานหลักของเว็บไซต์ใช้งานได้ รวมถึงการเข้าถึงพื้นที่ที่ปลอดภัยต่าง ๆ ของเว็บไซต์ หากไม่มีคุกกี้นี้เว็บไซต์จะไม่สามารถทำงานได้อย่างเหมาะสม และจะใช้งานได้โดยการตั้งค่าเริ่มต้น โดยไม่สามารถปิดการใช้งานได้ รายละเอียดคุกกี้
                                    </p>
                                </div>
                                <div className="mt-2 border p-3 md:p-6 rounded">
                                    <div className="flex justify-between text-base md:text-lg ">
                                        <p >คุกกี้ในส่วนการตลาด</p>
                                        <Switch
                                            checked={marketing}
                                            onChange={setMarketing}
                                            className={classNames(marketing ? "bg-teal-900" : "bg-slate-300",
                                                "relative inline-flex flex-shrink-0 h-[28px] w-[58px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75")}
                                        >
                                            <span className="sr-only">Use setting</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(marketing ? "translate-x-[30px]" : "translate-x-[2px]",
                                                    "pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 translate-y-[2px]")} />
                                        </Switch>
                                    </div>
                                    <p className=" text-gray-500 font-light mt-2 text-sm md:text-base">
                                        คุกกี้ในส่วนการตลาด ใช้เพื่อติดตามพฤติกรรมผู้เข้าชมเว็บไซต์เพื่อแสดงโฆษณาที่เหมาะสมสำหรับผู้ใช้งานแต่ละรายและเพื่อเพิ่มประสิทธิผลการโฆษณาสำหรับผู้เผยแพร่และผู้โฆษณาสำหรับบุคคลที่สาม รายละเอียดคุกกี้
                                    </p>
                                </div>
                                <div className="mt-2 border p-3 md:p-6 rounded ">
                                    <div className="flex justify-between text-base md:text-lg ">
                                        <p >คุกกี้ในส่วนวิเคราะห์</p>
                                        <Switch
                                            checked={analysis}
                                            onChange={setAnalysis}
                                            className={classNames(analysis ? "bg-teal-900" : "bg-slate-300", "relative inline-flex flex-shrink-0 h-[28px] w-[58px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75")}
                                        >
                                            <span className="sr-only">Use setting</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(analysis ? "translate-x-[30px]" : "translate-x-[2px]", "pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 translate-y-[2px]")}
                                            />
                                        </Switch>
                                    </div>
                                    <p className=" text-gray-500 font-light mt-2 text-sm md:text-base">
                                        คุกกี้ในส่วนวิเคราะห์ จะช่วยให้เว็บไซต์เข้าใจรูปแบบการใช้งานของผู้เข้าชมและจะช่วยปรับปรุงประสบการณ์การใช้งาน โดยการเก็บรวบรวมข้อมูลและรายงานผลการใช้งานของผู้ใช้งาน
                                    </p>
                                </div>



                                <div className="mt-4 flex justify-end">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center text-sm md:text-base px-4 py-2  font-medium text-white border border-transparent bg-orange-500 rounded-md shadow hover:bg-orange-400"
                                        onClick={closeModal}
                                    >
                                        ยืนยันตัวเลือกของฉัน
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
