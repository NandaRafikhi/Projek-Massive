import JenisCard from "./JenisCard"
import Image1 from "../../../public/assets/produk/hodi.png"
import Image2 from "../../../public/assets/produk/kaos1.png"
import Image3 from "../../../public/assets/produk/jersey.png"
import Image4 from "../../../public/assets/produk/kaos3.png"

export default function JenisGroup() {
    return(
        <section className="bg-white pb-10">
        <div className="inline-flex items-center justify-center w-full">
                <hr className=" w-11/12 h-0.5 my-8 bg-stone-gray border-0"/>
                <span className="absolute px-3 font-bold font-inter text-2xl text-black bg-white">Jenis Produk</span>
            
                </div>
        
                <div className=" justify-center flex ">
        
        <JenisCard imgSrc={Image1}>
            <h3 className="text-black font-bold mb-2 text-base"><center>HOODIE</center></h3>
            <p className="text-black  ">
            Hoodie kami memiliki tudung berjajar dengan penutup tali, saku depan kanguru, 
            dan detail tambahan seperti tali yang dijahit ke dalam tudung.
             </p>
             <div className="space-x-4 mt-2"></div>

             
        </JenisCard>

        <JenisCard imgSrc={Image2}>
            <h3 className="text-black font-bold mb-2  text-base"><center>T-SIRT</center></h3>
            <p className="text-black  ">
            Kaus terbuat dari 100% katun.Kami telah menjahit keliman bagian bawah dan lengan dengan jarum ganda untuk daya tahan ekstra.
             </p>
             <div className="space-x-4 mt-2"></div>

             
        </JenisCard>

        <JenisCard imgSrc={Image3}>
            <h3 className="text-black font-bold mb-2  text-base"><center>JERSEY</center></h3>
            <p className="text-black ">
            Jersey dengan desain yang eksklusif, setiap detailnya memberikan sentuhan keunikan yang tak terlupakan.
             </p>
             <div className="space-x-4 mt-8"></div>

             
        </JenisCard>

        <JenisCard imgSrc={Image4}>
            <h3 className="text-black font-bold mb-2  text-base   "><center>POLO</center> </h3>
            <p className="text-black  ">
            Jenis kaus kombinasi klasik dari kemeja oxford berkancing dengan kaus yang jauh lebih kasual.
             </p>
             <div className="space-x-4 mt-8"></div>

             
        </JenisCard>
       </div>
       </section>
    )    
}