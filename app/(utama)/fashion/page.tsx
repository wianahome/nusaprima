'use client';

import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, Menu, X, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Blouse Linen Warm Rose',
    price: 'Rp 349.000',
    category: 'Atasan',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Jumpsuit Terrace Mustard',
    price: 'Rp 489.000',
    category: 'Jumpsuit',
    image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Kemeja Oversized Terracotta',
    price: 'Rp 299.000',
    category: 'Atasan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Trouser Highwaist Sand',
    price: 'Rp 379.000',
    category: 'Bawahan',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Casual Dress Warm Peach',
    price: 'Rp 429.000',
    category: 'Dress',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Blazer Classic Espresso',
    price: 'Rp 599.000',
    category: 'Outwear',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  },
];

export default function TokoBajuFashion() {
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Atasan', 'Bawahan', 'Dress', 'Jumpsuit', 'Outwear'];

  const filteredProducts = activeCategory === 'Semua'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2623] font-sans">
      {/* Top Banner Promo */}
      <div className="bg-[#E27D60] text-white text-xs font-medium py-2 text-center tracking-wide">
        Diskon Hingga 30% Untuk Koleksi Musim Panas | Bebas Ongkir Seluruh Indonesia
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-serif font-bold tracking-tight text-[#2C2623]">
              Huson<span className="text-[#E27D60]">.</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              {['Koleksi Baru', 'Wanita', 'Pria', 'Aksesoris', 'Promo'].map((item) => (
                <a key={item} href="#" className="hover:text-[#E27D60] transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-700 hover:text-[#E27D60] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-[#E27D60] transition-colors relative hidden sm:block">
              <Heart className="w-5 h-5" />
            </button>
            
            {/* Cart Button */}
            <button className="relative flex items-center gap-2 bg-[#2C2623] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#E27D60] transition-all">
              <ShoppingBag className="w-4 h-4" />
              <span>Keranjang</span>
              {cartCount > 0 && (
                <span className="bg-[#E27D60] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-[#F5EBE6] rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#EAE3D9]">
          <div className="max-w-xl space-y-4">
            <span className="text-[#E27D60] text-xs font-bold uppercase tracking-widest">Koleksi Terbaru 2026</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#2C2623] leading-tight">
              Fashion Minimalis & Elegansi Nyaman.
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Didesain khusus untuk kenyamanan harian Anda dengan bahan premium bermotif netral yang elegan.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center gap-2 bg-[#E27D60] text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#d06b4f] transition-colors shadow-lg shadow-[#E27D60]/20">
                Jelajahi Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Feature Card */}
          <div className="w-full md:w-80 aspect-[4/5] bg-white p-3 rounded-2xl shadow-xl border border-gray-100 relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
              alt="Hero Showcase" 
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/50 text-center">
              <p className="text-xs text-gray-500 font-medium">Trending Minggu Ini</p>
              <p className="text-sm font-bold text-[#2C2623]">Blouse Linen Warm Rose</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#E27D60] text-white shadow-md shadow-[#E27D60]/20'
                  : 'bg-white text-gray-600 hover:bg-[#F5EBE6] border border-[#EAE3D9]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl p-4 border border-[#EAE3D9] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#F5EBE6] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <button 
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-gray-700 hover:text-[#E27D60] transition-colors"
                  aria-label="Favorite"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div>
                <span className="text-[11px] font-semibold text-[#E27D60] tracking-wider uppercase">
                  {product.category}
                </span>
                <h3 className="text-base font-semibold text-[#2C2623] mt-1 mb-2 group-hover:text-[#E27D60] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-bold text-gray-900 mb-4">
                  {product.price}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={() => setCartCount(prev => prev + 1)}
                className="w-full py-2.5 rounded-xl bg-[#F5EBE6] text-[#2C2623] font-medium text-xs hover:bg-[#E27D60] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                + Tambah Keranjang
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-[#2C2623] text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-serif font-bold">Huson.</h2>
            <p className="text-xs text-gray-400 mt-1">Platform e-commerce fashion terintegrasi.</p>
          </div>
          <p className="text-xs text-gray-400">© 2026 TokoBaju Fashion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}