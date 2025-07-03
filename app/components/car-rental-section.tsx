import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Car, Fuel, Shield } from "lucide-react"
import Image from "next/image"

export default function CarRentalSection() {
  return (
    <section id="cars" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm bg-blue-100 text-blue-800 border-blue-200">
            Rental Mobil
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Pilihan Kendaraan Terbaik</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Sewa mobil berkualitas dengan driver berpengalaman untuk perjalanan yang nyaman dan aman
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Economy Car */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-blue-100 flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Mobil Ekonomis</CardTitle>
              <CardDescription className="text-base">
                Pilihan hemat untuk perjalanan dalam kota dan jarak dekat
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <Image
                src="/images/economy-car.jpg"
                alt="Mobil Ekonomis"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full shadow-md"
              />
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">Rp 350K</span>
                  <span className="text-sm text-muted-foreground">/hari</span>
                </div>
                <ul className="space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Kapasitas 4-5 Orang</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">AC & Audio System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Driver Berpengalaman</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">BBM Termasuk</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Sewa Sekarang</Button>
            </CardContent>
          </Card>

          {/* Premium Car */}
          <Card className="relative group hover:shadow-xl transition-all duration-300 border-primary shadow-lg scale-105 flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
              <Badge className="bg-primary text-white px-4 py-1">PALING POPULER</Badge>
            </div>
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Fuel className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Mobil Premium</CardTitle>
              <CardDescription className="text-base">
                Kenyamanan maksimal untuk perjalanan jarak jauh dan grup besar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <Image
                src="/images/premium-car.jpg"
                alt="Mobil Premium"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full shadow-md"
              />
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">Rp 650K</span>
                  <span className="text-sm text-muted-foreground">/hari</span>
                </div>
                <ul className="space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Kapasitas 6-7 Orang</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Leather Seat & Premium AC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Professional Driver</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">BBM + Tol + Parkir</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Asuransi Perjalanan</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Sewa Sekarang</Button>
            </CardContent>
          </Card>

          {/* Luxury Car */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-blue-100 flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Mobil Mewah</CardTitle>
              <CardDescription className="text-base">
                Pengalaman berkendara eksklusif dengan fasilitas premium terlengkap
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <Image
                src="/images/luxury-car.jpg"
                alt="Mobil Mewah"
                width={400}
                height={200}
                className="rounded-lg object-cover w-full shadow-md"
              />
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">Rp 1.2jt</span>
                  <span className="text-sm text-muted-foreground">/hari</span>
                </div>
                <ul className="space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Kapasitas 4-6 Orang</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Luxury Interior & Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">VIP Driver Service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">All Inclusive Package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">24/7 Customer Support</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Sewa Sekarang</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            *Harga sudah termasuk driver dan BBM untuk dalam kota. Biaya tambahan untuk luar kota.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            Lihat Semua Kendaraan
          </Button>
        </div>
      </div>
    </section>
  )
}
