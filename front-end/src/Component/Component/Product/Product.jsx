import React from "react";
import CardProduct from "./CardProduct";
import { Link } from "react-router-dom";
// Image T - Shirts
import Image1 from "../../../public/assets/produk/t-shirt1.png";
import Image2 from "../../../public/assets/produk/t-shirt2.png";
import Image3 from "../../../public/assets/produk/t-shirt3.png";
import Image4 from "../../../public/assets/produk/t-shirt4.png";

// Image Hoodie
import Image5 from "../../../public/assets/produk/hodi.png";
import Image6 from "../../../public/assets/produk/hodi2.png";
import Image7 from "../../../public/assets/produk/hodi3.png";
import Image8 from "../../../public/assets/produk/hodi4.png";

// Image Polo
import Image9 from "../../../public/assets/produk/polo1.png";
import Image10 from "../../../public/assets/produk/polo2.png";
import Image11 from "../../../public/assets/produk/polo3.png";
import Image12 from "../../../public/assets/produk/polo4.png";

// Image Jersey
import Image13 from "../../../public/assets/produk/jersey.png";
import Image14 from "../../../public/assets/produk/jersey1.png";
import Image15 from "../../../public/assets/produk/jersey2.png";
import Image16 from "../../../public/assets/produk/jersey3.png";

