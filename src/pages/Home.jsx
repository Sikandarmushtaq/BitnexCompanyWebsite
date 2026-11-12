import Navbar from '../components/Navbar.jsx'
import CursorFollower from '../components/CursorFollower.jsx'

import Hero from '../components/home/Hero.jsx'
import HomeServices from '../components/home/HomeServices.jsx'
import Virtuoso from '../components/home/Virtuoso.jsx'
import Stats from '../components/home/Stats.jsx'
import Faq from '../components/home/Faq.jsx'
import Technologies from '../components/home/Technologies.jsx'
import BlogShowcase from '../components/home/BlogShowcase.jsx'
import OurMethodology from '../components/home/OurMethodology.jsx'
import HomeContact from '../components/home/HomeContact.jsx'

export default function Home() {
  return (
    <>
      <CursorFollower enabled={true} />

      <Navbar />
      <Hero />
      <Virtuoso />
      <HomeServices />
      <Stats />
      <Technologies />
      <OurMethodology />
      <BlogShowcase />
      <Faq />
      <HomeContact />
    </>
  )
}