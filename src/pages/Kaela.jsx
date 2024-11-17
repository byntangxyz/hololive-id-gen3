import React, { useState } from "react";
import { TwitterLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // Durasi animasi
  once: false, // Animasi hanya sekali
});

const Kaela = () => {
  const [currentImage, setCurrentImage] = useState("/Kaela_01.png");

  const images = ["/Kaela_01.png", "/Kaela_03.png", "/Kaela_04.png"];

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center p-8 overflow-hidden">
      <h1
        className="text-4xl font-extrabold text-kaela-prime mb-8"
        data-aos="fade-down"
      >
        Kaela Kovalskia
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
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-kaela-prime focus:ring-2 focus:ring-offset-2 focus:ring-kaela-prime"
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
            alt="Kaela Kanaeru"
            className="w-72 h-full object-cover rounded-lg shadow-md"
            data-aos="zoom-in-up"
          />
        </div>

        {/* Kolom 2: Deskripsi karakter */}
        <div className="flex flex-col" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            カエラ・コヴァルスキア
          </h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">
            “Aku Kaela, dari holoID gen 3!”
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Setelah mengambil alih bengkel guru pandai besinya, dia merasakan
            kurangnya kebahgiaan / kegembiraan dalam hidupnya. Jadi, dia
            memutuskan untuk bebas dan melakukan perjalanan untuk menemukan
            bahan pandai besi yang langka, salah satunya dikabarkan berada di
            bawah bangunan "Group Idola" tertentu di kota. Dia juga suka
            menantang dirinya dan memiliki selera yang aneh dalam hal makanan!
          </p>

          {/* Link Sosial Media */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com/kaelakovalskia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <TwitterLogo size={45} />
            </a>
            <a
              href="https://www.instagram.com/kaelakovalskia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              <InstagramLogo size={45} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZLZ8Jjx_RN2CXloOmgTHVg"
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
            <table className="table-auto border-collapse border border-gray-500 w-full text-left">
              <tbody>
                <tr className="border-b border-gray-500">
                  <th className="px-4 py-2 text-gray-800 font-medium">Nama</th>
                  <td className="px-4 py-2 text-gray-700">Kaela Kovalskia</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Tanggal lahir
                  </th>
                  <td className="px-4 py-2 text-gray-700">Agustus 30</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="px-4 py-2 text-gray-800 font-medium">Debut</th>
                  <td className="px-4 py-2 text-gray-700">Maret 26, 2022</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Tinggi
                  </th>
                  <td className="px-4 py-2 text-gray-700">173 cm</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Design Char
                  </th>
                  <td className="px-4 py-2 text-gray-700">
                    <a href="https://x.com/suzupin" className="underline">
                      Suzupin
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="px-4 py-2 text-gray-800 font-medium">Unit</th>
                  <td className="px-4 py-2 text-gray-700">
                    Hololive Indonesia
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <th className="px-4 py-2 text-gray-800 font-medium">Role</th>
                  <td className="px-4 py-2 text-gray-700">Blacksmith</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hashtag</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <span className="font-medium">General:</span> #KaelaKovalskia
                </li>
                <li>
                  <span className="font-medium">LIVE:</span> #inKaela
                </li>
                <li>
                  <span className="font-medium">Fanart:</span> #AeruSeni
                </li>
                <li>
                  <span className="font-medium">Meme:</span> #Kaelaugh
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

export default Kaela;
