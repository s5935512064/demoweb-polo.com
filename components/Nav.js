import { AnimateSharedLayout, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const listItem = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Rate&Booking", href: "/booking" },
    { name: "News&Event", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Polo Corner", href: "/corner" },
    { name: "Contact us", href: "/contact" },
]

const Nav = () => {

    const router = useRouter();
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    useEffect(() => {
        const btn = document.querySelector("#hamburgerBtn")
        const mobileMenu = document.querySelector("#mobile-menu")

        btn.addEventListener('click', () => {
            // mobileMenu.classList.toggle("hidden")
            mobileMenu.classList.toggle("-translate-y-full")
        })
    }, []);

    return (
        <AnimateSharedLayout>


            <div className="w-full h-24  bg-[url('/assets/header.png')] sticky top-0 inset-x-0 flex justify-center !z-50">
                <div className="w-full bg-[#08250D] absolute h-full opacity-30" />
                <div className="max-w-7xl px-4 w-full h-full flex items-center text-white justify-between absolute">
                    <div className="w-full hidden sm:flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-white w-10 h-10 pr-4" />
                        จองสนาม<br></br>
                        08-7070-8833
                    </div>

                    <div className="w-full  flex items-center">
                        <Link href="/">
                            <img src="/assets/logo.png" alt="logo" className="h-20 w-full object-contain object-center" />
                        </Link>
                    </div>
                    <div className="w-full flex justify-end items-center">
                        English
                    </div>
                </div>
            </div>

            <div className="h-12  bg-[#08250D] w-full  sticky top-24 inset-x-0  flex justify-center !z-10">
                <div className="max-w-7xl px-4 w-full h-full flex items-center text-white md:justify-center ">


                    <div className="md:hidden flex items-center justify-items-start">
                        <button id="hamburgerBtn" className={navbarOpen ? "ham active" : "ham"} onClick={handleToggle}>
                            <span className="bar1"></span>
                            <span className="bar2"></span>
                            <span className="bar3"></span>
                        </button>
                        <span className="ml-2 text-sm font-normal"> {navbarOpen ? "Close Menu" : "Menu"} </span>
                    </div>

                    <div id="myDIV" className="hidden md:flex  items-center h-full">
                        {listItem
                            .map((item) => (

                                <Link href={item.href} key={item.name} >
                                    <button

                                        className={router.pathname == item.href ? "text-white text-base bg-[#176724] h-full px-4" : "text-white text-base h-full px-4 "}
                                    >
                                        {item.name}
                                    </button>
                                </Link>


                            ))}
                    </div>


                </div>

                <div className="bg-[#08250D]  absolute  h-screen transform -translate-y-full w-full transition duration-300 ease-in-out  md:hidden overflow-hidden !z-[-99] "
                    id="mobile-menu">

                    <div className=" absolute w-full h-full space-y-1  -translate-y-20">


                        <div className="space-y-1 flex h-full justify-center flex-col">

                            {listItem
                                .map((item) => (

                                    <Link href={item.href} key={item.name} >
                                        <button

                                            className={router.pathname == item.href ? "text-white hover:text-white block px-3 py-2  text-base text-center font-semibold" : "text-gray-400 hover:text-white block px-3 py-2  text-base text-center"}

                                        >
                                            {item.name}
                                        </button>
                                    </Link>


                                ))}
                        </div>
                    </div>
                </div>
            </div>

        </AnimateSharedLayout>
    );
}

export default Nav;