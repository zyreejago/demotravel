import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-blue-50/50">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm bg-blue-100 text-blue-800 border-blue-200">
            Harga Paket
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Pilih Paket Sesuai Budget Anda</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Harga transparan tanpa biaya tersembunyi. Dapatkan value terbaik untuk liburan impian Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Package */}
          <Card className="relative border-blue-100 flex flex-col">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Paket Ekonomis</CardTitle>
              <CardDescription>Perfect untuk backpacker dan budget traveler</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold text-primary">Rp 2,5jt</span>
                <span className="text-muted-foreground">/orang</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <ul className="space-y-3 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">3D2N Destinasi Domestik</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Hotel Budget/Homestay</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Transportasi Sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Makan 2x Sehari</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Tour Guide</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Pilih Paket</Button>
            </CardContent>
          </Card>

          {/* Premium Package */}
          <Card className="relative border-primary shadow-lg scale-105 flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-white px-4 py-1">PALING POPULER</Badge>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Paket Premium</CardTitle>
              <CardDescription>Pilihan terbaik untuk keluarga dan grup</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold text-primary">Rp 5,5jt</span>
                <span className="text-muted-foreground">/orang</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <ul className="space-y-3 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">5D4N Destinasi Premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Hotel Berbintang 4</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Private Car AC</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Makan 3x Sehari</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Professional Guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dokumentasi Foto</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Pilih Paket</Button>
            </CardContent>
          </Card>

          {/* Luxury Package */}
          <Card className="relative border-blue-100 flex flex-col">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Paket Luxury</CardTitle>
              <CardDescription>Pengalaman wisata mewah dan eksklusif</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold text-primary">Rp 12jt</span>
                <span className="text-muted-foreground">/orang</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <ul className="space-y-3 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">7D6N Destinasi Eksotis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Resort/Villa Mewah 5⭐</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Private Jet/First Class</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Fine Dining Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Personal Butler</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Spa & Wellness</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">Pilih Paket</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            *Harga dapat berubah sewaktu-waktu. Hubungi kami untuk penawaran khusus dan diskon grup
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  )
}
