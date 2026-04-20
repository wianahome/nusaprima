import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error || !post) {
    notFound(); // Menampilkan halaman 404 jika slug tidak ada
  }

  return (
    <article className="max-w-3xl mx-auto p-8">
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
        {/* Jika konten menggunakan markdown, gunakan library seperti react-markdown */}
        <p className="whitespace-pre-wrap text-slate-700 leading-relaxed">
          {post.content}
        </p>
      </div>
    </article>
  );
}