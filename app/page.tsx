import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MenuSection from '@/components/MenuSection'
import FasilitasSection from '@/components/FasilitasSection'
import LeadSection from '@/components/LeadSection'
import TestimoniSection from '@/components/TestimoniSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <FasilitasSection />
        <LeadSection />
        <TestimoniSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
