import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Products from "@/components/Products"
import Industries from "@/components/Industries"
import CaseStudies from "@/components/CaseStudies"
import Research from "@/components/Research"
import CSR from "@/components/CSR"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Industries />
      <CaseStudies />
      <Research />
      <CSR />
      <Contact />
      <Footer />
    </main>
  )
}

