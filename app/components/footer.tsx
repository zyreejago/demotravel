import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Zee Demo</span>
            </div>
            <p className="text-muted-foreground">
              Partner terpercaya untuk petualangan wisata impian Anda di seluruh Indonesia dan dunia.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wisata Domestik</li>
              <li>Wisata Internasional</li>
              <li>Paket Honeymoon</li>
              <li>Rental Mobil</li>
              <li>Corporate Travel</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tentang Kami</li>
              <li>Tim Kami</li>
              <li>Karir</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Kontak</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+62 889-8724-4675</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>zinknot@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bali, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Zee Demo Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
