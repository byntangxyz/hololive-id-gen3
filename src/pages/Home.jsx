import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-8 bg-main">
      <img src="/hololive-id.webp" alt="" className="" />
      {/* Kontainer untuk karakter */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* Zeta */}
        <div className="relative w-full h-full bg-zeta-primary flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition">
          <Link
            to="/zeta"
            className="relative w-full h-full flex items-center justify-center group" // Tambahkan class group
          >
            <img
              src="/Vestia-Zeta_02.png"
              alt="Zeta"
              width={280}
              className="h-full object-cover rounded-lg z-10 group-hover:opacity-70"
            />
            <div className="absolute bottom-4 left-8 top-4 transform -translate-x-1/2 z-0 flex flex-col items-center group-hover:z-20 group-hover:text-white transition-all duration-300">
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                V
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                E
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                S
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                T
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                I
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                A
              </span>
              <br />
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                Z
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                E
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                T
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-zeta-sec">
                A
              </span>
            </div>
          </Link>
        </div>

        {/* Kobo */}
        <div className="relative w-full h-full bg-kobo-primary flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition">
          <Link
            to="/kobo"
            className="relative w-full h-full flex items-center justify-center group" // Tambahkan class group
          >
            <img
              src="/Kobo_02.png"
              alt="Kobo"
              width={280}
              className="h-full object-cover rounded-lg z-10 group-hover:opacity-70"
            />
            <div className="absolute bottom-4 left-8 top-0 transform -translate-x-1/2 z-0 flex flex-col items-center group-hover:z-20 group-hover:text-white transition-all duration-300 overflow-hidden">
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                K
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                O
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                B
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                O
              </span>
              <br />
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                K
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                A
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                N
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                A
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                E
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                R
              </span>
              <span className="text-4xl md:text-3xl font-extrabold text-white">
                U
              </span>
            </div>
          </Link>
        </div>

        {/* Kaela */}
        <div className="relative w-full h-full bg-kaela-sec flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition">
          <Link
            to="/kaela"
            className="relative w-full h-full flex items-center justify-center group" // Tambahkan class group
          >
            <img
              src="/Kaela_02.png"
              alt="Kaela"
              width={300}
              className="h-full object-cover rounded-lg group-hover:opacity-70"
            />
            <div className="absolute bottom-4 left-8 top-2 transform -translate-x-1/2 z-0 flex flex-col items-center group-hover:z-20 group-hover:text-white transition-all duration-300 overflow-hidden">
              <span className="text-3xl font-extrabold text-kaela-prime">
                K
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                A
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                E
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                L
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                A
              </span>
              <br />
              <span className="text-3xl font-extrabold text-kaela-prime">
                K
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                O
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                V
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                A
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                L
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                S
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                K
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                I
              </span>
              <span className="text-3xl font-extrabold text-kaela-prime">
                A
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
