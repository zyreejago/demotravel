import ChatWidget from "./components/chat-widget"
import { Inter } from "next/font/google"
import Navigation from "./components/navigation"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import ServicesSection from "./components/services-section"
import WhyChooseUsSection from "./components/why-choose-us-section"
import PricingSection from "./components/pricing-section"
import CarRentalSection from "./components/car-rental-section"
import Footer from "./components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function TravelWebsite() {
  return (
    <div className={`min-h-screen bg-background ${inter.variable} font-sans`}>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PricingSection />
        <CarRentalSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
