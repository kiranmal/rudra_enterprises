import image_1 from '../assets/image_1.jpeg'
import logo from '../assets/logo.jpeg'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo7 from '../assets/photo7.png'
import printer2 from '../assets/printer2.jpeg'
import printer5 from '../assets/printer5.jpeg'
import printer6 from '../assets/printer6.jpeg'
import printe7 from '../assets/printe7.jpeg'
import kyocera16h from '../assets/16H Kyocera.jpg'
import ink5 from '../assets/ink5.jpeg'
import inkYellow from '../assets/ink1.5.jpeg'
import inkBlue from '../assets/ink1.2.jpeg'
import inkCyan from '../assets/ink1.3.jpeg'
import inkMagenta from '../assets/ink1.4.jpeg'
import inkBlack from '../assets/colorxpert-black.jpg'
import digitalPrinter1 from '../assets/digitalPrinter1.jpeg'
import digitalPrinter2 from '../assets/digitalPrinter2.jpeg'
import digitalPrinter3 from '../assets/digitalPrinter3.jpeg'
import digitalPrinter4 from '../assets/digitalPrinter4.jpeg'
import digitalPrinter5 from '../assets/digitalPrinter5.jpeg'
import digitalPrinter6 from '../assets/digitalPrinter6.jpeg'

export const logoImg = image_1
export const footerLogo = logo

export { photo3, photo4, photo5, photo7, printer2, printer5, printer6, printe7, kyocera16h, digitalPrinter1, digitalPrinter2, digitalPrinter3, digitalPrinter4, digitalPrinter5, digitalPrinter6 }

export const heroSlides = [
  { src: photo5, alt: 'Digital Textile Printer Banner' },
  { src: photo7, alt: 'Ricoh Gen6 Printing Technology' },
  { src: photo3, alt: 'Direct To Film Printing Setup' },
  { src: photo4, alt: 'Sublimation Textile Printers' },
]

export const aboutCards = [
  { icon: 'fa-solid fa-microchip', title: 'Innovative Technology', desc: 'Industry-leading digital printing technology designed for maximum precision and outstanding print quality.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Reliable Performance', desc: 'Strong engineering and durable components ensure long-term performance with minimum maintenance.' },
  { icon: 'fa-solid fa-sliders', title: 'Flexible Solutions', desc: 'A wide range of printers suitable for textile, signage, industrial and customized printing applications.' },
  { icon: 'fa-solid fa-users', title: 'Customer Support', desc: 'Dedicated support team committed to delivering the best experience before and after every installation.' },
]

export const stats = [
  { icon: 'fa-solid fa-users', number: '500+', title: 'Happy Clients' },
  { icon: 'fa-solid fa-print', number: '1200+', title: 'Machines Installed' },
  { icon: 'fa-solid fa-gears', number: '15+', title: 'Years Experience' },
  { icon: 'fa-solid fa-location-dot', number: 'PAN India', title: 'Service Network' },
]

export const missionVision = [
  { icon: 'fa-solid fa-bullseye', title: 'Our Mission', desc: 'To empower textile businesses across India with cutting-edge digital printing technology that delivers superior print quality, maximum productivity, and long-term reliability. We strive to make advanced textile printing accessible and affordable for manufacturers of all sizes.' },
  { icon: 'fa-solid fa-eye', title: 'Our Vision', desc: 'To become India\'s most trusted and preferred supplier of digital textile printing solutions, recognized for innovation, customer satisfaction, and technical excellence. We envision a future where every textile manufacturer has access to world-class printing technology.' },
]

export const features = [
  { icon: 'fa-solid fa-medal', title: 'High Quality Machinery', desc: 'Heavy-duty frames, linear rails, and conveyor belt systems built for long-lasting operation.' },
  { icon: 'fa-solid fa-microchip', title: 'Advanced Technology', desc: 'Equipped with original Epson i3200-A1, Ricoh Gen6, and Kyocera printhead systems.' },
  { icon: 'fa-solid fa-user-gear', title: 'Expert Installation', desc: 'On-site machine installation, color profile tuning, and hands-on staff operator training.' },
  { icon: 'fa-solid fa-headset', title: 'Technical Support', desc: '24/7 remote guidance and physical engineer visits across India for zero production delay.' },
  { icon: 'fa-solid fa-flask', title: 'Genuine Inks & Spares', desc: 'Direct supply of original Reactive, Disperse, Pigment inks, TPU hot melt films, and spare parts.' },
  { icon: 'fa-solid fa-truck-fast', title: 'PAN India Delivery', desc: 'Fast logistics and nationwide service center coverage for immediate technical response.' },
]

