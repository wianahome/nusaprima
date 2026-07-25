'use client';

import { useState, useEffect } from 'react';
import { supabase, Proposal } from '@/lib/supabase';
import Link from 'next/link';
import { Edit, Trash2, Eye, Plus, Search, FileText } from 'lucide-react';

export default function DashboardPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('proposals')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProposals(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string, number: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus penawaran ${number}?`)) {
      const { error } = await supabase.from('proposals').delete().eq('id', id);
      if (!error) {
        setProposals(proposals.filter((p) => p.id !== id));
      } else {
        alert('Gagal menghapus penawaran');
      }
    }
  };

  const filteredProposals = proposals.filter((p) =>
    p.client_name.toLowerCase().includes(search.toLowerCase()) ||
    p.client_company?.toLowerCase().includes(search.toLowerCase()) ||
    p.proposal_number.toLowerCase().includes(search.toLowerCase())
  );

  const formatIDR = (val: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="space-y-6">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Daftar Penawaran Harga</h1>
          <p className="text-slate-400 text-sm mt-1">
            Kelola data proposal Web Dev, SEO, dan Google Ads NusaPrimaDigital
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cari klien atau nomor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 w-64"
            />
          </div>

          <Link
            href="/admin/file/new"
            className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm px-4 py-2 rounded-lg transition shadow-lg shadow-teal-500/10"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Proposal</span>
          </Link>
        </div>
      </div>

      {/* Main Proposal Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-500">Memuat data penawaran...</div>
        ) : filteredProposals.length === 0 ? (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-slate-700 mx-auto mb-3" />
            <p className="text-slate-400 mb-4">Belum ada penawaran harga yang dibuat.</p>
            <Link
              href="/admin/file/new"
              className="inline-flex items-center space-x-2 bg-teal-500 text-slate-950 font-semibold px-4 py-2 rounded-lg hover:bg-teal-400 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Buat Penawaran Pertama</span>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">No. Penawaran</th>
                  <th className="py-3.5 px-4">Klien / Perusahaan</th>
                  <th className="py-3.5 px-4">Paket</th>
                  <th className="py-3.5 px-4">Setup Fee</th>
                  <th className="py-3.5 px-4">Monthly Retainer</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredProposals.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition">
                    <td className="py-4 px-4 font-mono font-medium text-teal-400">
                      <Link href={`/admin/file/${item.id}`} className="hover:underline">
                        {item.proposal_number}
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-white">{item.client_name}</div>
                      <div className="text-xs text-slate-400">{item.client_company || '-'}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-xs font-medium text-slate-300">
                        {item.package_tier}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-medium text-white">{formatIDR(item.one_time_fee)}</td>
                    <td className="py-4 px-4 font-medium text-teal-300">{formatIDR(item.monthly_retainer)}/bln</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Accepted' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        item.status === 'Sent' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                        item.status === 'Declined' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                        'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right space-x-2">
                      <Link
                        href={`/admin/file/${item.id}`}
                        className="inline-p-1.5 p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition inline-block"
                        title="Lihat Detail / Cetak PDF"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/admin/file/${item.id}/edit`}
                        className="inline-p-1.5 p-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-md transition inline-block"
                        title="Edit Penawaran"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id!, item.proposal_number)}
                        className="p-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-md transition inline-block"
                        title="Hapus Penawaran"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}