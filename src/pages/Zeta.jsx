import React, { useState } from "react";
import { TwitterLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // Durasi animasi
  once: false, // Animasi hanya sekali
});

const Zeta = () => {
  const [currentImage, setCurrentImage] = useState("/Vestia-Zeta_01.png");

  const images = [
    "/Vestia-Zeta_01.png",
    "/Vestia-Zeta_03.png",
    "/Vestia-Zeta_04.png",
  ];

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center p-8 overflow-hidden">
      <h1
        className="text-4xl font-extrabold text-zeta-sec mb-8"
        data-aos="fade-down"
      >
        Vestia Zeta
      </h1>

      {/* Bagian pertama: Gambar dan deskripsi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Kolom 1: Gambar karakter */}
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="flex flex-row md:flex-col md:mr-4 space-x-4 md:space-x-0 md:space-y-4 mb-4 md:mb-0">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(img)}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-zeta-sec focus:ring-2 focus:ring-offset-2 focus:ring-zeta-sec"
                data-aos="fade-down"
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <img
            src={currentImage}
            alt="Vestia Zeta"
            className="w-72 h-full object-cover rounded-lg shadow-md"
            data-aos="zoom-in-up"
          />
        </div>

        {/* Kolom 2: Deskripsi karakter */}
        <div className="flex flex-col" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ベスティア・ゼータ
          </h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">
            “A a a! Mission Sutaato! Aku Vestia Zeta dari holoID gen 3!”
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dia adalah rekrutan misterius ke-7 dari unit arsip rahasia yang
            memiliki lisensi penuh untuk mengumpulkan data virtual. Meskipun dia
            adalah seorang pemula yang menjanjikan, yang juga dikenal sebagai
            codename V.7, dia menjadi kikuk ketika segala sesuatunya tidak
            berjalan sesuai dengan manual. Itu awalnya adalah misi sendiri untuk
            menyusup ke dunia virtual, tetapi sekarang dia telah menemukan
            kenyamanan disini. Akankah misi ini berakhir dengan membawanya ke
            takdir yang baru?
          </p>

          {/* Link Sosial Media */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com/VestiaZeta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <TwitterLogo size={45} />
            </a>
            <a
              href="https://instagram.com/VestiaZeta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              <InstagramLogo size={45} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCTvHWSfBZgtxE4sILOaurIQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700"
            >
              <YoutubeLogo size={45} />
            </a>
          </div>
        </div>

        {/* Bagian kedua: Data karakter dan hashtag */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-10">
          {/* Kolom 1: Data karakter */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Data Karakter
            </h2>
            <table className="table-auto border-collapse border border-gray-300 w-full text-left">
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">Nama</th>
                  <td className="px-4 py-2 text-gray-700">Vestia Zeta</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Tanggal lahir
                  </th>
                  <td className="px-4 py-2 text-gray-700">November 7</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">Debut</th>
                  <td className="px-4 py-2 text-gray-700">Maret 25, 2022</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Tinggi
                  </th>
                  <td className="px-4 py-2 text-gray-700">155 cm</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Design Char
                  </th>
                  <td className="px-4 py-2 text-gray-700">
                    <a
                      href="https://twitter.com/TeraAru6262"
                      className="underline"
                    >
                      Arutera
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">Unit</th>
                  <td className="px-4 py-2 text-gray-700">
                    Hololive Indonesia
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">Role</th>
                  <td className="px-4 py-2 text-gray-700">Detective</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hashtag</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <span className="font-medium">General:</span> #VestiaZeta
                </li>
                <li>
                  <span className="font-medium">LIVE:</span> #ZecretLive
                </li>
                <li>
                  <span className="font-medium">Fanart:</span> #Zetacrylic
                </li>
                <li>
                  <span className="font-medium">Meme:</span> #DEEZeta
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom 2: Hashtag */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Zeta;
