// lib/google-ads.ts
export const reportWaConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18134268066/d-8ZCI_liKYcEKLxi8dD', // Gunakan ID & Label yang sama untuk semua tombol WA
    });
  }
};