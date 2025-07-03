import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Siap Memulai Petualangan Anda?</h2>
          <p className="text-xl opacity-90">
            Jangan tunggu lagi! Hubungi kami sekarang dan dapatkan penawaran spesial untuk paket wisata impian Anda.
            Konsultasi gratis dan tanpa komitmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
