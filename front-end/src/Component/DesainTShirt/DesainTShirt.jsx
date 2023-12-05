import FrTShirt from '../../../public/assets/desain/fr-tshirt.png'
import BkTShirt from '../../../public/assets/desain/bk-tshirt.png'
import FrWhiteTShirt from '../../../public/assets/desain/fr-wh-shirt.png'
import FrYellowTShirt from '../../../public/assets/desain/fr-yl-shirt.png'
import FrRedTShirt from '../../../public/assets/desain/fr-rd-shirt.png'
import { TShirt, Image, Scroll, FileArrowUp, TextT, WhatsappLogo } from "@phosphor-icons/react";
import { Tab } from '@headlessui/react'


const DesainTShirt = () => (
  
  <>
    <div className=' min-h-screen container mt-20 mx-auto'>
      <div className=' flex'>
      {/* menu */}
        <div className='flex w-24 items-end'>
          <div className=" grid grid-cols-1 text-gray-400 font-mons text-sm gap-3 justify-items-center">
            <button className=" grid justify-items-center">
              <span className=" material-symbols-rounded w-8">sell</span>
              <p>Watermark</p>
            </button>
            <button className=" grid justify-items-center">
              <span className=" material-symbols-rounded w-8">zoom_in</span>
              <p>Zoom In</p>
            </button>
            <button className=" grid justify-items-center">
              <span className=" material-symbols-rounded w-8">zoom_out</span>
              <p>Zoom Out</p>
            </button>
            <button className=" grid justify-items-center">
              <span className=" material-symbols-rounded w-8">apparel</span>
              <p>Template</p>
            </button>
            <button className=" grid justify-items-center">
              <span className=" material-symbols-rounded w-8">share_reviews</span>
              <p>Share</p>
            </button>
            <button className=" grid justify-items-center">
              <span className=" material-symbols-rounded w-8">sim_card_download</span>
              <p>Download</p>
            </button>
          </div>
        </div>
        {/* shirt */}
        <div>
          <div>
            <img src={FrTShirt} alt="" id='fr-tshirt' className='shadow-md rounded-2xl bg-slate-100 w-[467px] h-[594px]' />
            <img src={FrWhiteTShirt} id='fr-wh-shirt' alt="" className='shadow-md rounded-2xl bg-slate-100 w-[467px] h-[594px]' style={{display:'none'}} />
            <img src={FrRedTShirt} id='fr-rd-shirt' alt="" className='shadow-md rounded-2xl bg-slate-100 w-[467px] h-[594px]' style={{display:'none'}} />
            <img src={FrYellowTShirt} id='fr-yl-shirt' alt="" className='shadow-md rounded-2xl bg-slate-100 w-[467px] h-[594px]' style={{display:'none'}} />
          </div>
        </div>
        {/* Container */}
        <div className='mx-auto'>
          <Tab.Group>
            <div className='flex flex-row-reverse items-start'>
              <Tab.List className="flex flex-col justify-center">
                <Tab className="flex h-32 w-20 border border-black rounded-t-xl justify-center items-center"><TShirt size="32px" /></Tab>
                <Tab className="flex h-32 w-20 border-l border-r border-l-black border-r-black justify-center items-center"><Image size="32px" /></Tab>
                <Tab className="flex h-32 w-20 border border-black rounded-b-xl justify-center items-center"><Scroll size="32px" /></Tab>
              </Tab.List>
              <Tab.Panels className=" mr-1 w-[453px] h-[594px] border border-black rounded-xl p-6">
                <Tab.Panel>
                  <h1 className=' font-mons text-lg font-semibold'>Kaos H&M</h1>
                  <span className='font-mons text-sm font-medium text-gray-400'>By Visual Store</span>
                  <div className=' mt-8 mb-5 flex space-x-2'>
                    <button onClick={{}} className="border bg-black flex w-5 h-5 border-solid border-black hover:border-blue-600"></button>
                    <button onClick={{}} className="border bg-white flex w-5 h-5 border-solid border-black hover:border-blue-600"></button>
                    <button onClick={{}} className="border bg-[#C5271A] flex w-5 h-5 border-solid border-black hover:border-blue-600"></button>
                    <button onClick={{}} className="border bg-[#E9C243] flex w-5 h-5 border-solid border-black hover:border-blue-600"></button>
                  </div>
                  <button className='mb-8 p-2 bg-black-abyss text-white font-mons font-medium text-xs hover:bg-black-ash'>Change Product</button>
                  <h2 className=' font-mons font-bold text-sm text-gray-400'>Sizes</h2>
                  <div className=' flex space-x-1 font-mons font-medium text-sm text-gray-400'>
                    <button className=' hover:text-gray-300'>S</button>
                    <span>-</span>
                    <button className=' hover:text-gray-300'>M</button>
                    <span>-</span>
                    <button className=' hover:text-gray-300'>L</button>
                    <span>-</span>
                    <button className=' hover:text-gray-300'>XL</button>
                    <span>-</span>
                    <button className=' hover:text-gray-300'>2XL</button>
                    <span>-</span>
                    <button className=' hover:text-gray-300'>3XL</button>
                    <span>-</span>
                    <button className=' hover:text-gray-300'>4XL</button>
                  </div>
                  <h2 className=' mt-6 font-mons font-bold text-sm text-gray-400'>Bahan</h2>
                  <div className='font-mons font-medium text-sm text-gray-400 ml-4'>
                    <ul className=' list-disc'>
                      <li>Mantap kali kalo dipakek lah</li>
                      <li>Sekali pakai langsung tidur karena kenyamananya</li>
                      <li>Bahan anti slip</li>
                    </ul>
                  </div>
                  <h2 className=' mt-6 font-mons font-bold text-sm text-gray-400'>Stok</h2>
                  <span className='font-mons font-medium text-sm text-gray-400'>13</span>
                </Tab.Panel>
                <Tab.Panel>
                  <h1 className=' font-mons text-base font-semibold'>Tambahkan Gambar & Teks ke Desain Anda</h1>
                  <span className='font-mons text-sm font-medium text-gray-400'>Kreasikan desain anda dengan gambar atau teks yang sesuai dengan kebutuhan</span>
                  <div className='flex items-center mt-3 space-x-1 mb-2'>
                    <FileArrowUp size="32px" />
                    <div>
                      <h3 className='font-mons text-sm font-bold text-black'>Upload Image</h3>
                      <p className='font-mons text-sm font-medium text-gray-400'>Upload gambar yang anda miliki</p>
                    </div>
                  </div>
                  <div className='w-full flex justify-center'>
                    <div className="flex items-center justify-center w-72 h-36 bg-slate-200">
                      <label className="flex flex-col w-full h-full group text-center">
                        <div className="h-full w-full text-center flex flex-col items-center justify-center ">
                          <span className="material-symbols-rounded text-gray-400">image</span>
                        </div>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>

                  <div className='flex items-center mt-3 space-x-1 mb-2'>
                    <TextT size="32px" />
                    <div>
                      <h3 className='font-mons text-sm font-bold text-black'>Masukkan teks Anda di bawah ini</h3>
                    </div>
                  </div>
                  <div className='w-full flex justify-center'>
                    <div className=" w-72 h-36 bg-milk-white border border-black">
                      <input type='text'  className="flex w-full h-full " />
                    </div>
                  </div>
                  <div className='w-full flex justify-center'>
                    <div className='w-72'>
                      <div className='flex justify-start'>
                        <button className='mt-2 p-2 bg-black-abyss text-white font-mons font-medium rounded-md text-xs hover:bg-black-ash'>
                          Add Text
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <h1 className=' font-mons text-lg font-semibold'>Layanan Pemesanan</h1>
                  <h2 className=' mt-6 font-mons font-bold text-sm text-gray-400'>Panduan</h2>
                  <div className='font-mons font-medium text-sm text-gray-400 ml-4 text-justify'>
                    <ul className=' list-disc'>
                      <li>Pertama, pelanggan dapat melihat produk yang tersedia dan dijual oleh Visual Store.</li>
                      <li>Kedua, pelanggan menentukan & memilih produk yang dibutuhkan. </li>
                      <li>Ketiga, pelanggan dapat memesan produk polos dan juga memesan produk yang didesain secara mandiri maupun pihak Visual Store.</li>
                      <li>Keempat, mau bertanya lebih lanjut, minta bantuan jasa desain, atau pesan jumlah banyak. Silahkan hubungi WhatsApp dibawah ini !</li>
                      <li>Kelima, jika pelanggan ingin order produk dapat melakukan pesan sekarang melalui chat sekarang (WhatsApp) yang ada dibawah. *Tidak dapat melakukan order melalui Website. </li>
                    </ul>
                  </div>
                  <p className=' mt-16 font-mons font-medium text-sm text-gray-400 text-justify'>Silahkan hubungi customer service kami melalui WA chat (Senin - Jumat, Jam 10.00 - 20.00 WIB)</p>
                  <h2 className=' mt-4 font-mons font-bold text-sm text-gray-400'>Pesan Sekarang</h2>
                  <a href="https://wa.me/6281348502626" className=' rounded-md'>
                    <button className=' flex justify-center items-center py-2 px-4 bg-[#4BAB66] rounded-md'>
                      <WhatsappLogo size="32px" color='#ffffff' />
                      <p className=' font-mons font-bold text-sm text-white'>Chat Sekarang (WhatsApp)</p>
                    </button>
                  </a>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
      <div className='flex mb-16'>
        <div className='flex w-24 items-end'>
          {/* sengaja kosong */}
        </div>
        <div className=' flex justify-center w-[467px]'>
          <div className='flex justify-center space-x-4 mt-4'>
            <button>
              <img src={FrTShirt} alt="" className='shadow-md rounded-2xl bg-slate-100 w-[93.56px] h-[119px]'/>
            </button>
            <button>
              <img src={BkTShirt} alt="" className='shadow-md rounded-2xl bg-slate-100 w-[93.56px] h-[119px]'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default DesainTShirt