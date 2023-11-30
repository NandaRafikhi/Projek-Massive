import React from "react";

function About() {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="text-black text-center text-3xl font-mons font-bold mt-10 max-md:mt-10">
        Tentang
      </div>
      <div className="w-full max-w-[1314px] mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
            <img
              src="../../public/assets/tentang/about1.png"
              className="aspect-[1.15] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-center mt-14 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-black text-center text-3xl font-mons font-bold max-w-[570px] max-md:max-w-full">
                Store kaos polos dan sablon custom
              </div>
              <div className="justify-center text-black text-justify text-xl font-mons font-medium self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                Kami memahami keinginan para pelanggan yang ingin custom sablon
                satuan ataupun banyak dengan harga terjangkau, dan kami berusaha
                untuk mewujudkannya. Kami bekerja keras, merencanakan,
                mengembangkan, meluncurkan, dan mengembangkan Visual Store untuk
                menjadi jawaban dan solusi bagi kebutuhan tersebut. Visual Store
                terus berusaha memberikan yang terbaik dengan berbagai talenta
                unik dalam pengembangannya.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ECDDCB] self-stretch w-full mt-24 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-center my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-black text-center text-3xl font-mons font-bold max-w-[560px] max-md:max-w-full">
                Menyediakan produk berkualitas
              </div>
              <div className="justify-center text-black text-justify text-xl font-mons font-medium self-stretch mt-10 max-md:max-w-full">
                Visual Store menggunakan bahan yang nyaman, desain yang menarik,
                dan layanan yang cepat dan ramah. Visual Store siap mewujudkan
                ide kreatif Anda dengan custom sablon satuan yang berkualitas
                dan harga terjangkau. Visual Store, tempatnya kaos polos dan
                custom sablon satuan berkualitas.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="../../public/assets/tentang/about2.png"
              className="aspect-[1.15] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1312px] mt-24 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
            <img
              src="../../public/assets/tentang/about3.png"
              className="aspect-[1.15] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-center my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-black text-center text-3xl font-mons font-bold max-w-[400px]">
                Kenyamanan Berbelanja
              </div>
              <div className="justify-center text-black text-justify text-xl font-mons font-medium self-stretch mt-5 max-md:max-w-full">
                Visual Store memiliki pelanggan tetap yang loyal dan selalu
                kembali untuk berbelanja di Visual Store. Mereka menikmati
                pengalaman berbelanja yang nyaman dan pelayanan yang ramah dari
                staf toko. Selain itu, Visual Store juga sering mengadakan promo
                dan diskon menarik bagi pelanggan tetap mereka, sehingga membuat
                mereka semakin loyal dan senang berbelanja di sana.
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default About;
