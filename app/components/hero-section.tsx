import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, MapPin } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs sm:text-sm bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 sm:px-4 sm:py-2 inline-block">
                🌟 Travel Terpercaya #1 di Indonesia
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                Jelajahi Keindahan
                <span className="block text-primary">Indonesia Bersama Kami</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Nikmati pengalaman wisata tak terlupakan dengan layanan travel profesional, destinasi eksotis, dan harga terjangkau untuk seluruh keluarga.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                Mulai Petualangan
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Lihat Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Destinasi</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">4.9</div>
                <div className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Images Grid */}
          <div className="relative animate-slide-in-right mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                  <Image
                    src="/images/bali-beach.jpg"
                    alt="Bali Temple"
                    width={300}
                    height={400}
                    className="object-cover w-full h-48 sm:h-56 lg:h-64 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <p className="font-semibold text-sm sm:text-base">Bali</p>
                    <p className="text-xs sm:text-sm opacity-90">Pulau Dewata</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                  <Image
                    src="/images/raja-ampat.jpg"
                    alt="Raja Ampat"
                    width={300}
                    height={200}
                    className="object-cover w-full h-32 sm:h-36 lg:h-40 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                    <p className="font-semibold text-xs sm:text-sm">Raja Ampat</p>
                    <p className="text-xs opacity-90">Papua Barat</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                  <Image
                    src="/images/bromo-mountain.jpg"
                    alt="Bromo"
                    width={300}
                    height={200}
                    className="object-cover w-full h-32 sm:h-36 lg:h-40 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                    <p className="font-semibold text-xs sm:text-sm">Bromo</p>
                    <p className="text-xs opacity-90">Jawa Timur</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                  <Image
                    src="/images/danau-toba.jpg"
                    alt="Komodo Island"
                    width={300}
                    height={400}
                    className="object-cover w-full h-48 sm:h-56 lg:h-64 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <p className="font-semibold text-sm sm:text-base">Pulau Komodo</p>
                    <p className="text-xs sm:text-sm opacity-90">NTT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-full p-2 sm:p-4 shadow-lg animate-bounce-slow">
              <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div className="absolute bottom-2 sm:bottom-4 -left-2 sm:-left-4 bg-white rounded-full p-2 sm:p-4 shadow-lg animate-bounce-slow" style={{animationDelay: '1s'}}>
              <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
