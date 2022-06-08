import { AnimateSharedLayout, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import th from "../locales/th";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : th;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale, scroll: false });
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const btn = document.querySelector("#hamburgerBtn");
    const mobileMenu = document.querySelector("#mobile-menu");

    btn.addEventListener("click", () => {
      // mobileMenu.classList.toggle("hidden")
      mobileMenu.classList.toggle("-translate-y-full");
    });
  }, []);

  return (
    <AnimateSharedLayout>
      <div className="w-full h-24  bg-[url('/assets/header.webp')] sticky sm:top-0 inset-x-0 flex justify-center !z-50">
        <div className="w-full bg-[#08250D] absolute h-full opacity-30" />
        <div className="max-w-7xl px-4 w-full h-full flex items-center text-white justify-between absolute">
          <div className="w-full hidden sm:flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white w-12 h-12 mr-4 rotate-12"
            />
            <div className="flex-col">
              {locale === "en" ? "Reservation" : "จองสนาม"} <br></br>
              <a href="tel:+6670708833" className="text-xl">08-7070-8833</a>
            </div>
          </div>

          <Link href="/">
            <div className="h-20 w-full  flex items-center relative">
              <Image
                src="/assets/logo.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
                className="cursor-pointer" />
            </div>
          </Link>

          <div className="w-full flex justify-end items-center">
            <div className="w-8 h-8 relative mr-1">
              <Image
                src={t.flagImage}
                alt="flag"
                layout="fill"
                objectFit="contain"
                className="w-8 h-8" />

            </div>

            <select
              name="changeLocal"
              onChange={changeLanguage}
              defaultValue={locale}
              className="text-white text-shadow-sm bg-transparent  font-medium text-md"
            >
              <option className="text-black rounded-none" value="en">
                English
              </option>
              <option className="text-black rounded-none" value="th">
                ภาษาไทย
              </option>
            </select>
          </div>

        </div>
      </div>

      <div className="h-12  bg-[#08250D] w-full  sticky top-0 sm:top-24 inset-x-0  flex justify-center !z-10">
        <div className="max-w-7xl mx-4 w-full h-full flex items-center text-white md:justify-center ">
          <div className="md:hidden flex items-center justify-items-start">
            <button
              id="hamburgerBtn"
              className={navbarOpen ? "ham active" : "ham"}
              onClick={handleToggle}
            >
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </button>
            <span className="ml-2 text-sm font-normal">
              {" "}
              {navbarOpen ? "Close Menu" : "Menu"}{" "}
            </span>
          </div>

          <div id="myDIV" className="hidden md:flex  items-center h-full">
            {t.listItem.map((item) => (
              <Link href={item.href} key={item.name}>
                <button
                  className={
                    router.pathname == item.href
                      ? "text-white text-base bg-[#176724] h-full px-4"
                      : "text-white text-base h-full px-4 "
                  }
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="bg-[#08250D]  absolute  h-screen transform -translate-y-full w-full transition duration-300 ease-in-out  md:hidden overflow-hidden !z-[-99] "
          id="mobile-menu"
        >
          <div className=" absolute w-full h-full space-y-1  -translate-y-20">
            <div className="space-y-1 flex h-full justify-center flex-col">
              {t.listItem.map((item) => (
                <Link href={item.href} key={item.name}>
                  <button
                    className={
                      router.pathname == item.href
                        ? "text-white hover:text-white block px-3 py-2  text-base text-center font-semibold"
                        : "text-gray-400 hover:text-white block px-3 py-2  text-base text-center"
                    }
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
};

export default Nav;
