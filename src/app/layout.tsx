import type { Metadata } from 'next';
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar, Footer, ScrollToTop } from '@/components';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '천태사 - 마음의 평화를 찾는 곳',
  description:
    '천태사는 전통과 현대가 조화를 이루는 사찰입니다. 기도, 제사, 시주 등 다양한 불교 의식을 진행하고 있습니다.',
  keywords: ['천태사', '사찰', '불교', '기도', '제사', '천도재', '시주', '서울 사찰'],
  authors: [{ name: '천태사' }],
  creator: '천태사',
  publisher: '천태사',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '천태사 - 마음의 평화를 찾는 곳',
    description: '전통과 현대가 조화를 이루는 사찰, 천태사입니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.cheontaesa.com',
    siteName: '천태사',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Aph59lbPlSOR4dDW1yLNJmTNd164xvZwKswaJUtcMzA', // Google Search Console 인증 코드
    // naver: 'naver-site-verification-code', // 네이버 웹마스터 인증 코드 추가
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* DNS Prefetch & Preconnect for performance */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        
        {/* FontAwesome - 직접 로드 (빠른 렌더링) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${notoSansKr.variable} ${notoSerifKr.variable} font-sans text-gray-800`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

