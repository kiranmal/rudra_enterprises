import Header from '../components/shared/Header'
import Hero from '../components/home/Hero'
import About from '../components/home/AboutSection'
import CatalogDownload from '../components/home/CatalogDownload'
import StatsCounter from '../components/shared/StatsCounter'
import MissionVision from '../components/home/MissionVisionSection'
import WhyChooseUs from '../components/home/WhyChooseUsSection'
import Products from '../components/home/ProductsSection'
import PremiumProducts from '../components/home/PremiumProductsSection'
import Services from '../components/home/ServicesSection'
import Gallery from '../components/home/GallerySection'
import Contact from '../components/home/ContactSection'
import Footer from '../components/shared/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <CatalogDownload />
      <StatsCounter />
      <MissionVision />
      <WhyChooseUs />
      <Products />
      <PremiumProducts />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
