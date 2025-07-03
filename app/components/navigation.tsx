"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang" },
    { href: "#services", label: "Layanan" },
    { href: "#pricing", label: "Harga" },
    { href: "#cars", label: "Rental" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
              <Image
                src="/images/logo.png"
                alt="WisataKu Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 transition-colors">
              zeecreate.id
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-gray-700 hover:text-primary transition-all duration-200 hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4 border-primary text-primary hover:bg-primary/10"
            >
              <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Hubungi Kami</span>
              <span className="sm:hidden">Call</span>
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm px-3 sm:px-4 hover:scale-105 transition-all duration-200"
            >
              <span className="hidden sm:inline">Booking Sekarang</span>
              <span className="sm:hidden">Book</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md transition-all duration-200 hover:scale-110 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg rounded-b-lg mx-2 sm:mx-4">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 font-medium hover:text-primary transition-all duration-200 py-2 px-3 rounded-md hover:bg-primary/5 transform hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary/10 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </Button>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  Booking Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