function Product() {
  return (
    <>
      {/* T - Shirts Section */}
      <section className="bg-white pb-10">
        <div className="inline-flex items-center justify-center w-full">
          <hr className=" w-11/12 h-1 my-8 bg-stone-gray border-0" />
          <span className="absolute px-10 font-bold font-inter text-2xl text-black bg-white">
            T - Shirts
          </span>
        </div>

        <div className=" justify-center flex">
          <CardProduct imgSrc={Image1}>
          <Link to="">
            <h3 className="text-black font-mons font-bold mb-2 text-xl">
              <center>
                Cotton combed 24s <br /> (Lengan Pendek){" "}
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
              Kaos dengan bahan sedikit lebih tebal sehingga terasa nyaman dan
              sejuk.
            </p>
            <div className="space-x-4 mt-2"></div>
            </Link> 
          </CardProduct>
          
          <CardProduct imgSrc={Image2}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
                Cotton combed 24s <br />
                (Lengan Panjang)
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
              Kaus dengan bahan yang lembut, halus dan mudah menyerap keringat.
            </p>
            <div className="space-x-4 mt-2"></div>
          </Link>
          </CardProduct>

          <CardProduct imgSrc={Image3}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
                Cotton Combed 30s <br /> (Lengan Pendek)
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
              Kaus yang lebih tipis dengan daya serap, keawetan, dan daya tahan
              baik.
            </p>
            <div className="space-x-4 mt-8"></div>
          </Link>
          </CardProduct>

          <CardProduct imgSrc={Image4}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
                Cotton Combed 30s <br /> (Lengan Panjang)
              </center>
            </h3>
            <p className="text-black font-pop pt-3 ">
              Jenis kaus kombinasi klasik dari kemeja oxford berkancing dengan
              kaus yang jauh lebih kasual.
            </p>
            <div className="space-x-4 mt-8"></div>
          </Link>
          </CardProduct>
        </div>
      </section>

      {/* Hoodie Section */}
      <section className="bg-[#ECDDCB] pb-10">
        <div className="inline-flex items-center justify-center w-full">
        <hr className=" w-11/12 h-1 my-8 bg-stone-gray border-0" />
          <span className="absolute px-10 font-bold font-inter text-2xl text-black bg-[#ECDDCB]">
            Hoodie
          </span>
        </div>

        <div className=" justify-center flex ">
          <CardProduct imgSrc={Image5}>
        <Link to="">
            <h3 className="text-black font-mons font-bold mb-2 text-xl">
              <center>
                Hoodie Black
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Hoodie dengan warna hitam membuat lebih fleksibel untuk dipadukan dengan berbagai warna.
            </p>
            <div className="space-x-4 mt-2"></div>
          </Link>
          </CardProduct>

          <CardProduct imgSrc={Image6}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
               Hoodie Red
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Hoodie dengan warna merah memberikan tampilan orang yang memakainya terlihat lebih eye catching.
            </p>
            <div className="space-x-4 mt-2"></div>
            </Link>
          </CardProduct>

          <CardProduct imgSrc={Image7}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
               Hoodie Green
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Warna hijau yang cerah pada hoodie ini dapat meningkatkan mood dan memberikan kesan yang menyenangkan.
            </p>
            <div className="space-x-4 mt-8"></div>
            </Link>
          </CardProduct>

          <CardProduct imgSrc={Image8}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
                Hoodie Blue
              </center>
            </h3>
            <p className="text-black font-pop pt-3 ">
            Warna biru pada hoodie mampu membuat kulit  terlihat lebih cerah, bahkan bisa memancarkan pesona dan aura kamu.
            </p>
            <div className="space-x-4 mt-8"></div>
            </Link>
          </CardProduct>
        </div>
      </section>


      {/* Polo Section */}
      <section className="bg-white pb-10">
        <div className="inline-flex items-center justify-center w-full">
        <hr className=" w-11/12 h-1 my-8 bg-stone-gray border-0" />
          <span className="absolute px-10 font-bold font-inter text-2xl text-black bg-white">
            Polo
          </span>
        </div>

        <div className=" justify-center flex ">
          <CardProduct imgSrc={Image9}>
          <Link to="">
            <h3 className="text-black font-mons font-bold mb-2 text-xl">
              <center>
                Polo White
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Kaus polo putih menjadi andalan karena memberikan kesan rapi dan mudah dipadukan dengan bawahan apa saja.
            </p>
            <div className="space-x-4 mt-2"></div>
            </Link>
          </CardProduct>

          <CardProduct imgSrc={Image10}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
               Polo Black
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Warna hitam pada kaus polo membuat tampilan Anda menjadi macho dan trendy.
            </p>
            <div className="space-x-4 mt-2"></div>
            </Link>
          </CardProduct>

          <CardProduct imgSrc={Image11}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
               Polo Red
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Warna merah pada kaus polo dapat menonjolkan kesan fierce dan berani. 
            </p>
            <div className="space-x-4 mt-8"></div>
            </Link>
          </CardProduct>

          <CardProduct imgSrc={Image12}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
                Polo Blue
              </center>
            </h3>
            <p className="text-black font-pop pt-3 ">
            Kaus polo biru memberikan kesan tenang, gembira, dan percaya diri.
            </p>
            <div className="space-x-4 mt-8"></div>
            </Link>
          </CardProduct>
        </div>
      </section>

      {/* Jersey Section */}
      <section className="bg-[#ECDDCB] pb-10">
        <div className="inline-flex items-center justify-center w-full">
        <hr className=" w-11/12 h-1 my-8 bg-stone-gray border-0" />
          <span className="absolute px-10 font-bold font-inter text-2xl text-black bg-[#ECDDCB]">
            Jersey
          </span>
        </div>

        <div className=" justify-center flex ">
          <CardProduct imgSrc={Image13}>
          <Link to="">
            <h3 className="text-black font-mons font-bold mb-2 text-xl">
              <center>
              Black & Yellow <br/> Jersey
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Jersey e-sport dibuat dari bahan kain yang berpori dan memiliki sirkulasi udara yang baik. 
            </p>
            <div className="space-x-4 mt-2"></div>
            </Link>
          </CardProduct>

          <CardProduct imgSrc={Image14}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
              Blue & White <br/>Jersey
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Jersey e-Sports ini memiliki desain baju yang unik dan keren.
            </p>
            <div className="space-x-4 mt-2"></div>
            </Link>
          </CardProduct>

          <CardProduct imgSrc={Image15}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
              Blue & Orange <br/> Jersey
              </center>
            </h3>
            <p className="text-black font-pop pt-3">
            Jersey ini dengan desain warna yang modern dan keren.  
            </p>
            <div className="space-x-4 mt-8"></div>
            </Link>
          </CardProduct>

          <CardProduct imgSrc={Image16}>
          <Link to="">
            <h3 className="text-black font-bold font-mons mb-2 text-xl">
              <center>
              Lime Green <br/> Jersey
              </center>
            </h3>
            <p className="text-black font-pop pt-3 ">
            Jersey  berikut memiliki bahan yang berkualitas, awet dan tahan lama.
            </p>
            <div className="space-x-4 mt-8"></div>
            </Link>
          </CardProduct>
        </div>
      </section>
    </>
  );
}

export default Product;
