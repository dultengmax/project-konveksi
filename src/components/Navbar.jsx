import React, { useEffect, useState } from "react";

import Logonav from "./Logo-nav";
export default function navbar() {
  const [navbarClass, setNavbarClass] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 1) {
      setNavbarClass(
        "  fixed shadow-lg backdrop-blur-sm bg-teal-200/80 duration-500 ease-in-out "
      );
    } else {
      setNavbarClass("bg-transparent ");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`navbar ${navbarClass} bg-transparent fixed top-0 left-0`}
      >
        <div className="flex-1 mb-2">
          <Logonav />
        </div>
        <div className=" flex-none  lg:flex-1">
          <div className="drawer drawer-start z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-ghost z-20 md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-7 h-10 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu  p-4 w-60 min-h-full bg-slate-400 opacity-90 absolute text-base-content">
                {/* Sidebar content here */}

                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex mb-3">
                  <Logonav />
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button btn btn-ghost ml-14 text-lg font-bold text-slate-200 z-20 md:hidden mt-4"
                  >
                    X
                  </label>
                </div>

                <li>
                  <Link to="/">Beranda</Link>
                </li>
                <li>
                  <Link to="/promo" >Promo% </Link>
                </li>
                <li>
                  <Link to="/catagories" >Catagories</Link>
                </li>
                <li>
                  <Link to="/testimony" >Testimony</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="hidden sm:hidden md:flex md:cursor-pointer list-none mr-5">
              <li className="mx-1 font-extrabold hover:font-bold ">
                <Link to="/" className="btn  btn-ghost text-md  font-inter mt-1 ">
                  Beranda
                </Link>
              </li>
              <li className="mx-1 font-semibold">
                <Link to="/promo" className="btn btn-ghost text-md font-semibold font-inter mt-1">
                  Promo%
                </Link>
              </li>

              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost w-36 text-md font-semibold font-inter mt-1 flex flex-wrap"
                >
                  Catagories
                  <svg width="20px" height="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M37 18L25 30L13 18" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52">
                  <li>
                    <Link to="/catagories">Kaos</Link>
                  </li>
                  <li>
                    <Link to="/catagories">Kemeja</Link>
                  </li>
                  <li>
                    <Link to="/catagories">jacket</Link>
                  </li>
                  <li>
                    <Link to="/catagories">Seragam</Link>
                  </li>
                  <li>
                    <Link to="/catagories">Baju Muslim</Link>
                  </li>
                  <li>
                    <Link to="/catagories">Layanan lainnya</Link>
                  </li>
                </ul>
              </div>

              <li className=" mx-1 font-semibold">
                <Link to="/testimony" className="btn btn-ghost text-md font-semibold font-inter mt-1">
                  testimony
                </Link>
              </li>

              <li className=" right-4 font-semibold">
                <a className="btn w-[160px] p-0 bg-sky-400 text-md font-semibold font-inter mt-1">
                  Daftar mitra
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
