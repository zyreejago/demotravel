import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800 border-blue-200">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Lebih dari 10 Tahun Menghadirkan
              <span className="text-primary block">Pengalaman Wisata Terbaik</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              WisataKu Travel didirikan pada tahun 2014 dengan visi menjadi partner terpercaya untuk setiap perjalanan
              wisata Anda. Kami memahami bahwa setiap perjalanan adalah investasi berharga untuk menciptakan kenangan
              indah bersama orang-orang tercinta.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dengan tim profesional yang berpengalaman dan jaringan partner terpercaya di seluruh Indonesia dan dunia,
              kami berkomitmen memberikan pelayanan terbaik dengan harga yang kompetitif.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-semibold">Misi Kami</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Memberikan pengalaman wisata yang tak terlupakan dengan pelayanan profesional dan harga terjangkau
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-semibold">Visi Kami</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Menjadi travel agent terdepan yang menghubungkan setiap orang dengan keindahan dunia
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
                Pelajari Lebih Lanjut
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Lihat Sertifikat
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/bali-beach.jpg"
                  alt="Tim WisataKu"
                  width={250}
                  height={180}
                  className="rounded-xl object-cover w-full shadow-lg"
                />
                <div className="bg-primary text-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm opacity-90">Pelanggan Puas</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-lg">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-blue-700">Destinasi Wisata</div>
                </div>
                <Image
                  src="/images/bromo-mountain.jpg"
                  alt="Destinasi Wisata"
                  width={250}
                  height={180}
                  className="rounded-xl object-cover w-full shadow-lg"
                />
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Rating 4.9/5</div>
                  <div className="text-sm text-muted-foreground">Dari 2000+ Review</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Nilai-Nilai Perusahaan</h3>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Prinsip yang kami pegang teguh dalam setiap pelayanan
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">Kualitas</h4>
              <p className="text-sm text-muted-foreground">
                Memberikan pelayanan berkualitas tinggi dalam setiap aspek perjalanan
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">Kepercayaan</h4>
              <p className="text-sm text-muted-foreground">
                Membangun hubungan jangka panjang berdasarkan kepercayaan dan transparansi
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">Responsif</h4>
              <p className="text-sm text-muted-foreground">
                Merespon kebutuhan pelanggan dengan cepat dan solusi yang tepat
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">Inovasi</h4>
              <p className="text-sm text-muted-foreground">
                Terus berinovasi untuk memberikan pengalaman wisata yang lebih baik
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
