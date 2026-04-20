import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

// 1. Fungsi Metadata Dinamis untuk SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  
  // Nanti data ini diambil dari Database/n8n
  // Contoh simulasi:
  const title = slug === 'jasa-web-bali' 
    ? "Jasa Pembuatan Website Bali & Web Design Profesional" 
    : "Jasa Web Design Denpasar";

  return {
    title: `${title} | Nusa Prima Digital`,
    description: "Layanan jasa pembuatan website di Bali menggunakan Next.js. Cepat, SEO friendly, dan desain premium untuk bisnis Anda.",
    alternates: {
      canonical: `https://nusaprimadigital.com/${slug}`,
    }
  };
}

// 2. Komponen Utama Halaman
export default function PillarPage({ params }: PageProps) {
  const { slug } = params;

  // Proteksi sederhana jika slug tidak dikenal (Nanti sesuaikan dengan DB)
  if (slug !== 'jasa-web-bali' && slug !== 'jasa-pembuatan-website-denpasar') {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Jasa Pembuatan Website di Bali yang Fokus pada <span className="text-blue-600">Performa</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Kami membantu bisnis Anda di Bali dan Denpasar berkembang lewat website modern berbasis Next.js dan strategi SEO yang tepat sasaran.
          </p>
          <div className="mt-10">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition">
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Content Section (Tempat Konten n8n Muncul) */}
      <section className="py-16 px-6 max-w-4xl mx-auto prose prose-blue lg:prose-xl">
        <h2>Ahli Web Design & Developer di Bali</h2>
        <p>
          Mencari <strong>jasa pembuatan website di Bali</strong> bukan hanya soal tampilan yang cantik, 
          tapi juga soal kecepatan dan kemudahan ditemukan di Google (SEO). 
          Nusa Prima Digital hadir sebagai partner strategis untuk kebutuhan <em>bali web design</em> Anda.
        </p>
        
        {/* Placeholder untuk data dinamis dari n8n */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
          <p className="text-blue-800 font-medium">
            💡 Tips: Website yang dibangun dengan Next.js memiliki keunggulan kecepatan yang disukai oleh algoritma Google terbaru.
          </p>
        </div>

        <h3>Layanan Kami Meliputi:</h3>
        <ul>
          <li>Jasa Bikin Website Bali untuk Properti & Villa</li>
          <li>Pembuatan Website E-commerce & Toko Online</li>
          <li>Optimasi SEO Bali untuk Ranking Halaman 1</li>
          <li>Maintenance Website & Keamanan Data</li>
        </ul>
      </section>
    </main>
  );
}