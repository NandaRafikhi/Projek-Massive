import IdeaGroup from '../Component/IdeaCard/IdeaGroup'
import Navbar from '../Component/Navbar'
import ContohGroup from '../Component/Contoh/ContohGroup'
import ReviewGroup from '../Component/Review/ReviewGroup'

const Beranda = () => {
  return (
    <>
        <Navbar />
        <IdeaGroup />
        <ContohGroup />
        <ReviewGroup/>
    </>
  )
}

export default Beranda