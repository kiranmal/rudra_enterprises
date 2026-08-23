import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CompanyProfile from './pages/CompanyProfile.jsx'
import MissionVision from './pages/MissionVision.jsx'
import WhyChooseUs from './pages/WhyChooseUs.jsx'
import Printers from './pages/Printers.jsx'
import Maintenance from './pages/Maintenance.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import RequestQuote from './pages/RequestQuote.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company-profile" element={<CompanyProfile />} />
      <Route path="/mission-vision" element={<MissionVision />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/printers" element={<Printers />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-quote" element={<RequestQuote />} />
    </Routes>
  )
}
