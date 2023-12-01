import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import Carousel2 from "../../Component/Carousel2";


function Tentang(){
    return(
        <>
        <Navbar/>
        <h1 className="flex justify-center text-4xl font-bold mb-20 mt-20">Tentang</h1>
        
 
    <div className="flex">
      <div className="flex-shrink-0">
        
        <img src="../../public/assets/Carousel2/foto2.jpg" alt=" Gambar" className=" w-[530px] h-[461px] ml-20  mb-20 rounded-2xl" />
      </div>
      <div className="ml-4">
        
        <h2 className=" text-3xl font-semibold mb-10 mt-20 text-center">Store kaos polos dan sablon custom</h2>
        <p className="text-black-600 text-2xl">Kami memahami keinginan para pelanggan yang ingin custom sablon satuan ataupun banyak dengan harga terjangkau,<br/> dan kami berusaha untuk mewujudkannya. Kami bekerja keras, merencanakan, mengembangkan, meluncurkan, dan mengembangkan <br/>
        Visual Store untuk menjadi jawaban dan solusi bagi kebutuhan tersebut. 
        Visual Store terus berusaha memberikan yang terbaik dengan berbagai talenta unik dalam pengembangannya.</p>
      </div>
    </div>

        
    <div className="flex bg-soft-gray pb-24 pt-7">
      <div>
        
        <h2 className="text-3xl font-semibold text-center mt-40">Menyediakan produk berkualitas</h2>
        <p className="text-black text-2xl  mt-12  text-right">Visual Store menggunakan bahan yang nyaman, desain yang menarik, dan layanan yang cepat dan ramah.<br/>Visual Store siap mewujudkan ide kreatif Anda dengan custom sablon satuan yang berkualitas dan harga terjangkau.<br/> Visual Store, tempatnya kaos polos dan custom sablon satuan berkualitas.</p>
      </div>
      <div className="ml-4">
        
        <img src="../../public/assets/Carousel2/foto2.jpg" alt="Deskripsi Gambar" className="w-[530px] h-[461px] ml-14  mt-20 mb-10 rounded-2xl " />
      </div>
    </div>
        
    <div className="flex">
      <div className="flex-shrink-0">
        
        <img src="../../public/assets/Carousel2/foto2.jpg" alt=" Gambar" className=" w-[530px] h-[461px] ml-20  mb-20 mt-20 rounded-2xl" />
      </div>
      <div className="ml-4">
        
        <h2 className=" text-3xl font-semibold mt-20  mb-10 text-center">Kenyamanan Berbelanja</h2>
        <p className="text-black text-2xl">Visual Store memiliki pelanggan tetap yang loyal dan selalu kembali untuk berbelanja di Visual Store.
        Mereka menikmati pengalaman berbelanja yang nyaman dan pelayanan yang ramah dari staf toko. 
        Selain itu, Visual Store juga sering mengadakan promo dan diskon menarik bagi pelanggan tetap mereka, sehingga membuat mereka semakin loyal dan senang berbelanja di sana.</p>
      </div>
    </div>
        
        <Carousel2/>
        <Footer/>
        </>
    )
}

export default Tentang;