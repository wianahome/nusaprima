'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Utensils, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  DollarSign, 
  CreditCard, 
  Clock, 
  Search, 
  Bell, 
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Plus
} from 'lucide-react'

// Dummy Data untuk Chart / Metrik
const metrics = [
  {
    title: 'Total Pendapatan',
    value: 'Rp 24.850.000',
    change: '+14.2%',
    isPositive: true,
    icon: DollarSign,
    color: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    title: 'Total Pesanan',
    value: '1,284',
    change: '+8.1%',
    isPositive: true,
    icon: ShoppingBag,
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Pelanggan Baru',
    value: '342',
    change: '-2.4%',
    isPositive: false,
    icon: Users,
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
  },
  {
    title: 'Rata-rata Transaksi',
    value: 'Rp 193.500',
    change: '+5.3%',
    isPositive: true,
    icon: CreditCard,
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
  },
]

// Dummy Data Transaksi Terbaru
const recentOrders = [
  { id: '#ORD-001', table: 'Meja 04', customer: 'Budi Santoso', items: '3x Nasi Goreng, 3x Es Teh', total: 'Rp 135.000', status: 'Selesai', time: '12:45' },
  { id: '#ORD-002', table: 'Meja 12', customer: 'Siti Rahma', items: '2x Steak Ayam, 2x Jus Jeruk', total: 'Rp 180.000', status: 'Proses', time: '12:50' },
  { id: '#ORD-003', table: 'Meja 02', customer: 'Ahmad Rizky', items: '1x Pizza Beef, 2x Cola', total: 'Rp 145.000', status: 'Selesai', time: '13:02' },
  { id: '#ORD-004', table: 'Takeaway', customer: 'Dewi Lestari', items: '4x Burger Special', total: 'Rp 220.000', status: 'Pending', time: '13:15' },
]

export default function RestoPOSDemoPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex font-sans">
      
      {/* 1. SIDEBAR */}
      <aside className="w-64 bg-[#0a0f1d] border-r border-slate-800/80 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo / App Name */}
          <div className="h-16 flex items-center px-6 border-b border-slate-800/80 gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-400 flex items-center justify-center text-black font-bold">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-white tracking-wide text-sm">RestoPOS</h1>
              <p className="text-[10px] text-cyan-400 font-medium">System v2.4</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4 space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'pos', label: 'Kasir & POS', icon: Utensils },
              { id: 'orders', label: 'Pesanan', icon: ShoppingBag },
              { id: 'analytics', label: 'Laporan & Analytics', icon: TrendingUp },
              { id: 'customers', label: 'Pelanggan', icon: Users },
            ].map((menu) => {
              const Icon = menu.icon
              const isActive = activeTab === menu.id
              return (
                <button
                  key={menu.id}
                  onClick={() => setActiveTab(menu.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' 
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {menu.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-slate-800/80">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/50">
            <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center font-semibold text-cyan-400 text-sm">
              AD
            </div>
            <div className="flex-1 overflow-hidden">
              <h4 className="text-xs font-semibold text-white truncate">Admin Resto</h4>
              <p className="text-[10px] text-slate-400 truncate">Kasir Utama</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* TOPBAR */}
        <header className="h-16 bg-[#0a0f1d]/80 backdrop-blur-md border-b border-slate-800/80 px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari pesanan, menu, atau pelanggan..." 
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 absolute top-2 right-2" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs transition-colors shadow-lg shadow-cyan-400/10">
              <Plus className="w-4 h-4" />
              Pesanan Baru
            </button>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <main className="p-6 space-y-6">
          
          {/* Header Title */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Ringkasan Restoran</h2>
              <p className="text-xs text-slate-400">Pantau performa penjualan dan transaksi hari ini.</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 cursor-pointer">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hari Ini: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </div>
          </div>

          {/* METRICS CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-5 rounded-2xl bg-[#0a0f1d] border border-slate-800/80 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} blur-2xl pointer-events-none`} />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-400 font-medium">{item.title}</span>
                    <div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${item.iconColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white mb-2">{item.value}</div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className={`font-semibold flex items-center ${item.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {item.isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                      {item.change}
                    </span>
                    <span className="text-slate-500">vs kemarin</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CHART & ANALYTICS SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Sales Graph Placeholder */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800/80 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-bold text-white">Grafik Penjualan</h3>
                  <p className="text-xs text-slate-400">Statistik transaksi jam ke jam</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                  <span className="text-xs text-slate-400">Dine In</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block ml-2" />
                  <span className="text-xs text-slate-400">Takeaway</span>
                </div>
              </div>

              {/* Visual Bars Mockup */}
              <div className="h-48 flex items-end justify-between gap-2 pt-6">
                {[40, 65, 30, 85, 95, 70, 50, 80, 100, 60, 45, 90].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="w-full flex items-end justify-center gap-1 h-full">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: i * 0.03 }}
                        className="w-full max-w-[12px] bg-cyan-400/80 group-hover:bg-cyan-400 rounded-t-sm transition-colors"
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${height * 0.6}%` }}
                        transition={{ duration: 0.5, delay: i * 0.03 + 0.1 }}
                        className="w-full max-w-[12px] bg-purple-500/80 group-hover:bg-purple-500 rounded-t-sm transition-colors"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500">{`${i + 10}:00`}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Items Card */}
            <div className="p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800/80">
              <h3 className="text-sm font-bold text-white mb-4">Menu Terlaris</h3>
              <div className="space-y-4">
                {[
                  { name: 'Nasi Goreng Spesial', sales: '142 Porsi', price: 'Rp 35.000' },
                  { name: 'Steak Ayam BBQ', sales: '98 Porsi', price: 'Rp 45.000' },
                  { name: 'Es Teh Manis Jumbo', sales: '210 Gelas', price: 'Rp 8.000' },
                  { name: 'Pizza Beef Pepperoni', sales: '64 Porsi', price: 'Rp 65.000' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/50">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">{item.name}</h4>
                      <p className="text-[10px] text-cyan-400">{item.sales}</p>
                    </div>
                    <span className="text-xs font-bold text-white">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. RECENT ORDERS TABLE */}
          <div className="p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800/80">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-white">Transaksi Terbaru</h3>
                <p className="text-xs text-slate-400">Daftar pesanan masuk hari ini</p>
              </div>
              <button className="text-xs text-cyan-400 hover:underline">Lihat Semua</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-3 font-semibold">ID Pesanan</th>
                    <th className="pb-3 font-semibold">Lokasi/Meja</th>
                    <th className="pb-3 font-semibold">Pelanggan</th>
                    <th className="pb-3 font-semibold">Detail Menu</th>
                    <th className="pb-3 font-semibold">Total</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {recentOrders.map((order, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 font-mono text-cyan-400 font-semibold">{order.id}</td>
                      <td className="py-3 text-slate-200">{order.table}</td>
                      <td className="py-3 text-slate-300">{order.customer}</td>
                      <td className="py-3 text-slate-400 max-w-xs truncate">{order.items}</td>
                      <td className="py-3 font-bold text-white">{order.total}</td>
                      <td className="py-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                          order.status === 'Selesai' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : order.status === 'Proses'
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <button className="p-1 text-slate-400 hover:text-white">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>

    </div>
  )
}