import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'
import { BASE_URL } from '@/lib/site'

const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { url: '/',                                    priority: 1.0, changeFrequency: 'weekly'  },
  { url: '/jasa-google-ads',                     priority: 0.9, changeFrequency: 'monthly' },
  { url: '/jasa-seo',                            priority: 0.9, changeFrequency: 'monthly' },
  { url: '/jasa-web-bali',                       priority: 0.9, changeFrequency: 'monthly' },
  { url: '/jasa-pembuatan-website-denpasar',     priority: 0.9, changeFrequency: 'monthly' },
  { url: '/services',                            priority: 0.8, changeFrequency: 'monthly' },
  { url: '/gallery',                             priority: 0.8, changeFrequency: 'monthly' },
  { url: '/blogs',                               priority: 0.8, changeFrequency: 'weekly'  },
  { url: '/about-us',                            priority: 0.7, changeFrequency: 'monthly' },
  { url: '/contact',                             priority: 0.7, changeFrequency: 'monthly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: posts } = await supabase
    .from('posts')
    .select('slug, created_at')
    .order('created_at', { ascending: false })

  const blogRoutes: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.created_at),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const statics: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return [...statics, ...blogRoutes]
}
