import React, { useEffect } from "react";
import Logonav from "./Logo-nav";

export default function header() {
  useEffect(() => {
    const textElement = document.querySelector(".animate-moveText");
    textElement.style.transform = "translateY(40%)";

    setTimeout(() => {
      textElement.style.transition = "transform 1s  ";
      textElement.style.transform = "translateY(0) ";
    }, 100);
  }, []);
  return (
    <div>
      <div className=" flex flex-wrap justify-center">
        <section>
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item bg-fixed relative w-full h-[60vh] md:min-h-screen"
            >
              <img src="bghd1.png" className="w-full   " />
              <section className="  animate-moveText absolute ml-3 block w-1/2 font-bold text-teal-800 mt-40">
              <div className="flex flex-wrap">
              <h1 className=" text-lg font-inter md:text-5xl ">Konveksi
              <span>
               Sandang Jaya
              </span>
              </h1>
              </div>  
                <h2 className=" font-inter  md:text-2xl mt-2 ">
                  Solusi tepat untuk produksi berbagai kebutuhan pakaian anda
                </h2>
              </section>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-ghost bg-transparent ml-0">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-ghost bg-transparent">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-ghost bg-transparent">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-ghost bg-transparent">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-ghost bg-transparent">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-ghost bg-transparent">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-ghost bg-transparent">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-ghost bg-transparent">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
