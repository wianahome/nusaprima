import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Post {
  id: string;
  title: string;
  slug: string;
  created_at: string;
}

export default async function BlogPage() {
  // Mengambil data posts dari Supabase
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, created_at')
    .order('created_at', { ascending: false });

  if (error) return <p>Gagal memuat blog.</p>;

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">Blog Saya</h1>
      <div className="grid gap-6">
        {posts?.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
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
  );
}