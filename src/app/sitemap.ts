import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cheontaesa.com';
  
  // 정적 페이지
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/notice`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  // 동적 뉴스 페이지 (예시 - 실제 데이터로 대체 필요)
  const newsPages = Array.from({ length: 6 }, (_, i) => ({
    url: `${baseUrl}/news/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // 동적 공지사항 페이지 (예시 - 실제 데이터로 대체 필요)
  const noticePages = Array.from({ length: 6 }, (_, i) => ({
    url: `${baseUrl}/notice/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...newsPages, ...noticePages];
}

