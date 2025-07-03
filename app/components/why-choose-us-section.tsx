import { Badge } from "@/components/ui/badge"
import { Clock, Star, Users, MapPin } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-blue-50/50">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm bg-blue-100 text-blue-800 border-blue-200">
            Mengapa Memilih Kami?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Keunggulan WisataKu Travel</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Kami berkomitmen memberikan pengalaman wisata terbaik dengan standar pelayanan internasional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Pelayanan 24/7</h3>
            <p className="text-muted-foreground">
              Tim customer service kami siap membantu Anda kapan saja, di mana saja
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Berpengalaman</h3>
            <p className="text-muted-foreground">Lebih dari 10 tahun pengalaman dalam industri pariwisata Indonesia</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Tim Profesional</h3>
            <p className="text-muted-foreground">Tour guide bersertifikat dan tim yang berpengalaman di bidangnya</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Destinasi Lengkap</h3>
            <p className="text-muted-foreground">Ratusan destinasi wisata domestik dan internasional pilihan terbaik</p>
          </div>
        </div>
      </div>
    </section>
  )
}
