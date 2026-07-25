'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase, Proposal } from '@/lib/supabase';
import { Printer, Edit, ArrowLeft } from 'lucide-react';
import Header from '../LogoHeader';
import { FileCheck, Receipt } from 'lucide-react';

export default function ViewProposalPage() {
  const { id } = useParams();
  const router = useRouter();
  const [proposal, setProposal] = useState<Proposal | null>(null);

  useEffect(() => {
    if (id) fetchDetail();
  }, [id]);

  const fetchDetail = async () => {
    const { data: prop } = await supabase.from('proposals').select('*').eq('id', id).single();
    if (prop) {
      const { data: items } = await supabase.from('proposal_items').select('*').eq('proposal_id', id);
      setProposal({ ...prop, proposal_items: items || [] });
    }
  };

  const formatIDR = (val: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  if (!proposal) return <div className="min-h-screen bg-slate-950 text-white p-8">Memuat dokumen penawaran...</div>;

  const handleGenerateInvoice = async () => {
  if (!proposal) return;

  const invoiceNumber = `INV-NPD-${Date.now().toString().slice(-6)}`;
  const today = new Date().toISOString().split('T')[0];
  const dueDate = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0]; // Jatuh tempo 7 hari

  // Hitung total tagihan pertama (Setup Fee + Retainer Bulan ke-1)
  const totalAmount = Number(proposal.one_time_fee) + Number(proposal.monthly_retainer);

  // 1. Simpan Invoice
  const { data: inv, error: invError } = await supabase
    .from('invoices')
    .insert([{
      invoice_number: invoiceNumber,
      proposal_id: proposal.id,
      client_name: proposal.client_name,
      client_company: proposal.client_company,
      client_email: proposal.client_email,
      invoice_date: today,
      due_date: dueDate,
      one_time_fee: proposal.one_time_fee,
      monthly_retainer: proposal.monthly_retainer,
      total_amount: totalAmount,
      status: 'Unpaid',
      notes: 'Pembayaran ditransfer ke BCA 1234567890 a/n NusaPrimaDigital.'
    }])
    .select()
    .single();

  if (invError || !inv) {
    alert('Gagal membuat invoice!');
    return;
  }

  // 2. Salin Item dari Proposal ke Invoice Items
  if (proposal.proposal_items && proposal.proposal_items.length > 0) {
    const itemsToInsert = proposal.proposal_items.map(item => ({
      invoice_id: inv.id,
      category: item.category,
      description: item.description,
      price: item.price
    }));
    await supabase.from('invoice_items').insert(itemsToInsert);
  }

  alert(`Invoice ${invoiceNumber} berhasil dibuat!`);
  router.push(`/admin/file/invoices/${inv.id}`);
};

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      <div className="print:hidden">
        <Header />
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Action Bar */}
        <div className="print:hidden flex justify-between items-center mb-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-slate-400 hover:text-white text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali</span>
          </button>
          <button
            onClick={handleGenerateInvoice}
            className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition"
            >
            <Receipt className="w-4 h-4" />
            <span>Terbitkan Invoice</span>
            </button>

          <div className="flex space-x-3">
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-4 py-2 rounded-lg text-sm border border-slate-700 transition"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={() => router.push(`/proposals/${id}/edit`)}
              className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition"
            >
              <Edit className="w-4 h-4" />
              <span>Edit Penawaran</span>
            </button>
          </div>
        </div>

        {/* Printable Proposal Document */}
        <div className="bg-white text-slate-900 rounded-xl p-8 sm:p-12 shadow-2xl print:shadow-none print:p-0">
          {/* Document Header */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-8 mb-8">
            <div className="flex items-center space-x-4">
              <img
                src="/logo-nusaprima.png"
                alt="NusaPrimaDigital Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-slate-900">NusaPrimaDigital</h1>
                <p className="text-xs text-slate-500">Web Development, SEO & Google Ads Specialist</p>
                <p className="text-xs text-slate-500">www.nusaprimadigital.com</p>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                PENAWARAN HARGA
              </span>
              <div className="font-mono text-sm font-bold text-slate-800">{proposal.proposal_number}</div>
              <div className="text-xs text-slate-500">Tanggal: {new Date(proposal.created_at || '').toLocaleDateString('id-ID')}</div>
            </div>
          </div>

          {/* Client Details */}
          <div className="grid grid-cols-2 gap-8 mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Ditujukan Kepada:</span>
              <div className="font-bold text-slate-800">{proposal.client_name}</div>
              <div className="text-sm text-slate-600">{proposal.client_company || '-'}</div>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Paket Layanan:</span>
              <div className="font-bold text-teal-700">{proposal.package_tier} Package</div>
              <div className="text-xs text-slate-500">Berlaku s/d: {proposal.valid_until}</div>
            </div>
          </div>

          {/* Services Table */}
          <table className="w-full text-left text-xs mb-8 border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-800 text-slate-700 uppercase tracking-wider">
                <th className="py-3 px-2">Kategori</th>
                <th className="py-3 px-2">Deskripsi Pengerjaan</th>
                <th className="py-3 px-2">Tipe Biaya</th>
                <th className="py-3 px-2 text-right">Biaya</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {proposal.proposal_items?.map((item, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-2 font-semibold text-slate-800">{item.category}</td>
                  <td className="py-3.5 px-2 text-slate-600">{item.description}</td>
                  <td className="py-3.5 px-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.fee_type === 'one_time' ? 'bg-slate-200 text-slate-700' : 'bg-teal-100 text-teal-800'
                    }`}>
                      {item.fee_type === 'one_time' ? 'One-time' : 'Bulanan'}
                    </span>
                  </td>
                  <td className="py-3.5 px-2 text-right font-medium text-slate-800">{formatIDR(item.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pricing Summary Box */}
          <div className="border-t-2 border-slate-800 pt-4 flex justify-end">
            <div className="w-full sm:w-1/2 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 font-medium">Setup Fee (Sekali Bayar):</span>
                <span className="font-bold text-slate-900">{formatIDR(proposal.one_time_fee)}</span>
              </div>
              <div className="flex justify-between text-sm text-teal-700 font-bold bg-teal-50 p-2 rounded">
                <span>Monthly Retainer (Per Bulan):</span>
                <span>{formatIDR(proposal.monthly_retainer)}/bln</span>
              </div>
            </div>
          </div>

          {/* Terms & Notes */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-1">
            <div className="font-bold text-slate-700 mb-1">Catatan & Ketentuan:</div>
            <p>1. {proposal.notes}</p>
            <p>2. Pembayaran biaya awal (Setup Fee) dilakukan sebelum proyek dimulai (DP 50%).</p>
            <p>3. Anggaran iklan Google Ads dibayarkan langsung oleh klien via kartu kredit/debit ke Google.</p>
          </div>
        </div>
      </main>
    </div>
  );
}