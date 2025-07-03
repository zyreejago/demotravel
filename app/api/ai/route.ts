import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBwnsoXJ599O6SoAwwaOQ22vzNzagx4_lM",
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  // Data website (ringkasan layanan, harga, dsb)
  const websiteInfo = `
Tentang WisataKu Zee Demo Travel:
- Travel agent Indonesia berdiri sejak 2014, berpengalaman >10 tahun, rating 4.9/5 dari 10.000+ pelanggan.
- Layanan: Wisata Domestik, Wisata Internasional, Paket Honeymoon, Rental Mobil, Corporate Travel.
- Keunggulan: Pelayanan 24/7, tour guide profesional, destinasi lengkap, harga transparan.

Harga Paket Wisata:
- Paket Ekonomis: Rp 2,5jt/orang (3D2N, hotel budget, transport sharing, makan 2x sehari, tour guide)
- Paket Premium: Rp 5,5jt/orang (5D4N, hotel bintang 4, private car, makan 3x sehari, professional guide, dokumentasi foto)
- Paket Luxury: Rp 12jt/orang (7D6N, resort/villa mewah, private jet/first class, fine dining, personal butler, spa)

Harga Rental Mobil:
- Mobil Ekonomis: Rp 350.000/hari (4-5 orang, AC, driver, BBM)
- Mobil Premium: Rp 650.000/hari (6-7 orang, leather seat, professional driver, BBM+tol+parkir, asuransi)
- Mobil Mewah: Rp 1.200.000/hari (4-6 orang, luxury interior, VIP driver, all inclusive)

Kontak: +62 889-8724-4675 | zinknot@gmail.com | Bali, Indonesia
`

  // Prompt instruksi natural
  const prompt = `
Kamu adalah asisten travel Zee Demo Travel. Jawab pertanyaan user hanya seputar travel Indonesia, layanan, destinasi, dan harga sesuai informasi berikut:

${websiteInfo}

Jika user bertanya tentang destinasi, rekomendasi, atau tips wisata di Indonesia (misal: Bali, Bromo, Raja Ampat, dsb), berikan jawaban informatif, ramah, dan gunakan data di atas sebagai referensi. Jika user bertanya tentang harga, sebutkan harga sesuai data di atas. Jika user bertanya tentang layanan, destinasi, atau keunggulan, jawab sesuai info di atas.

Jika user bertanya di luar topik travel Indonesia atau di luar informasi di atas, balas: "Maaf, saya tidak bisa merespon pertanyaan di luar travel dan informasi di web ini."

Berikan jawaban yang singkat, jelas, dan ramah. Jika perlu, tambahkan tips atau rekomendasi berdasarkan data di atas.

Pertanyaan user: ${message}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        thinkingConfig: {
          thinkingBudget: 2,
        },
      },
    });
    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: "Gagal menghubungi AI" }, { status: 500 });
  }
}