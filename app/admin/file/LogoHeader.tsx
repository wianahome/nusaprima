import Image from 'next/image';
import Link from 'next/link';
import { PlusCircle, FileText } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-800 p-1 border border-slate-700">
            {/* Logo NusaPrimaDigital */}
            <img 
              src="/logo-nusaprima.png" 
              alt="NusaPrimaDigital Logo" 
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              NusaPrimaDigital
            </span>
            <span className="block text-xs text-slate-400">Proposal & Quotation Builder</span>
          </div>
        </Link>

        <div className="flex items-center space-x-3">
          <Link
            href="/admin/file/new"
            className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-teal-500/20"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Buat Penawaran</span>
          </Link>
        </div>
      </div>
    </header>
  );
}