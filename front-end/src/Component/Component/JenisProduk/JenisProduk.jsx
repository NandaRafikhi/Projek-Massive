import JenisCard from "./JenisCard"
import Image1 from "../../../public/assets/produk/hodi.png"
import Image2 from "../../../public/assets/produk/kaos1.png"
import Image3 from "../../../public/assets/produk/kaos2.png"
import Image4 from "../../../public/assets/produk/kaos3.png"

export default function JenisGroup() {
    return(
       <main className=" my-9 flex items-center justify-center">
        
    
        
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




       </main>
      
       
    )    
}