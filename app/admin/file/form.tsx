'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, Proposal, ProposalItem } from '@/lib/supabase';

import { Plus, Trash2, Save, ArrowLeft } from 'lucide-react';
import Header from './LogoHeader';

const PRESET_PACKAGES = {
  Starter: {
    name: 'Starter (Siap Jual & Iklan)',
    one_time: 3500000,
    monthly: 1500000,
    items: [
      { category: 'Web Dev', description: 'High-Converting Landing Page 1 Halaman (Fast Loading & WA Button)', fee_type: 'one_time', price: 3500000 },
      { category: 'SEO', description: 'Basic Technical SEO & On-Page Meta Tag Setup', fee_type: 'one_time', price: 0 },
      { category: 'Google Ads', description: 'Setup & Management Google Search Ads (Targeted Leads)', fee_type: 'monthly', price: 1500000 },
    ]
  },
  Growth: {
    name: 'Growth (Balanced Web + Ads + SEO)',
    one_time: 6500000,
    monthly: 3500000,
    items: [
      { category: 'Web Dev', description: 'Company Profile Custom (5-10 Halaman) UI/UX Premium + GTM Tracking', fee_type: 'one_time', price: 6500000 },
      { category: 'Google Ads', description: 'Google Ads Management (Search + GDN Remarketing + Conversion Tracking)', fee_type: 'monthly', price: 2000000 },
      { category: 'SEO', description: 'Full SEO Retainer (Keyword Research, Technical Audit & 4 Artikel SEO/Bln)', fee_type: 'monthly', price: 1500000 },
    ]
  },
  ScaleUp: {
    name: 'Scale-Up (Full Digital Expansion)',
    one_time: 12000000,
    monthly: 6500000,
    items: [
      { category: 'Web Dev', description: 'Custom Next.js Web App / E-commerce + Fast Performance Optimization', fee_type: 'one_time', price: 12000000 },
      { category: 'Google Ads', description: 'PMax + Search Campaign Management + A/B Testing Copywriter', fee_type: 'monthly', price: 3500000 },
      { category: 'SEO', description: 'Advanced SEO Retainer (8 Artikel High Quality + Backlink Outreach)', fee_type: 'monthly', price: 3000000 },
    ]
  }
};

