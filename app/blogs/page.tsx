import { Metadata } from 'next'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

interface Post {
  id: string
  title: string
  slug: string
  created_at: string
}

export const metadata: Metadata = {
  title: 'Blog Digital Marketing & Web Development | Nusaprima',
  description: 'Baca artikel terbaru seputar web design, SEO, Google Ads, dan digital marketing dari tim Nusaprima Digital.',
  keywords: ['blog digital marketing', 'artikel seo', 'tips web design', 'blog nusaprima'],
  openGraph: {
    title: 'Blog Digital Marketing & Web Development | Nusaprima',
    description: 'Baca artikel terbaru seputar web design, SEO, Google Ads, dan digital marketing dari tim Nusaprima Digital.',
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Blog Nusaprima Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Digital Marketing & Web Development | Nusaprima',
    description: 'Baca artikel terbaru seputar web design, SEO, dan digital marketing dari Nusaprima.',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/blogs`,
  },
}

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, created_at')
    .order('created_at', { ascending: false })

  if (error) return <p>Gagal memuat blog.</p>

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">Blog Saya</h1>
      <div className="grid gap-6">
        {posts?.map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`}>
            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow border-slate-200">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-slate-500 text-sm">
                {new Date(post.created_at).toLocaleDateString('id-ID')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
