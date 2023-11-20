import ContohCard from "./ContohCard";
import bgImageContoh1 from "../../../public/assets/contoh/baju1.png"
import bgImageContoh2 from "../../../public/assets/contoh/hoddie 1.png"
import bgImageContoh3 from "../../../public/assets/contoh/image 3.png"
import bgImageContoh4 from "../../../public/assets/contoh/image 4.png"

export default function ContohGroup() {
    return (
        <section className="pb-24 pt-7 mt-5" >
            <div className="inline-flex items-center justify-center w-full">
                <hr className=" w-11/12 h-0.5 my-8 bg-stone-gray border-0"/>
                <span className="absolute px-3 font-bold font-inter text-2xl text-black bg-white">Contoh Produk </span>
            </div>
            <div className="my-9 flex items-center justify-center">
                    <ContohCard imgSrc={bgImageContoh1} />
                    <ContohCard imgSrc={bgImageContoh2} />
                    <ContohCard imgSrc={bgImageContoh3} />
                    <ContohCard imgSrc={bgImageContoh4} />
                </div>

        </section>
    )
}