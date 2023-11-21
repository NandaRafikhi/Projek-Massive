import IdeaCard from "./IdeaCard"
import bgImageIdea1 from "../../../public/assets/idea/Spongebobs.png"
import bgImageIdea2 from "../../../public/assets/idea/Marvel.png"
import bgImageIdea3 from "../../../public/assets/idea/Spidermans.png"
import bgImageIdea4 from "../../../public/assets/idea/MU.png"
import bgImageIdea5 from "../../../public/assets/idea/gengar.png"
import bgImageIdea6 from "../../../public/assets/idea/jet-valo.png"
import bgImageIdea7 from "../../../public/assets/idea/sasuke.png"
import bgImageIdea8 from "../../../public/assets/idea/pubg.png"

export default function IdeaGroup() {
    return (
        <section className="bg-soft-gray pb-24 pt-7">
            <div className="inline-flex items-center justify-center w-full">
                <hr className=" w-11/12 h-0.5 my-8 bg-stone-gray border-0"/>
                <span className="absolute px-3 font-bold font-inter text-2xl text-black bg-soft-gray">Ide Gambar</span>
            </div>
            <div className="IdeaGroup">
                <div className="my-9 flex items-center justify-center">
                    <IdeaCard imgSrc={bgImageIdea1} />
                    <IdeaCard imgSrc={bgImageIdea2} />
                    <IdeaCard imgSrc={bgImageIdea3} />
                    <IdeaCard imgSrc={bgImageIdea4} />
                </div>
                <div className="my-9 flex items-center justify-center">
                    <IdeaCard imgSrc={bgImageIdea5} />
                    <IdeaCard imgSrc={bgImageIdea6} />
                    <IdeaCard imgSrc={bgImageIdea7} />
                    <IdeaCard imgSrc={bgImageIdea8} />
                </div>
            </div>
        </section>
    )
}
