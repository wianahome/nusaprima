import { Metadata } from 'next'
import { revalidatePath } from 'next/cache'
import { supabase } from '@/lib/supabase'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

async function createPost(formData: FormData) {
  'use server'
  const title = (formData.get('title') as string).trim()
  const slug = (formData.get('slug') as string).trim()
  const content = (formData.get('content') as string).trim()
  const image_url = (formData.get('image_url') as string).trim() || null

  await supabase.from('posts').insert({ title, slug, content, image_url })
  revalidatePath('/admin/blog')
  revalidatePath('/blogs')
}

async function deletePost(formData: FormData) {
  'use server'
  const id = formData.get('id') as string
  await supabase.from('posts').delete().eq('id', id)
  revalidatePath('/admin/blog')
  revalidatePath('/blogs')
}

export default async function AdminBlogPage() {
  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, slug, created_at')
    .order('created_at', { ascending: false })

  return (
    <main className="max-w-4xl mx-auto p-8 pt-24">
      <h1 className="text-3xl font-bold mb-8">Admin Blog</h1>

      {/* Form buat post baru */}
      <section className="mb-12 p-6 border rounded-xl bg-slate-50">
        <h2 className="text-xl font-semibold mb-4">Buat Post Baru</h2>
        <form action={createPost} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Judul</label>
            <input
              name="title"
              type="text"
              required
              className="w-full border rounded-lg px-3 py-2 text-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Slug (URL)</label>
            <input
              name="slug"
              type="text"
              required
              placeholder="contoh-judul-artikel"
              className="w-full border rounded-lg px-3 py-2 text-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Konten</label>
            <textarea
              name="content"
              required
              rows={6}
              className="w-full border rounded-lg px-3 py-2 text-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">URL Gambar (opsional)</label>
            <input
              name="image_url"
              type="url"
              className="w-full border rounded-lg px-3 py-2 text-slate-900"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-cyan-600 transition"
          >
            Simpan Post
          </button>
        </form>
      </section>

      {/* Daftar semua post */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Semua Post ({posts?.length ?? 0})</h2>
        <div className="space-y-3">
          {posts?.map((post) => (
            <div key={post.id} className="p-4 border rounded-xl flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-medium truncate">{post.title}</p>
                <p className="text-sm text-slate-500">
                  /blogs/{post.slug} · {new Date(post.created_at).toLocaleDateString('id-ID')}
                </p>
              </div>
              <form action={deletePost} className="shrink-0">
                <input type="hidden" name="id" value={post.id} />
                <button
                  type="submit"
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Hapus
                </button>
              </form>
            </div>
          ))}
          {!posts?.length && (
            <p className="text-slate-500 py-4 text-center">Belum ada post.</p>
          )}
        </div>
      </section>
    </main>
  )
}
