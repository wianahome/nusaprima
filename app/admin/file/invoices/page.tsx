'use client';

import { useState, useEffect } from 'react';
import { supabase, Invoice } from '@/lib/supabase';
import Link from 'next/link';
import { Eye, Search, Receipt, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function InvoicesListPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('invoices')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setInvoices(data);
    setLoading(false);
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('invoices').update({ status }).eq('id', id);
    if (!error) {
      setInvoices(invoices.map(inv => inv.id === id ? { ...inv, status: status as any } : inv));
    }
  };

  const formatIDR = (val: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  const filteredInvoices = invoices.filter(inv =>
    inv.client_name.toLowerCase().includes(search.toLowerCase()) ||
    inv.invoice_number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Daftar Tagihan (Invoice)</h1>
          <p className="text-slate-400 text-sm mt-1">Pantau pembayaran dari klien NusaPrimaDigital</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Cari invoice atau klien..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 w-64"
          />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-500">Memuat data invoice...</div>
        ) : filteredInvoices.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <Receipt className="w-12 h-12 text-slate-700 mx-auto mb-3" />
            Belum ada invoice yang terbit. Buka proposal yang disetujui dan klik "Terbitkan Invoice".
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">No. Invoice</th>
                  <th className="py-3.5 px-4">Klien</th>
                  <th className="py-3.5 px-4">Jatuh Tempo</th>
                  <th className="py-3.5 px-4">Total Tagihan</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredInvoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-800/40 transition">
                    <td className="py-4 px-4 font-mono font-medium text-teal-400">{inv.invoice_number}</td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-white">{inv.client_name}</div>
                      <div className="text-xs text-slate-400">{inv.client_company || '-'}</div>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-300">{inv.due_date}</td>
                    <td className="py-4 px-4 font-bold text-white">{formatIDR(inv.total_amount)}</td>
                    <td className="py-4 px-4">
                      <select
                        value={inv.status}
                        onChange={(e) => handleUpdateStatus(inv.id!, e.target.value)}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-950 border focus:outline-none ${
                          inv.status === 'Paid' ? 'text-emerald-400 border-emerald-500/30' :
                          inv.status === 'Overdue' ? 'text-rose-400 border-rose-500/30' :
                          'text-amber-400 border-amber-500/30'
                        }`}
                      >
                        <option value="Unpaid">Belum Dibayar (Unpaid)</option>
                        <option value="Paid">Lunas (Paid)</option>
                        <option value="Overdue">Jatuh Tempo (Overdue)</option>
                        <option value="Cancelled">Dibatalkan</option>
                      </select>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/admin/file/invoices/${inv.id}`}
                        className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition inline-block"
                        title="Cetak Invoice"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
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