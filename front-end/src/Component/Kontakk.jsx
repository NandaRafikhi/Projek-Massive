


const Kontak = () => {
    return (
      <>
          <nav className="bg-milk-white ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a className="" href=""><img src="../../public/logo/logo.svg" alt="logo" width={150} className="pr-10"/> </a>
              <div>
                <ul className="flex items-center space-x-5" >
                  <li>
                    <a className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" href="/">Beranda</a>
                  </li>
                  <li>
                    <a className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" href="/">Produk</a>
                  </li>
                  <li>
                    <a className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" href="/">Tentang</a>
                  </li>
                  <li>
                    <a className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" href="/">Kontak</a>
                  </li>
  
                  <li>
                    <span className="ml-52 font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl"><a href="/">Masuk</a></span>
                  </li>
  
                  <li>
                    <a className="font-mons text-lg font-medium text-white bg-red-600 rounded px-4 py-0.5 hover:bg-red-800 hover:text-milk-white hover:shadow-xl" href="/">Daftar</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      <section className="container mx-auto md:px-5 md:py-20">
          <div className="bg-white  justify-normal  text-black md:rounded-2xl flex ">
              <div className="flex flex-col md:flex-row gap-10 md:gap-32"> 
                  <div>
                      <div>
                          <div className="flex items-center gap-3 mb-20">
                              <h5 className="font-bold  text-3xl ">Hubungi Kami</h5>
                          </div>
                          
                      </div>
                      <div className="my-3">
                          <div className="flex items-center  mb-2  ">
                          <a className="" href=""><img src="../../public/assets/icon/WhatsappLogo.png" alt="icon" className="pr-10 width=150"/> </a> 
                              <p className=" text-xl">+62 - 887983142</p>
                              
                          </div>
                          <div className="my-3">
                              <div className="flex items-center  mb-2">
                                  <a className="" href=""><img src="../../public/assets/icon/Phone.png" alt="icon" className="pr-10 width=150"/> </a>
                                  
                                  <div className="text-black">
                                      <p className=" text-xl">+62 - 887983142</p>
                                  </div>
                              </div>
                              <div className="flex items-center  mb-2">
                              <a className="" href=""><img src="../../public/assets/icon/email.png" alt="icon" className="pr-10 width=150"/> </a>
                                  <p className=" text-xl">Visualstore@gmail.com</p>
                              </div>
                          </div>
                      </div>
                      <div>
                         
                          <div className="my-3">
                          <div className="flex items-center  mb-2">
                              <a className="" href=""><img src="../../public/assets/icon/ig.png" alt="icon" className="pr-10 width=150"/> </a>
                                  <div className="text-black">
                                      <p className=" text-xl">@Visual.Store</p>
                                  </div>
                              </div>
                              <div className="flex items-center  mb-2">
                              <a className="" href=""><img src="../../public/assets/icon/lokasi.png" alt="icon" className="pr-10 width=150"/> </a>
                                <p className=" text-xl">Jl.Wira Asri (Jl.Dewi Sartika), Rantauprapat, Sumatera Utara, Indonesia 21418</p>
                              </div>
                              
                              <div className="flex flex-row mt-4">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1466397655918!2d99.83971307441185!3d2.0968992978843533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302da1c77407d83b%3A0xd6f14efce2699d1!2sVisual%20Store%20Rantauprapat%20Sablon%20kaos!5e0!3m2!1sid!2sid!4v1701438191279!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        <div className="flex justify-center mt-3">
                                            <div className="flex gap-3">
                                              <p className="font-semibold">Lokasi kantor angsah</p>
                                          </div> 
                                            </div> 
                                              </div>
                                            
  
  
  
  {/* footer */}
  return 
      <footer className=" bg-black-abyss">
        <div className=" mx-16 w-full max-w-screen-xl p-3 py-16">
          {/* 3col & grid */}
          <div className="grid grid-cols-3 gap-40">
            {/* logos */}
            <div>
              <div className="mb-6">
                <img src="../../public/logo/logo.svg" className="h-auto w-[265px] rounded-lg" />
                <span className="mt-1 justify-center text-base font-inter text-white ">©Hyperion 2023. All right reserved</span>
              </div>
            </div>
            {/* contain 1 */}
            <div>
              <div className="flex items-center">
                <img src="../../public/assets/foot/MapPin.svg" className=" h-11 w-11 bg-black-ash rounded-full p-1" />
                <div className="flex flex-col ml-4">
                  <h1 className=" text-slate-300 font-inter text-base">Indonesia</h1>
                  <p className=" text-white font-inter text-base">Sumatera Utara, Medan</p>
                </div>
              </div>
              {/* ------- */}
              <div className="my-4">
                <div className="flex items-center">
                  <img src="../../public/assets/foot/Phone.svg" className=" h-11 w-11 bg-black-ash rounded-full p-1" />
                  <div className="flex flex-col ml-4">
                    <p className=" text-white font-inter text-base">+628123456789012</p>
                  </div>
                </div>
              </div>
              {/* --------- */}
              <div className="my-4">
                <div className="flex items-center">
                  <img src="../../public/assets/foot/Envelope.svg" className=" h-11 w-11 bg-black-ash rounded-full p-1" />
                  <div className="flex flex-col ml-4">
                    <p className=" text-white font-inter text-base">Visualstore@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            {/* contain 2 */}
            <div>
              <div className="flex flex-col ">
                <h1 className="text-white font-inter text-2xl">Tentang</h1>
                <p className="text-slate-300 font-inter text-lg">Website ini dapat menjadi sumber informasi dan layanan yang sangat berharga bagi masyarakat untuk mendesain & melihat produk Visual Store</p>
                <div className="flex flex-row mt-4">
                  <a href="https://www.tiktok.com/@visualstorerantauprapat" className="mr-3">
                    <img src="../../public/assets/foot/TiktokLogo.svg" className="h-11 w-11 bg-black-ash rounded-full p-1" />
                  </a>
                  <a href="https://www.youtube.com/@visualwarnet" className="mx-3">
                    <img src="../../public/assets/foot/YoutubeLogo.svg" className="h-11 w-11 bg-black-ash rounded-full p-1" />
                  </a>
                  <a href="https://www.facebook.com/visualstore.Rp/?locale=id_ID" className="mx-3">
                    <img src="../../public/assets/foot/Facebook.svg" className="h-11 w-11 bg-black-ash rounded-full p-1" />
                  </a>
                  <a href="https://www.instagram.com/visualstorerantauprapat/" className="ml-3">
                    <img src="../../public/assets/foot/InstagramLogo.svg" className="h-11 w-11 bg-black-ash rounded-full p-1" />
                  </a>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </footer>
  
                          </div>
                      </div>
                  </div>
                                
              </div>
          </div>
      </section>
      
    
      
      </>
    )
   
  }
  export default Kontak
  
      
  