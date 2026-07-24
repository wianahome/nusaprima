'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingWA } from '@/components/floating-wa';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 1. Daftarkan semua route yang ingin dikecualikan di sini
  const excludedRoutes = [
    '/fashion',
    '/restopos',
    '/propertyhub',
    '/healthcare',
    '/edulearn',
    '/travelgo',
    '/dashboard',
    '/admin',
    '/login',
    '/register',
    '/checkout',
  ];

  // 2. Cek apakah pathname saat ini dimulai dengan salah satu route di atas
  const isExcluded = excludedRoutes.some((route) => pathname.startsWith(route));

  // Jika cocok dengan route yang dikecualikan, tampilkan children saja
  if (isExcluded) {
    return <>{children}</>;
  }

  // Jika tidak, tampilkan dengan Header, Footer, & FloatingWA
  return (
    <>
      <Header />
      {children}
      <FloatingWA />
      <Footer />
    </>
  );
}