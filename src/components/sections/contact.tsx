'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export function Contact() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      if (!mapRef.current || !window.kakao || !window.kakao.maps) return;

      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.380669, 127.286669), // 천태사 좌표
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);

      // 마커 표시
      const markerPosition = new window.kakao.maps.LatLng(37.380669, 127.286669);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      // 정보 창 표시
      const infowindow = new window.kakao.maps.InfoWindow({
        content: '<div style="padding:10px;font-size:14px;font-weight:bold;">천태사</div>',
      });
      infowindow.open(map, marker);
    };

    // Kakao Map API 스크립트 로드
    if (typeof window !== 'undefined' && !window.kakao) {
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY&autoload=false`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(loadKakaoMap);
      };
      document.head.appendChild(script);
    } else if (window.kakao && window.kakao.maps) {
      loadKakaoMap();
    }
  }, []);

  return (
    <section 
      id="contact" 
      className="py-20 bg-white"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 
            id="contact-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
          >
            오시는 길
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4" aria-hidden="true"></div>
          <p className="text-gray-600 text-lg">천태사를 방문하시는 길을 안내해드립니다</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Kakao Map */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative h-auto lg:h-full">
            <div
              ref={mapRef}
              className="w-full h-full"
              style={{ minHeight: '400px' }}
              role="application"
              aria-label="천태사 위치 지도"
            />
          </div>

          {/* Contact Info */}
          <aside className="space-y-8" aria-label="연락처 정보">
            <div className="bg-gradient-to-br from-amber-50 to-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h3>

              <address className="space-y-6 not-italic">
                <div className="flex items-start">
                  <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">주소</h4>
                    <p className="text-gray-600">경기 광주시 초월읍 도평길 241-1</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">전화번호</h4>
                    <a 
                      href="tel:0507-1366-8392"
                      className="text-gray-600 hover:text-amber-700 transition-colors"
                      aria-label="전화번호 0507-1366-8392로 전화걸기"
                    >
                      대표: 0507-1366-8392
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">운영시간</h4>
                    <p className="text-gray-600">
                      평일: <time dateTime="09:00">09:00</time> ~ <time dateTime="17:00">17:00</time>
                    </p>
                    <p className="text-gray-600">
                      점심시간: <time dateTime="11:30">11:30</time> ~ <time dateTime="12:30">12:30</time>
                    </p>
                    <p className="text-amber-700 text-sm mt-2">※ 주말 및 공휴일 별도 문의</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                    <i className="fas fa-bus"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">대중교통</h4>
                    <p className="text-gray-600">
                      경강선 초월역 하차 후 택시 이용, 이동시간 10분 소요
                      <br />
                      경기광주역 하차 후 택시 이용, 이동시간 10분 소요
                      <br />
                      초월역 버스정류장 - 35-20번 탑승 - 소쌍.동광.E편한세상.모아미래도 하차 후 도보 10분
                      <br />
                      초월역 버스정류장 - 300번 탑승 - 소쌍.동광.E편한세상.모아미래도 하차 후 도보 10분
                      </p>
                  </div>
                </div>
              </address>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:050713668392"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white py-4 px-6 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                aria-label="천태사 전화 연결: 0507-1366-8392"
              >
                <i className="fas fa-phone mr-2" aria-hidden="true"></i>전화하기
              </a>
              <a
                href="https://map.naver.com/p/search/경기%20광주시%20초월읍%20도평길%20241-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="네이버 지도에서 천태사 위치 보기 (새 창에서 열림)"
              >
                <i className="fas fa-map-marked-alt mr-2" aria-hidden="true"></i>네이버 지도
              </a>
              <a
                href="https://map.kakao.com/link/map/천태사,37.380669,127.286669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                aria-label="카카오맵에서 천태사 위치 보기 (새 창에서 열림)"
              >
                <i className="fas fa-map-marked-alt mr-2" aria-hidden="true"></i>카카오맵
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}



