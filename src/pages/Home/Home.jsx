import { useEffect } from 'react'
import Slider from '../../components/templates/HomePage/Slider/Slider'
import Categories from '../../components/templates/HomePage/Categories/Categories'
import SpecialOffers from '../../components/templates/HomePage/SpecialOffers/SpecialOffers'
import AboutUs from '../../components/templates/HomePage/AboutUs/AboutUs'
import LatestProducts from '../../components/templates/HomePage/LatestProducts/LatestProducts'
import Banners from '../../components/templates/HomePage/Banners/Banners'
import Articles from '../../components/templates/HomePage/Articles/Articles'
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/Footer/Footer'



export default function Home() {

  // Automatically scrolls to top whenever page reload
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <>
      <Header />
      <main className='p-0'>
        <Slider />
        <Categories />
        <SpecialOffers />
        <AboutUs />
        <LatestProducts />
        <Banners />
        <Articles />
      </main>

      <Footer />
    </>
  )
}
