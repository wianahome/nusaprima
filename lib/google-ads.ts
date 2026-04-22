// lib/google-ads.ts
export const reportWaConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17941029885/kISECL_ivaAcEP3H-epC', // Gunakan ID & Label yang sama untuk semua tombol WA
    });
  }
};