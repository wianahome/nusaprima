import React from 'react';
import { Layout, ShoppingCart, Megaphone, Search } from 'lucide-react';

const services = [
    {
        title: "Jasa Pembuatan Website Modern",
        description: "Kami membangun website berperforma tinggi dengan desain UI/UX eksklusif, responsif, dan teknologi terbaru untuk meningkatkan kredibilitas bisnis Anda secara instan.",
        icon: <Layout className="w-10 h-10 text-cyan-400" />,
        tag: "Next.js & Tailwind",
        gradient: "group-hover:from-cyan-500/20 group-hover:to-blue-500/20"
    },
    {
        title: "Website E-Commerce",
        description: "Solusi toko online lengkap dengan integrasi payment gateway dan kurir. Fokus pada konversi penjualan tinggi dan kemudahan manajemen produk dalam satu sistem.",
        icon: <ShoppingCart className="w-10 h-10 text-purple-400" />,
        tag: "High Conversion",
        gradient: "group-hover:from-purple-500/20 group-hover:to-pink-500/20"
    },
    {
        title: "Jasa Google Ads",
        description: "Kampanye iklan berbasis data (SEM) untuk mendatangkan traffic potensial secara cepat. Optimasi bidding dan keyword untuk ROI yang lebih terukur.",
        icon: <Megaphone className="w-10 h-10 text-blue-400" />,
        tag: "Instant Traffic",
        gradient: "group-hover:from-blue-500/20 group-hover:to-indigo-500/20"
    },
    {
        title: "Jasa SEO",
        description: "Meningkatkan peringkat website Anda di halaman pertama Google secara organik guna memastikan bisnis ditemukan oleh calon pelanggan tanpa biaya iklan terus-menerus.",
        icon: <Search className="w-10 h-10 text-green-400" />,
        tag: "Organic Growth",
        gradient: "group-hover:from-green-400/20 group-hover:to-cyan-500/20"
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="bg-black text-white py-32 px-6 scroll-mt-20">
            <div className="max-w-7xl mx-auto">

                {/* Header Lebih Besar */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Layanan Utama <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Nusa Prima</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Solusi digital strategis yang dirancang khusus untuk mendominasi pasar dan mengakselerasi pertumbuhan bisnis Anda.
                    </p>
                </div>

                {/* Grid 2 Kolom Agar Card Terlihat Jauh Lebih Besar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-10 md:p-14 rounded-3xl bg-[#0a0a0a] border border-white/10 transition-all duration-500 hover:-translate-y-4 hover:border-white/30 overflow-hidden shadow-2xl"
                        >
                            {/* Efek Cahaya Latar (Glow) */}
                            <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-700 ${service.gradient} group-hover:opacity-100`} />

                            {/* Garis Neon Atas (Inspirasi image_1d30b9.png) */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />

                            <div className="relative z-10">
                                {/* Icon Ukuran Besar */}
                                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl font-bold mb-5 group-hover:text-cyan-300 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-lg leading-relaxed mb-10 italic">
                                    "{service.description}"
                                </p>

                                {/* Badge Tag Neon */}
                                <span className="inline-block px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase border border-lime-400/40 text-lime-400 bg-lime-400/10 shadow-[0_0_15px_rgba(163,230,53,0.2)]">
                                    {service.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;