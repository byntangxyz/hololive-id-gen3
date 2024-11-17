import React, { useState } from "react";
import { TwitterLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // Durasi animasi
  once: false, // Animasi hanya sekali
});

const Kobo = () => {
  const [currentImage, setCurrentImage] = useState("/Kobo_01.png");

  const images = ["/Kobo_01.png", "/Kobo_03.png", "/Kobo_04.png"];

  return (
    <div className="min-h-screen bg-sky-200 flex flex-col items-center p-8 overflow-hidden">
      <h1
        className="text-4xl font-extrabold text-kobo-primary mb-8"
        data-aos="fade-down"
      >
        Kobo Kanaeru
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
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-kobo-primary focus:ring-2 focus:ring-offset-2 focus:ring-kobo-primary"
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
            alt="Kobo Kanaeru"
            className="w-72 h-full object-cover rounded-lg shadow-md"
            data-aos="zoom-in-up"
          />
        </div>

        {/* Kolom 2: Deskripsi karakter */}
        <div className="flex flex-col" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            こぼ・かなえる
          </h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">
            "Bo Kobo Kobo Kanaeru at your service, let me be your shine to shine
            your day ehe!"
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Seorang gadis periang yang tinggal di ruangan paling atas mercusuar,
            dia sebenarnya adalah gadis keturunan dukun hujan terkuat dari
            daerah itu. Dia memiliki potensi besar untuk mengendalikan hujan,
            tetapi dia tidak suka melakukannya sebagai tugas. Untuk memenangkan
            kembali gelar Master hujannya, dia perlu membuktikan kepada
            keluarganya bahwa dia dapat mempertahankan layanan dukun hujan
            mereka. Dia tidak hanya harus berlatih setiap hari, tetapi dia juga
            perlu mengadopsi semacam strategi pemasaran virtual untuk berhasil!
          </p>

          {/* Link Sosial Media */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com/kobokanaeru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <TwitterLogo size={45} />
            </a>
            <a
              href="https://www.instagram.com/kobokanaeru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              <InstagramLogo size={45} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCjLEmnpCNeisMxy134KPwWw"
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
                  <td className="px-4 py-2 text-gray-700">Kobo Kanaeru</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Tanggal lahir
                  </th>
                  <td className="px-4 py-2 text-gray-700">Desember 12</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">Debut</th>
                  <td className="px-4 py-2 text-gray-700">Maret 27, 2022</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Tinggi
                  </th>
                  <td className="px-4 py-2 text-gray-700">150 cm</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-gray-800 font-medium">
                    Design Char
                  </th>
                  <td className="px-4 py-2 text-gray-700">
                    <a href="https://x.com/ponkan_8" className="underline">
                      Ponkan_8
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
                  <td className="px-4 py-2 text-gray-700">Rain Shaman</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hashtag</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <span className="font-medium">General:</span> #KoboKanaeru
                </li>
                <li>
                  <span className="font-medium">LIVE:</span> #OnAeru
                </li>
                <li>
                  <span className="font-medium">Fanart:</span> #AeruSeni
                </li>
                <li>
                  <span className="font-medium">Meme:</span> #Kobobrok
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

export default Kobo;
