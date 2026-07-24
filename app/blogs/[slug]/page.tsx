import { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data: post } = await supabase
    .from('posts')
    .select('title, content, image_url, created_at')
    .eq('slug', params.slug)
    .single()

  if (!post) {
    return { title: 'Artikel Tidak Ditemukan | Nusaprima Digital' }
  }

  const description = post.content?.slice(0, 155).replace(/\n/g, ' ') ?? ''
  const ogImage = post.image_url ?? DEFAULT_OG_IMAGE

  return {
    title: `${post.title} | Nusaprima Digital`,
    description,
    openGraph: {
      title: `${post.title} | Nusaprima Digital`,
      description,
      type: 'article',
      siteName: SITE_NAME,
      publishedTime: post.created_at,
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Nusaprima Digital`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${BASE_URL}/blogs/${params.slug}`,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (error || !post) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.created_at,
    dateModified: post.updated_at ?? post.created_at,
    image: post.image_url ?? DEFAULT_OG_IMAGE,
    url: `${BASE_URL}/blogs/${params.slug}`,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo-nusaprima.png`,
      },
    },
  }

  return (
    <article className="max-w-3xl mx-auto p-8">
      <JsonLd data={articleSchema} />
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold mb-4">{post.title}</h1>
        <time className="text-slate-400">
          {new Date(post.created_at).toLocaleDateString('id-ID')}
        </time>
      </header>

      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full rounded-2xl mb-8"
        />
      )}

      <div className="prose prose-lg lg:prose-xl">
        <p className="whitespace-pre-wrap text-slate-700 leading-relaxed">
          {post.content}
        </p>
      </div>
    </article>
  )
}
