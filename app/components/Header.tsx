"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SearchInput } from "../../components";
import { publicApi } from "../../utils";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState({
    data: [],
    isSearch: false,
    resultFound: false,
  });
  const debounce = (func: (v: string) => void, wait: number) => {
    let timerId: any;
    return (val: string) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(val);
      }, wait);
    };
  };
  const filterData = async () => {
    let fData: any = [];
    let resultFound = false;
    if (search) {
      const data = await publicApi.get(`/stocks/search?query=${search}`);
      fData = [...data.data];
      if (fData.length > 0) {
        resultFound = true;
      }
    }
    setFilteredData({
      ...fData,
      data: [...fData],
      isSearch: search.trim().length > 0,
      resultFound: resultFound,
    });
  };
  useEffect(() => {
    filterData();
  }, [search]);
  return (
    <>
      <header className="header-main flex items-center gap-[32px] justify-between px-[75px] py-[10px] xl:px-[15px] sm:gap-[20px] lg:flex-row-reverse sticky top-0 z-50 bg-white">
        <div className="logo-otr flex items-center gap-[24px]">
          <div
            className="burger-icon-otr hidden lg:flex cursor-pointer"
            onClick={handleOpenMenu}
          >
            <Image
              className="object-contain"
              width="36"
              height="36"
              src="/menu-icon.svg"
              alt="menu-icon"
            />
          </div>
          <a href="" className="logo-img sm:hidden md:flex">
            <Image
              className="object-contain object-left"
              width="140"
              height="38"
              src="/brand-logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="Search-otr relative flex w-[600px] lg:w-[100%] lg:flex-1">
          <SearchInput
            handleChange={debounce((v: string) => {
              setSearch(v);
            }, 100)}
            filteredData={filteredData}
          />
        </div>
        <div className="menu-action-otr flex items-center gap-[32px] 2xl:gap-[20px] lg:hidden">
          <ul className="menu-ul flex items-center gap-[32px] 2xl:gap-[20px]">
            <li className="menu-li flex items-center gap-[8px]">
              <a href="" className="menu-a heading-S text-primary-dark">
                Screener
              </a>
              <p className="flex-none heading-XXS text-green-default bg-green-light rounded-16 pt-[4px] pb-[5px] px-[8px]">
                Coming Soon
              </p>
            </li>
            <li className="menu-li">
              <a href="" className="ml-2 menu-a heading-S text-primary-dark">
                Watchlist
              </a>
            </li>
            <li className="menu-li">
              <a href="" className="menu-a heading-S text-primary-dark">
                About
              </a>
            </li>
          </ul>
          <div className="action-otr flex">
            <a href="" className="theme-btn">
              Download
            </a>
          </div>
        </div>
      </header>
      {openMenu && (
        <div
          className={`relative z-[999] overflow-hidden overlay-main ${
            openMenu ? "Open-overlay" : ""
          }`}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity h-[100vh]"></div>
          <div className="fixed inset-0 h-[100vh] overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="overlay-box pointer-events-auto relative w-screen max-w-[420px] right-[-420px] transition-[.3s]">
                  <div
                    className="absolute top-0 left-[-44px] flex pt-4 pr-2 sm:pr-4 xs:hidden"
                    onClick={handleCloseMenu}
                  >
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex h-[100vh] flex-col overflow-y-auto bg-white shadow-xl">
                    <div className="logo-otr flex items-center justify-between gap-[24px] py-[16px] px-[24px] border-b-[1px] border-[#ECEEF1]">
                      <a href="" className="logo-img flex">
                        <Image
                          className="object-contain object-left"
                          width="140"
                          height="38"
                          src="/brand-logo.png"
                          alt="logo"
                        />
                      </a>
                      <button
                        type="button"
                        className="rounded-md hidden xs:block text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={handleCloseMenu}
                      >
                        <svg
                          className="h-8 w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="menu-action-otr px-[24px] pt-[24px]">
                      <ul className="menu-ul mb-[36px]">
                        <li className="menu-li mb-[12px] flex items-end gap-[12px] border-b-[1px] border-[#ECEEF1] pb-[12px]">
                          <a
                            href=""
                            className="menu-a heading-LB text-primary-dark"
                          >
                            Screener
                          </a>
                          <p className="heading-XXS text-green-default bg-green-light rounded-16 pt-[4px] pb-[5px] px-[8px]">
                            Coming Soon
                          </p>
                        </li>
                        <li className="menu-li mb-[12px] border-b-[1px] border-[#ECEEF1] pb-[12px]">
                          <a
                            href=""
                            className="menu-a heading-LB text-primary-dark"
                          >
                            Watchlist
                          </a>
                        </li>
                        <li className="menu-li mb-[12px] border-b-[1px] border-[#ECEEF1] pb-[12px]">
                          <a
                            href=""
                            className="menu-a heading-LB text-primary-dark"
                          >
                            About
                          </a>
                        </li>
                      </ul>
                      <div className="action-otr flex">
                        <a href="" className="theme-btn w-[100%] text-center">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
