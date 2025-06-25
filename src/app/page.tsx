import { Hero } from "./components/hero"
import AnimatedLogoCloud from "./components/LogoCloud"
import AboutUs from "./components/AboutUs"
import Services from "./components/services"
import { ContactUs } from "./components/Contactus"
import Testimonials from "./components/Testimonials"
import Faqs from "./components/faqs"


export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedLogoCloud />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      <Faqs />
    </>
  )
}