import type { Metadata, Viewport } from 'next';
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar, Footer, ScrollToTop } from '@/components';
import Script from 'next/script';
import { ReactQueryProvider } from '@/providers/react-query-provider';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'], // ✅ LCP 개선: 필수 weight만 로드
  variable: '--font-noto-sans-kr',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '700'], // ✅ LCP 개선: 필수 weight만 로드
  variable: '--font-noto-serif-kr',
  display: 'swap',
  preload: false, // ✅ Hero에서 사용하지 않으므로 preload 제거
  fallback: ['serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cheontaesa.com'),
  title: {
    default: '천태사 - 마음의 평화를 찾는 곳',
    template: '%s | 천태사',
  },
  description:
    '천태사는 전통과 현대가 조화를 이루는 사찰입니다. 기도, 제사, 시주 등 다양한 불교 의식을 진행하고 있습니다.',
  keywords: ['천태사', '사찰', '불교', '기도', '제사', '천도재', '시주', '서울 사찰', '템플스테이', '법회'],
  authors: [{ name: '천태사', url: 'https://www.cheontaesa.com' }],
  creator: '천태사',
  publisher: '천태사',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: 'any' },
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: '천태사 - 마음의 평화를 찾는 곳',
    description: '전통과 현대가 조화를 이루는 사찰, 천태사입니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.cheontaesa.com',
    siteName: '천태사',
    images: [
      {
        url: '/images/main.jpeg',
        width: 1200,
        height: 630,
        alt: '천태사 전경',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '천태사 - 마음의 평화를 찾는 곳',
    description: '전통과 현대가 조화를 이루는 사찰, 천태사입니다.',
    images: ['/images/main.jpeg'],
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
    google: 'Aph59lbPlSOR4dDW1yLNJmTNd164xvZwKswaJUtcMzA',
  },
  alternates: {
    canonical: 'https://www.cheontaesa.com',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#b45309',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* Permissions Policy - 센서 기능 차단하여 경고 제거 */}
        <meta
          httpEquiv="Permissions-Policy"
          content="accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
        />
        
        {/* DNS Prefetch & Preconnect for performance */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org JSON-LD 구조화된 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ReligiousOrganization',
              name: '천태사',
              description: '전통과 현대가 조화를 이루는 사찰',
              url: 'https://www.cheontaesa.com',
              logo: 'https://www.cheontaesa.com/images/logo.png',
              image: 'https://www.cheontaesa.com/images/main.jpeg',
              telephone: '+82-507-1366-8392',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'KR',
                addressLocality: '경기도 광주시',
                addressRegion: '초월읍',
                postalCode: '12345',
                streetAddress: '도평길 241-2',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${notoSansKr.variable} ${notoSerifKr.variable} font-sans text-gray-800`}>
        <ReactQueryProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-amber-700 focus:text-white">
            본문으로 건너뛰기
          </a>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ReactQueryProvider>
        
        {/* FontAwesome - 비차단 로드 */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/js/all.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

