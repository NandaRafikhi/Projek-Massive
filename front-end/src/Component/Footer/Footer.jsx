const Footer = () => {
  return (
    <footer className=" bg-black-abyss">
      <div className=" mx-16 w-full max-w-screen-xl p-3 py-16">
        {/* 3col & grid */}
        <div className="grid grid-cols-3 gap-40">
          {/* logos */}
          <div>
            <div className="mb-6">
              <img
                src="../../public/logo/logo.svg"
                className="h-auto w-[265px] rounded-lg"
              />
              <span className="mt-1 justify-center text-base font-inter text-white ">
                ©Hyperion 2023. All right reserved
              </span>
            </div>
          </div>
          {/* contain 1 */}
          <div>
            <div className="flex items-center">
              <img
                src="../../public/assets/foot/MapPin.svg"
                className=" h-11 w-11 bg-black-ash rounded-full p-1"
              />
              <div className="flex flex-col ml-4">
                <h1 className=" text-slate-300 font-inter text-base">
                  Indonesia
                </h1>
                <p className=" text-white font-inter text-base">
                  Sumatera Utara, Medan
                </p>
              </div>
            </div>
            {/* ------- */}
            <div className="my-4">
              <div className="flex items-center">
                <img
                  src="../../public/assets/foot/Phone.svg"
                  className=" h-11 w-11 bg-black-ash rounded-full p-1"
                />
                <div className="flex flex-col ml-4">
                  <p className=" text-white font-inter text-base">
                    +628123456789012
                  </p>
                </div>
              </div>
            </div>
            {/* --------- */}
            <div className="my-4">
              <div className="flex items-center">
                <img
                  src="../../public/assets/foot/Envelope.svg"
                  className=" h-11 w-11 bg-black-ash rounded-full p-1"
                />
                <div className="flex flex-col ml-4">
                  <p className=" text-white font-inter text-base">
                    Visualstore@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* contain 2 */}
          <div>
            <div className="flex flex-col ">
              <h1 className="text-white font-inter text-2xl">Tentang</h1>
              <p className="text-slate-300 font-inter text-lg">
                Website ini dapat menjadi sumber informasi dan layanan yang
                sangat berharga bagi masyarakat untuk mendesain & melihat produk
                Visual Store
              </p>
              <div className="flex flex-row mt-4">
                <a
                  href="https://www.tiktok.com/@visualstorerantauprapat"
                  className="mr-3"
                >
                  <img
                    src="../../public/assets/foot/TiktokLogo.svg"
                    className="h-11 w-11 bg-black-ash rounded-full p-1"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@visualwarnet"
                  className="mx-3"
                >
                  <img
                    src="../../public/assets/foot/YoutubeLogo.svg"
                    className="h-11 w-11 bg-black-ash rounded-full p-1"
                  />
                </a>
                <a
                  href="https://www.facebook.com/visualstore.Rp/?locale=id_ID"
                  className="mx-3"
                >
                  <img
                    src="../../public/assets/foot/Facebook.svg"
                    className="h-11 w-11 bg-black-ash rounded-full p-1"
                  />
                </a>
                <a
                  href="https://www.instagram.com/visualstorerantauprapat/"
                  className="ml-3"
                >
                  <img
                    src="../../public/assets/foot/InstagramLogo.svg"
                    className="h-11 w-11 bg-black-ash rounded-full p-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
