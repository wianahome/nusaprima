import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

interface PageProps {
  params: { slug: string }
}

const PILLAR_PAGES: Record<string, string> = {
  'jasa-web-bali': 'Jasa Pembuatan Website Bali & Web Design Profesional',
  'jasa-pembuatan-website-denpasar': 'Jasa Web Design Denpasar',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params
  const title = PILLAR_PAGES[slug]

  if (!title) {
    return { title: 'Halaman Tidak Ditemukan | Nusaprima Digital' }
  }

  const description = 'Layanan jasa pembuatan website di Bali menggunakan Next.js. Cepat, SEO friendly, dan desain premium untuk bisnis Anda.'

  return {
    title: `${title} | Nusaprima Digital`,
    description,
    keywords: ['jasa pembuatan website bali', 'web design bali', 'jasa web developer bali', 'pembuatan website denpasar', 'bikin web bali'],
    openGraph: {
      title: `${title} | Nusaprima Digital`,
      description,
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Nusaprima Digital`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: `${BASE_URL}/${slug}`,
    },
  }
}

export default function PillarPage({ params }: PageProps) {
  const { slug } = params

  if (!PILLAR_PAGES[slug]) {
    return notFound()
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