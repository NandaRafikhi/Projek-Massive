import JenisCard from "./JenisCard"
import Image1 from "../../../public/assets/produk/hodi.png"
import Image2 from "../../../public/assets/produk/kaos1.png"
import Image3 from "../../../public/assets/produk/kaos2.png"
import Image4 from "../../../public/assets/produk/kaos3.png"

export default function JenisGroup() {
    return(
        <section className="bg-white">
        <div className="inline-flex items-center justify-center w-full">
                <hr className=" w-11/12 h-0.5 my-8 bg-stone-gray border-0"/>
                <span className="absolute px-3 font-bold font-inter text-2xl text-black bg-white">Jenis Produk</span>
            
                </div>
                <div className=" justify-center flex">
    
        
        <JenisCard imgSrc={Image1}>
            <h3 className="text-black font-bold mb-2">Hoodie </h3>
            <p className="text-black">
            Hoodie kami memiliki tudung berjajar dengan penutup tali, saku depan kanguru, 
            dan detail tambahan seperti tali yang dijahit ke dalam tudung.
             </p>
             

             
        </JenisCard>

        <JenisCard imgSrc={Image2}>
            <h3 className="text-black font-bold mb-2 ">Hoodie </h3>
            <p className="text-black">
            Hoodie kami memiliki tudung berjajar dengan penutup tali, saku depan kanguru, 
            dan detail tambahan seperti tali yang dijahit ke dalam tudung.
             </p>
             

             
        </JenisCard>

        <JenisCard imgSrc={Image3}>
            <h3 className="text-black font-bold mb-2">Hoodie </h3>
            <p className="text-black">
            Hoodie kami memiliki tudung berjajar dengan penutup tali, saku depan kanguru, 
            dan detail tambahan seperti tali yang dijahit ke dalam tudung.
             </p>
            

             
        </JenisCard>

        <JenisCard imgSrc={Image4}>
            <h3 className="text-black font-bold mb-2">Hoodie </h3>
            <p className="text-black">
            Hoodie kami memiliki tudung berjajar dengan penutup tali, saku depan kanguru, 
            dan detail tambahan seperti tali yang dijahit ke dalam tudung.
             </p>
             

             
        </JenisCard>



        </div>
       </section>
      
       
    )    
}