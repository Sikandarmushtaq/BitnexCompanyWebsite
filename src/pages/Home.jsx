
import Navbar from '../components/Navbar.jsx'
// import CTA from '../components/CTA.jsx'

import Hero from '../components/home/Hero.jsx'
// import Values from '../components/home/Values.jsx'
import HomeServices from '../components/home/HomeServices.jsx'
import Virtuoso from '../components/home/Virtuoso.jsx'
import Stats from '../components/home/Stats.jsx'
import Faq from '../components/home/Faq.jsx'
import Technologies from "../components/home/Technologies.jsx"
import BlogShowcase from "../components//home/BlogShowcase"
import OurMethodology from '../components/home/OurMethodology.jsx'
import HomeContact from '../components/home/HomeContact.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <Virtuoso />
        <HomeServices />
         <Stats />
          <Technologies/>
          <OurMethodology/>
          <BlogShowcase/>
      {/* <Values /> */}
     
     
     
     
      <Faq />
      {/* <CTA /> */}
      <HomeContact />
    </>
  )
}
