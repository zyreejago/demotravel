import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MapPin, Users, Star } from "lucide-react"
import Image from "next/image"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-blue-50/50">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm bg-blue-100 text-blue-800 border-blue-200">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Pilihan Paket Wisata Terbaik</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Kami menyediakan berbagai pilihan paket wisata yang disesuaikan dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Paket Domestik */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-blue-100 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50" />
            <CardHeader className="relative">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Wisata Domestik</CardTitle>
              <CardDescription className="text-base">
                Jelajahi keindahan nusantara dengan paket wisata dalam negeri yang lengkap dan terjangkau
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4 flex-1 flex flex-col">
              <Image
                src="/images/domestic-travel.jpg"
                alt="Wisata Domestik"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full shadow-md"
              />
              <ul className="space-y-2 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Transportasi AC & Nyaman</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Hotel Berbintang</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Tour Guide Berpengalaman</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Makan 3x Sehari</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Lihat Detail</Button>
            </CardContent>
          </Card>

          {/* Paket Internasional */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-blue-100 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50" />
            <CardHeader className="relative">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Wisata Internasional</CardTitle>
              <CardDescription className="text-base">
                Rasakan pengalaman wisata luar negeri dengan destinasi eksotis dan pelayanan premium
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4 flex-1 flex flex-col">
              <Image
                src="/images/international-travel.jpg"
                alt="Wisata Internasional"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full shadow-md"
              />
              <ul className="space-y-2 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Tiket Pesawat PP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Visa & Asuransi Perjalanan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Hotel Mewah 4-5 Bintang</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">City Tour & Shopping</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Lihat Detail</Button>
            </CardContent>
          </Card>

          {/* Paket Honeymoon */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-blue-100 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50" />
            <CardHeader className="relative">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Paket Honeymoon</CardTitle>
              <CardDescription className="text-base">
                Ciptakan momen romantis tak terlupakan dengan paket bulan madu eksklusif dan intimate
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4 flex-1 flex flex-col">
              <Image
                src="/images/honeymoon-travel.jpg"
                alt="Paket Honeymoon"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full shadow-md"
              />
              <ul className="space-y-2 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Private Villa/Resort</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Romantic Dinner</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Couple Spa Treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Surprise & Decoration</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Lihat Detail</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