export default function ProposalForm({ initialData, id }: { initialData?: Proposal; id?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Partial<Proposal>>({
    proposal_number: initialData?.proposal_number || `NPD-PROP-${Date.now().toString().slice(-6)}`,
    client_name: initialData?.client_name || '',
    client_company: initialData?.client_company || '',
    client_email: initialData?.client_email || '',
    client_phone: initialData?.client_phone || '',
    package_tier: initialData?.package_tier || 'Growth',
    status: initialData?.status || 'Draft',
    valid_until: initialData?.valid_until || new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
    notes: initialData?.notes || 'Harga belum termasuk budget iklan Google Ads yang dibayarkan langsung oleh klien.',
  });

  const [items, setItems] = useState<ProposalItem[]>(
    initialData?.proposal_items || (PRESET_PACKAGES.Growth.items as ProposalItem[])
  );

  // Recalculate totals
  const oneTimeTotal = items.filter(i => i.fee_type === 'one_time').reduce((sum, i) => sum + Number(i.price || 0), 0);
  const monthlyTotal = items.filter(i => i.fee_type === 'monthly').reduce((sum, i) => sum + Number(i.price || 0), 0);

  const handleApplyPreset = (tier: 'Starter' | 'Growth' | 'ScaleUp') => {
    const preset = PRESET_PACKAGES[tier];
    setForm(prev => ({ ...prev, package_tier: tier as any }));
    setItems(preset.items as ProposalItem[]);
  };

  const addItem = () => {
    setItems([...items, { category: 'Web Dev', description: '', fee_type: 'one_time', price: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
      one_time_fee: oneTimeTotal,
      monthly_retainer: monthlyTotal,
      updated_at: new Date().toISOString(),
    };

    let proposalId = id;

    if (id) {
      // Update
      const { error } = await supabase.from('proposals').update(payload).eq('id', id);
      if (error) alert('Gagal memperbarui penawaran');
    } else {
      // Insert
      const { data, error } = await supabase.from('proposals').insert([payload]).select().single();
      if (error) alert('Gagal membuat penawaran baru');
      if (data) proposalId = data.id;
    }

    if (proposalId) {
      // Sync items
      await supabase.from('proposal_items').delete().eq('proposal_id', proposalId);
      const itemsToInsert = items.map(item => ({
        proposal_id: proposalId,
        category: item.category,
        description: item.description,
        fee_type: item.fee_type,
        price: item.price,
      }));
      await supabase.from('proposal_items').insert(itemsToInsert);

      router.push(`/admin/file/${proposalId}`);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-12">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-slate-400 hover:text-white mb-6 text-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Dashboard</span>
        </button>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <h1 className="text-xl font-bold text-white">
              {id ? 'Edit Penawaran Harga' : 'Buat Penawaran Harga Baru'}
            </h1>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg transition"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? 'Menyimpan...' : 'Simpan Penawaran'}</span>
            </button>
          </div>

          {/* Preset Selection */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <label className="block text-sm font-semibold text-slate-300 mb-3">Pilih Template Paket Bundling</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {(['Starter', 'Growth', 'ScaleUp'] as const).map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => handleApplyPreset(tier)}
                  className={`p-3 text-left rounded-lg border transition ${
                    form.package_tier === (tier === 'ScaleUp' ? 'Scale-Up' : tier)
                      ? 'bg-teal-500/10 border-teal-500 text-teal-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-white">{PRESET_PACKAGES[tier].name}</div>
                  <div className="text-xs text-slate-400 mt-1">Gunakan template isi otomatis</div>
                </button>
              ))}
            </div>
          </div>

          {/* Client Info */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Nomor Penawaran</label>
              <input
                type="text"
                value={form.proposal_number}
                onChange={e => setForm({ ...form, proposal_number: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Status</label>
              <select
                value={form.status}
                onChange={e => setForm({ ...form, status: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-teal-500"
              >
                <option value="Draft">Draft</option>
                <option value="Sent">Terkirim</option>
                <option value="Accepted">Disetujui</option>
                <option value="Declined">Ditolak</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Nama Klien / PIC</label>
              <input
                type="text"
                value={form.client_name}
                onChange={e => setForm({ ...form, client_name: e.target.value })}
                placeholder="Contoh: Pak Raffi"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Nama Perusahaan / Bisnis</label>
              <input
                type="text"
                value={form.client_company || ''}
                onChange={e => setForm({ ...form, client_company: e.target.value })}
                placeholder="Contoh: Tour & Travel Bali"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-teal-500"
              />
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold text-white">Rincian Layanan & Biaya</h2>
              <button
                type="button"
                onClick={addItem}
                className="flex items-center space-x-1 text-xs bg-slate-800 hover:bg-slate-700 text-teal-300 px-3 py-1.5 rounded-md border border-slate-700"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Tambah Layanan</span>
              </button>
            </div>

            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-center bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                  <div className="col-span-12 md:col-span-3">
                    <select
                      value={item.category}
                      onChange={e => {
                        const newItems = [...items];
                        newItems[index].category = e.target.value;
                        setItems(newItems);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-2 py-1.5 text-xs text-white"
                    >
                      <option value="Web Dev">Web Development</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="SEO">SEO Strategy</option>
                      <option value="Add-on">Layanan Tambahan</option>
                    </select>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <input
                      type="text"
                      placeholder="Deskripsi pengerjaan..."
                      value={item.description}
                      onChange={e => {
                        const newItems = [...items];
                        newItems[index].description = e.target.value;
                        setItems(newItems);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-2.5 py-1.5 text-xs text-white"
                      required
                    />
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <select
                      value={item.fee_type}
                      onChange={e => {
                        const newItems = [...items];
                        newItems[index].fee_type = e.target.value as any;
                        setItems(newItems);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-2 py-1.5 text-xs text-white"
                    >
                      <option value="one_time">One-time (Setup)</option>
                      <option value="monthly">Monthly (Retainer)</option>
                    </select>
                  </div>
                  <div className="col-span-5 md:col-span-2">
                    <input
                      type="number"
                      placeholder="Harga"
                      value={item.price}
                      onChange={e => {
                        const newItems = [...items];
                        newItems[index].price = Number(e.target.value);
                        setItems(newItems);
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-2.5 py-1.5 text-xs text-white text-right"
                    />
                  </div>
                  <div className="col-span-1 text-right">
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Summaries */}
            <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-right">
              <div>
                <span className="text-xs text-slate-400 block">Total Setup Fee (One-time)</span>
                <span className="text-lg font-bold text-white">
                  Rp {oneTimeTotal.toLocaleString('id-ID')}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Total Retainer (Bulanan)</span>
                <span className="text-lg font-bold text-teal-400">
                  Rp {monthlyTotal.toLocaleString('id-ID')}/bln
                </span>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}