export const products = [

  {
    img: printer2,
    badge: '4/8H EPSON i3200',
    title: 'Digital Textile Printer',
    model: 'MODEL: GFX-PG-E4-1.1',
    specs: [
      { label: 'Printing Width', value: '1.85m' },
      { label: 'Speed', value: '65 m²/h (2 Pass 360×720 dpi)' },
      { label: 'Inks Type', value: 'Reactive/Disperse/Pigment' },
      { label: 'Colors', value: '4/8 Color (CMYK+4)' },
      { label: 'Print Media', value: 'Polyester, Pure Cotton, Nylon & Viscose' },
      { label: 'RIP Software', value: 'NeoStampa (Optional)' },
      { label: 'Power', value: 'Printer – 17 kW' },
      { label: 'Carriage System', value: 'Belt System' },
    ],
  },
  {
  img: digitalPrinter5,
  badge: '8H RICOH GEN6',
  title: 'Digital Textile Printer',
  model: 'GFX-RE-RG6B-2.1',
  specs: [
    {
      label: 'Printing Width',
      value: '1.85m & also available for 2.2m/2.6m'
    },
    {
      label: 'Speed',
      value: '162 m²/h (2 Pass 604×600 dpi)'
    },
    {
      label: 'Inks Type',
      value: 'Reactive/Disperse/Pigment'
    },
    {
      label: 'Colors',
      value: '8 Color'
    },
    {
      label: 'Print Media',
      value: 'Pure Cotton & Viscose'
    },
    {
      label: 'RIP Software',
      value: 'NeoStampa'
    },
    {
      label: 'Power',
      value: 'Printer: 220V, 35A, Single/Three Phase, 50Hz / Dryer: AC 220V, 20.5A, 50/60Hz'
    },
    {
      label: 'Carriage System',
      value: 'Magnetic Linear Rail'
    }
  ],
},
  {
  img: digitalPrinter3,
  badge: 'EPSON I3200',
  title: 'Direct To Film Printer',
  model: 'DTF Printer',
  specs: [
    {
      label: 'Head Type',
      value: 'Epson i3200 2/4 Head'
    },
    {
      label: 'Ink Type',
      value: 'DTF Pigment Ink'
    },
    {
      label: 'Colors',
      value: 'CMYK + White'
    },
    {
      label: 'Speed & Precision',
      value: '4 Head: 4 Pass-30 Sq.mtr/h, 6 Pass-20 Sq.mtr/h / 2 Head: 4 Pass-15 Sq.mtr/h, 6 Pass-9 Sq.mtr/h'
    },
    {
      label: 'Print Width',
      value: 'Up to 24"'
    },
    {
      label: 'Software',
      value: 'RIIN'
    },
    {
      label: 'Power',
      value: 'DTF Printer 1 kW / Powder Shaker Machine 7.9 kW'
    },
    {
      label: 'Operation System',
      value: 'Win7/Win8/Win10 (64 bit)'
    }
  ],
},

{
  img: kyocera16h,
  badge: '4H EPSON I3200',
  title: 'Digital Sublimation Printer',
  model: 'GFX-DS-E4-1.1',
  specs: [
    {
      label: 'Max Width',
      value: 'Up to 1.90 m'
    },
    {
      label: 'Speed',
      value: '95 m²/h (2 Pass 360×1200 dpi)'
    },
    {
      label: 'Inks Type',
      value: 'Dye Sublimation / Aqueous based Pigmented Inks'
    },
    {
      label: 'Colors',
      value: '4 Color (CMYK)'
    },
    {
      label: 'Print Media',
      value: 'Sublimation Paper, Decor Paper, Photo Paper, Vinyl Sheet & Sticker'
    },
    {
      label: 'RIP Software',
      value: 'NeoStampa'
    },
    {
      label: 'Power',
      value: 'AC 220V, 50/60 Hz'
    },
    {
      label: 'Carriage System',
      value: 'Belt System'
    }
  ],
},

  {
  img: printer5,
  badge: '8H Epson i3200',
  title: 'High Speed Digital Sublimation Printer',
  model: 'GFX-DS-E8-1.1',
  specs: [
    {
      label: 'Maximum Print Width',
      value: 'Up to 1900mm'
    },
    {
      label: 'Speed',
      value: '225 m²/h (1 Pass 360×1200 dpi)'
    },
    {
      label: 'Colors',
      value: '4/8 Color (CMYK+4)'
    },
    {
      label: 'Ink Type',
      value: 'Dye Sublimation / Aqueous based Pigmented Inks'
    },
    {
      label: 'Media',
      value: 'Sublimation Paper'
    },
    {
      label: 'RIP Software',
      value: 'NeoStampa (Optional)'
    },
    {
      label: 'Power',
      value: 'AC 220V, 60A'
    },
    {
      label: 'Carriage System',
      value: 'Belt System'
    }
  ],
},


  {
  img: printe7,
  badge: '16H Ricoh Gen6',
  title: 'High Speed Digital Textile Printer',
  model: 'GFX-RE-RG616-1.1',
  specs: [
    {
      label: 'Printing Width',
      value: '2 meter'
    },
    {
      label: 'Speed',
      value: '240 m²/h (2 Pass 508×600 dpi)'
    },
    {
      label: 'Colors',
      value: '4/8 Color'
    },
    {
      label: 'Print Media',
      value: 'Pure Cotton & Viscose'
    },
    {
      label: 'RIP Software',
      value: 'NeoStampa'
    },
    {
      label: 'Power',
      value: 'Printer – 8 kW / Dryer – 30 kW'
    },
    {
      label: 'Carriage System',
      value: 'Magnetic Linear Rail'
    }
  ],
}, 
  
  {
  img: digitalPrinter6,
  badge: '16H Kyocera',
  title: 'High Speed Digital Textile Printer',
  model: 'GFX-RE-KY16-2.1',
  specs: [
    {
      label: 'Printing Width',
      value: '1.85m & also available for 2.2m/2.6m'
    },
    {
      label: 'Speed',
      value: '324 m²/h (2 Pass 604×600 dpi)'
    },
    {
      label: 'Colors',
      value: '8 Color'
    },
    {
      label: 'Print Media',
      value: 'Pure Cotton & Viscose'
    },
    {
      label: 'RIP Software',
      value: 'NeoStampa'
    },
    {
      label: 'Power',
      value: 'Printer – 220V, 104A Single/Three phase'
    },
    {
      label: 'Carriage System',
      value: 'Magnetic Linear Rail'
    }
  ],
},
]

