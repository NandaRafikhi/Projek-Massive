import React, { useState } from "react";
import { Link } from "react-router-dom";
import FrTShirt from "../../../public/assets/desain/fr-tshirt.png";
import FrWhiteTShirt from "../../../public/assets/desain/fr-wh-shirt.png";
import FrYellowTShirt from "../../../public/assets/desain/fr-yl-shirt.png";
import FrRedTShirt from "../../../public/assets/desain/fr-rd-shirt.png";

const ClickProduct = () => {
  const black = FrTShirt;
  const white = FrWhiteTShirt;
  const red = FrRedTShirt;
  const yellow = FrYellowTShirt;
  const shirts = { black, white, red, yellow };

  const [color, setColor] = useState(shirts.black);

  return (
    <div className="bg-white flex flex-col">
      <div className="self-center w-full max-w-[1310px] mt-24 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
            <div
              id="warna-baju"
              className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-8"
            >
              <img
                src={color}
                className="aspect-[1.11] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className="flex-col mt-5">
                <div className="flex flex-col px-5 ">
                  <div className="text-neutral-400 text-2xl self-center font-bold ">
                    Stok
                  </div>
                  <div className="text-neutral-400 text-2xl font-medium self-center whitespace-nowrap mt-3">
                    35
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch mt-7 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-black text-3xl font-mons font-bold max-md:max-w-full">
                Cotton Combed 30s (Lengan Pendek)
              </div>
              <div className="text-neutral-400 text-2xl font-mons font-bold whitespace-nowrap mt-8 self-start">
                Jenis Bahan:
              </div>
              <div className="text-neutral-400 text-2xl font-mons font-medium mt-3.5 max-md:max-w-full">
                <ul>
                  <li>Sentinel dan elastis</li>
                  <li>Nyaman digunakan</li>
                </ul>
              </div>
              <div className="flex w-[262px] max-w-full flex-col items-stretch mt-7 self-start">
                <div className="text-neutral-400 text-2xl font-bold whitespace-nowrap">
                  Warna
                </div>
                <div className="flex items-stretch justify-between gap-3.5 mt-5 pr-20 max-md:pr-5">
                  <button
                    onClick={() => setColor(shirts.black)}
                    className="border-[3px] bg-black flex w-[33px] rounded-md border-solid border-black hover:border-blue-600"
                  />
                  <button
                    onClick={() => setColor(shirts.white)}
                    className="border-[3px] bg-white flex w-[33px] rounded-md border-solid border-black hover:border-blue-600"
                  />
                  <button
                    onClick={() => setColor(shirts.red)}
                    className="border-[3px] bg-red-700 flex w-[33px] rounded-md border-solid border-black hover:border-blue-600"
                  />
                  <button
                    onClick={() => setColor(shirts.yellow)}
                    className="border-[3px] bg-amber-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded-md border-solid border-black hover:border-blue-600"
                  />
                </div>
                <div className="text-neutral-400 text-2xl font-bold whitespace-nowrap mt-8">
                  Ukuran
                </div>
                <div className="text-neutral-400 text-2xl font-medium whitespace-nowrap mt-3">
                  <a href="#" className="hover:text-blue-600">
                    <span>S</span>
                  </a>{" "}
                  -
                  <a href="#" className="hover:text-blue-600">
                    <span> L</span>
                  </a>{" "}
                  -
                  <a href="#" className="hover:text-blue-600">
                    <span> XL</span>
                  </a>{" "}
                  -
                  <a href="#" className="hover:text-blue-600">
                    <span> 2XL</span>
                  </a>{" "}
                  -
                  <a href="#" className="hover:text-blue-600">
                    <span> 3XL</span>
                  </a>
                </div>
                <div className="text-neutral-400 text-2xl font-bold whitespace-nowrap mt-9">
                  Harga
                </div>
                <div className="text-neutral-400 text-2xl font-medium whitespace-nowrap mt-2.5">
                  Rp 80.000 - Rp 150.000
                </div>
              </div>
              <Link to="/vstore/desain">
                <div className="text-white text-sm font-mons font-bold whitespace-nowrap bg-red-700 w-[289px] max-w-full justify-center mt-8 px-[64px] py-4 rounded-xl self-start items-start max-md:px-5">
                  Mulai Desain Sekarang
                </div>{" "}
              </Link>
              <div className="justify-center text-neutral-400 text-justify text-2xl font-medium mt-9 max-md:max-w-full">
                Mau bertanya lebih lanjut silahkan hubungi customer service kami
                melalui WA Chat <br />
                (hari senin - sabtu, jam 10.00 - 20.00 WIB)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex w-[632px] max-w-full justify-between gap-5 mt-11 items-start max-md:flex-wrap max-md:mt-10">
        <a href="https://wa.me/6281348502626">
          <div className="bg-green-500 flex items-stretch gap-2.5 mt-1.5 ml-64 pl-2.5 pr-8 py-1 rounded-md max-md:pr-5">
            <img
              src="../../public/logo/Icon-wa-color.svg"
              className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-sm font-bold self-center grow whitespace-nowrap my-auto">
              Chat Sekarang (WhatsApp)
            </div>
          </div>{" "}
        </a>
      </div>
      <div className="text-black text-center text-2xl font-bold self-center whitespace-nowrap mt-24 max-md:mt-10">
        Panduan Ukuran
      </div>
      <img
        src="../../public/assets/produk/tabel-panduan-ukuran.png"
        className="aspect-[4.68] object-contain object-center w-full overflow-hidden self-center max-w-[1253px] mt-12 max-md:max-w-full max-md:mt-10"
      />
      <div className="text-black text-center text-2xl font-bold self-center whitespace-nowrap mt-24 max-md:max-w-full max-md:mt-10">
        Rekomendasi Produk Custom Lainnya
      </div>
      <div className="self-center w-full max-w-[1301px] mt-16 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch mt-2">
              <img
                src="../../public/assets/produk/tampilan-produk-1.png"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <div className="text-black text-center text-2xl font-bold self-center whitespace-nowrap mt-7">
                Cotton Combed 24s
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch mt-2">
              <img
                src="../../public/assets/produk/tampilan-produk-2.png"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <div className="text-black text-center text-2xl font-bold self-center whitespace-nowrap mt-7">
                Cotton 30s
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch mt-2">
              <img
                src="../../public/assets/produk/tampilan-produk-3.png"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <div className="text-black text-center text-2xl font-bold self-center whitespace-nowrap mt-7">
                Red Hoodie
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch mt-2">
              <img
                src="../../public/assets/produk/tampilan-produk-4.png"
                className="aspect-[0.84] object-contain object-center w-full overflow-hidden"
              />
              <div className="text-black text-center text-2xl font-bold mt-5 pb-5">
                Blue & Orange
                <br />
                Jersey
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClickProduct;
