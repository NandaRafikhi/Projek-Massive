import Navbar from '../Component/Navbar'
import Carousel from '../Component/Carousel'
import JenisProduk from '../Component/JenisProduk/JenisProduk'
import IdeaGroup from '../Component/IdeaCard/IdeaGroup'
import ContohGroup from '../Component/Contoh/ContohGroup'
import Footer from '../Component/Footer'

const Beranda = () => {
  return (
    <>
        <Navbar />
        <Carousel />
        <JenisProduk />
        <IdeaGroup />
        <ContohGroup />
        <Footer />
    </>
  )
}

export default Beranda