'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { supabase, Proposal } from '@/lib/supabase';
import { FileCheck, Receipt } from 'lucide-react';
import { 
  LayoutDashboard, 
  FilePlus, 
  FileText, 
  ChevronRight, 
  Globe, 
  Settings, 
  TrendingUp 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentProposals();
  }, []);

  const fetchRecentProposals = async () => {
    // Mengambil 5 proposal terbaru untuk quick access
    const { data } = await supabase
      .from('proposals')
      .select('id, proposal_number, client_name, package_tier')
      .order('created_at', { ascending: false })
      .limit(5);

    if (data) setProposals:(data);
    setLoading(false);
  };

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col h-screen sticky top-0">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800 flex items-center space-x-3">
        <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-slate-800 p-1 border border-slate-700 flex-shrink-0">
          <img 
            src="/logo-nusaprima.png" 
            alt="NusaPrimaDigital Logo" 
            className="object-contain w-full h-full"
          />
        </div>
        <div className="overflow-hidden">
          <span className="text-sm font-bold text-white block truncate">
            NusaPrimaDigital
          </span>
          <span className="text-[10px] text-teal-400 font-medium block">
            Admin Panel
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
            Menu Utama
          </div>
          <nav className="space-y-1">
            <Link
              href="/admin/file"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                pathname === '/admin/file'
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                  : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Daftar Penawaran</span>
            </Link>

            <Link
              href="/admin/file/new"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                pathname === '/admin/file/new'
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                  : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <FilePlus className="w-4 h-4" />
              <span>Buat Penawaran</span>
            </Link>

            <Link
            href="/admin/file/invoices"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                pathname.startsWith('/admin/file/invoices')
                ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
            >
            <Receipt className="w-4 h-4" />
            <span>Daftar Invoice</span>
            </Link>
          </nav>
        </div>

        {/* Quick Links: Recent Proposals */}
        <div>
          <div className="flex justify-between items-center px-3 mb-2">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              Proposal Terbaru
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
              {proposals.length}
            </span>
          </div>

          <div className="space-y-1">
            {loading ? (
              <div className="text-xs text-slate-600 px-3 py-2">Memuat data...</div>
            ) : proposals.length === 0 ? (
              <div className="text-xs text-slate-600 px-3 py-2">Belum ada data</div>
            ) : (
              proposals.map((item) => {
                const isActive = pathname === `/admin/file/${item.id}`;
                return (
                  <Link
                    key={item.id}
                    href={`/admin/file/${item.id}`}
                    className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition ${
                      isActive
                        ? 'bg-slate-800 text-teal-300 font-semibold'
                        : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <FileText className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 flex-shrink-0" />
                      <span className="truncate">{item.client_name}</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-slate-400 flex-shrink-0" />
                  </Link>
                );
              })
            )}
          </div>
        </div>

        {/* Other Admin Services */}
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
            Layanan Utama
          </div>
          <div className="space-y-1 text-xs text-slate-400">
            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800/40 cursor-not-allowed opacity-60">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800/40 cursor-not-allowed opacity-60">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>SEO Audit & Keyword</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/50 text-[11px] text-slate-500 flex justify-between items-center">
        <span>Status System</span>
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Online
        </span>
      </div>
    </aside>
  );
}