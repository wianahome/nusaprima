'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase, Invoice } from '@/lib/supabase';
import { Printer, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ViewInvoicePage() {
  const { id } = useParams();
  const router = useRouter();
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    if (id) fetchInvoice();
  }, [id]);

  const fetchInvoice = async () => {
    const { data: inv } = await supabase.from('invoices').select('*').eq('id', id).single();
    if (inv) {
      const { data: items } = await supabase.from('invoice_items').select('*').eq('invoice_id', id);
      setInvoice({ ...inv, invoice_items: items || [] });
    }
  };

  const formatIDR = (val: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  if (!invoice) return <div className="p-8 text-white">Memuat dokumen invoice...</div>;

  return (
    <div className="pb-16">
      {/* Top Action Bar */}
      <div className="print:hidden flex justify-between items-center mb-6">
        <button
          onClick={() => router.push('/admin/file/invoices')}
          className="flex items-center space-x-2 text-slate-400 hover:text-white text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Invoice</span>
        </button>

        <button
          onClick={() => window.print()}
          className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition"
        >
          <Printer className="w-4 h-4" />
          <span>Cetak / Simpan PDF</span>
        </button>
      </div>

      {/* Printable Invoice Sheet */}
      <div className="bg-white text-slate-900 rounded-xl p-8 sm:p-12 shadow-2xl print:shadow-none print:p-0">
        <div className="flex justify-between items-start border-b border-slate-200 pb-8 mb-8">
          <div className="flex items-center space-x-4">
            <img src="/logo-nusaprima.png" alt="NusaPrimaDigital Logo" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-slate-900">NusaPrimaDigital</h1>
              <p className="text-xs text-slate-500">Jasa Web Dev, SEO & Google Ads</p>
              <p className="text-xs text-slate-500">www.nusaprimadigital.com</p>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-2">
              INVOICE TAGIHAN
            </span>
            <div className="font-mono text-base font-bold text-slate-800">{invoice.invoice_number}</div>
            <div className="text-xs text-slate-500">Tanggal: {invoice.invoice_date}</div>
            <div className="text-xs text-rose-600 font-semibold">Jatuh Tempo: {invoice.due_date}</div>
          </div>
        </div>

        {/* Client & Status */}
        <div className="grid grid-cols-2 gap-8 mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Tagihan Kepada:</span>
            <div className="font-bold text-slate-800">{invoice.client_name}</div>
            <div className="text-sm text-slate-600">{invoice.client_company || '-'}</div>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Status Pembayaran:</span>
            <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase ${
              invoice.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}>
              {invoice.status}
            </span>
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full text-left text-xs mb-8 border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-800 text-slate-700 uppercase tracking-wider">
              <th className="py-3 px-2">Kategori</th>
              <th className="py-3 px-2">Deskripsi Layanan</th>
              <th className="py-3 px-2 text-right">Jumlah</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {invoice.invoice_items?.map((item, idx) => (
              <tr key={idx}>
                <td className="py-3.5 px-2 font-semibold text-slate-800">{item.category}</td>
                <td className="py-3.5 px-2 text-slate-600">{item.description}</td>
                <td className="py-3.5 px-2 text-right font-medium text-slate-800">{formatIDR(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Calculation */}
        <div className="border-t-2 border-slate-800 pt-4 flex justify-end">
          <div className="w-full sm:w-1/2 space-y-2">
            <div className="flex justify-between text-base font-bold text-slate-900 bg-slate-100 p-3 rounded">
              <span>TOTAL TAGIHAN:</span>
              <span className="text-teal-700">{formatIDR(invoice.total_amount)}</span>
            </div>
          </div>
        </div>

        {/* Payment Transfer Info */}
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-600">
          <div className="font-bold text-slate-800 mb-2">Instruksi Pembayaran:</div>
          <p className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-slate-700">
            {invoice.notes}
          </p>
        </div>
      </div>
    </div>
  );
}