export const premiumProducts = [
  { images: [inkYellow, ink5, inkCyan], title: 'INK COLORXPERT YELLOW', desc: 'Epson i 3200', rating: '★★★★★' },
  { images: [inkBlue, ink5, inkMagenta], title: 'INK COLORXPERT BLUE', desc: 'Epson i 3200 Industrial Printer', rating: '★★★★★' },
  { images: [inkCyan, ink5, inkYellow], title: 'INK COLORXPERT CYAN', desc: 'Epson i 3200', rating: '★★★★★' },
  { images: [inkMagenta, ink5, inkBlue], title: 'INK COLORXPERT MAGENTA', desc: 'Epson i 3200', rating: '★★★★★' },
  { images: [inkCyan, ink5, inkBlack], title: 'INK COLORXPERT CYAN', desc: 'Epson i 3200', rating: '★★★★★' },
  { images: [inkBlack, ink5, inkYellow], title: 'INK COLORXPERT BLACK', desc: 'Epson i 3200', rating: '★★★★★' },
]

export const services = [
  { icon: 'fa-solid fa-screwdriver-wrench', title: 'Machine Installation', desc: 'Expert setup, linear alignment, and printhead calibration executed by experienced engineers.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Operator Training', desc: 'On-site training for staff operators covering software, machine cleaning, and preventive steps.' },
  { icon: 'fa-solid fa-screwdriver', title: 'Annual Maintenance (AMC)', desc: 'Proactive service plans and routine check-ups for uninterrupted production performance.' },
  { icon: 'fa-solid fa-sliders', title: 'RIP Software Calibration', desc: 'NeoStampa & RIIN software color profiling, linear ICC curves, and print quality tuning.' },
]

export const galleryImages = [
  digitalPrinter1,
  digitalPrinter2,
  digitalPrinter3,
  digitalPrinter4,
  digitalPrinter5,
  digitalPrinter6,
]

export const contactInfo = {
  address: 'B-61, First Floor, Sector-10, Noida (U.P)-201301',
  phones: '+91 9910208858, +91 9540496171',
  email: 'colorxpert2020@gmail.com',
}

export const productSelectOptions = [
  'Epson 4/8 Head Digital Textile Printer',
  'Ricoh Gen6 Direct To Fabric Printer (8 Head / 16 Head)',
  'Kyocera 16 Head High Speed Printer',
  'DTF Printing Machine Setup',
  'Sublimation Printer (4 Head / 8 Head)',
  'Inks & Spare Parts Requirement',
]
