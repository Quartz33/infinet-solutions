import { Header } from "./components/header"
import { Hero } from "./components/hero"
import AnimatedLogoCloud from "./components/LogoCloud"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import Services from "./components/services"
import { ContactUs } from "./components/Contactus"
import Testimonials from "./components/Testimonials"
import Faqs from "./components/faqs"


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AnimatedLogoCloud />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      <Faqs />
      <Footer />
    </>
  )
}