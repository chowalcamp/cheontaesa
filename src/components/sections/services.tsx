'use client';

import Image from 'next/image';
import type { Service } from '@/types';

const services: Service[] = [
  {
    id: '1',
    title: '기도',
    description:
      '개인의 소원 성취와 가족의 건강, 사업의 번창을 위한 다양한 기도 의식을 진행합니다. 정성스러운 마음으로 부처님께 기원하는 시간입니다.',
    items: ['산신기도', '칠성기도', '백일기도', '특별기도'],
    icon: 'fa-hands-praying',
    gradient: 'from-amber-800 to-amber-600',
    imageUrl: '/images/regular/pray.jpeg',
  },
  {
    id: '2',
    title: '제사 (천도재)',
    description:
      '돌아가신 조상님과 영가를 위한 천도재를 정성껏 봉행합니다. 망자의 극락왕생과 유족의 위안을 기원합니다.',
    items: ['49재', '기제사', '합동천도재', '위령제'],
    icon: 'fa-dharmachakra',
    gradient: 'from-gray-800 to-gray-600',
    imageUrl: '/images/sacrifice/baekjuongze.jpeg',
  },
  {
    id: '3',
    title: '시주',
    description:
      '불자님들의 정성어린 시주는 사찰 운영과 불사에 사용됩니다. 보시를 통해 공덕을 쌓고 복을 받으시기 바랍니다.',
    items: ['일반시주', '불사시주', '공양시주', '특별시주'],
    icon: 'fa-hand-holding-heart',
    gradient: 'from-amber-700 to-amber-500',
    imageUrl: '/images/offering/fire.jpeg',
  },
];

export function Services() {
  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 
            id="services-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
          >
            운영 안내
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4" aria-hidden="true"></div>
          <p className="text-gray-600 text-lg">천태사에서 운영하는 다양한 행사입니다</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              aria-labelledby={`service-${service.id}-title`}
            >
              {/* 이미지 */}
              <div className="relative h-48 overflow-hidden">
                {service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    alt={`${service.title} - 천태사 ${service.title} 행사 이미지`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={75}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className={`h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <i className={`fas ${service.icon} text-white text-6xl`} aria-hidden="true"></i>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" aria-hidden="true"></div>
              </div>
              
              <div className="p-8">
                <h3 
                  id={`service-${service.id}-title`}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 text-gray-600" aria-label={`${service.title} 세부 항목`}>
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-amber-700 mr-2" aria-hidden="true"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


