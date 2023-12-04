import React from "react";

const About = () => {
  return (
    <div className="min-h-screen min-w-full ">
      <div className="mt-7 mx-auto">
        <section className="flex flex-col text-justify w-auto md:w-1/4 h-1/2 shadow-md border-1 mx-4 p-2">
          <h1 className="text-center font-poppins font-semibold text-2xl mb-4">
            {" "}
            tentang kami
          </h1>
          <h2 className="font-poppins font-semibold text-md">
            SandangJaya, tempatnya untuk mendapatkan konveksi baju dan seragam
            berkualitas tinggi dengan harga terjangkau! Kami menawarkan solusi
            pakaian khusus untuk kebutuhan bisnis, acara, atau komunitas Anda.
            Dengan komitmen kepada kualitas dan desain yang unik, SandangJaya
            hadir untuk mewujudkan visi Anda dalam berbusana. Percayakan pada
            kami untuk penampilan yang memukau tanpa menguras kantong Anda.
            Jadi, mari bergaya bersama SandangJaya, di mana kepuasan pelanggan
            adalah prioritas utama!
          </h2>
        </section>

        <div className="divider"></div>

        <section className="flex flex-wrap  justify-center">
          <div className=" p-3 w-full ">
            <h1 className="text-center  font-semibold font-inter text-5xl italic">
              {" "}
              pilihan katagori produk Sesuai kebutuhan anda
            </h1>
            <div className=" carousel flex flex-wrap mt-3 justify-center">
              <div
                id="katalog1"
                className="carousel-item relative flex-col  justify-center w-fit py-20 rounded-lg"
              >
                <h1 className=" text-center font-inter font-semibold text-xl">
                  katagori baju
                </h1>
                <div className="flex flex-wrap justify-center">
                  <div className="card w-[300px] glass ml-5 ">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="car!"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Life hack</h2>
                      <p>How to park your car at your garage?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                      </div>
                    </div>
                  </div>
                  <div className="card w-[300px] glass ml-5">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="car!"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Life hack</h2>
                      <p>How to park your car at your garage?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                      </div>
                    </div>
                  </div>
                  <div className="card w-[300px] glass ml-5">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="car!"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Life hack</h2>
                      <p>How to park your car at your garage?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex justify-between transform -translate-y-1/2 -left-2 -right-7 top-1/2">
                    <a href="#katalog4" className="btn btn-ghost ">
                      ❮
                    </a>
                    <a href="#katalog2" className="btn btn-ghost ">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
