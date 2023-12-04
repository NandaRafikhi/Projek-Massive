import Navbar from '../Component/Navbar'
import Carousel from '../Component/Carousel'
import JenisProduk from '../Component/JenisProduk/JenisProduk'
import IdeaGroup from '../Component/IdeaCard/IdeaGroup'
import ContohGroup from '../Component/Contoh/ContohGroup'
import ReviewGroup from '../Component/Review/ReviewGroup'
import Footer from '../Component/Footer'

const Beranda = () => {
  return (
    <>
        <Navbar />
        <Carousel />
        <JenisProduk />
        <IdeaGroup />
        <ContohGroup />
        <ReviewGroup/>
        <Footer />
    </>
  )
}

export default Beranda