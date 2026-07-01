import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import MenuSection from '@/components/MenuSection'
import FasilitasSection from '@/components/FasilitasSection'
import LeadSection from '@/components/LeadSection'
import TestimoniSection from '@/components/TestimoniSection'
import LocationSection from '@/components/LocationSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <FasilitasSection />
        <LeadSection />
        <TestimoniSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
