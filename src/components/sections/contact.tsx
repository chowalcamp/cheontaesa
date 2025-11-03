'use client';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">오시는 길</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">천태사를 방문하시는 길을 안내해드립니다</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Naver Map */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative h-auto lg:h-full">
            <iframe
              src="https://map.naver.com/p/search/천태사?c=15.00,0,0,0,dh"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">주소</h4>
                    <p className="text-gray-600">경기 광주시 초월읍 도평길 241-2</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">전화번호</h4>
                    <p className="text-gray-600">대표: 0507-1366-8392</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">운영시간</h4>
                    <p className="text-gray-600">평일: 09:00 ~ 17:00</p>
                    <p className="text-gray-600">점심시간: 11:30 ~ 12:30</p>
                    <p className="text-amber-700 text-sm mt-2">※ 주말 및 공휴일 별도 문의</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
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
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="tel:050713668392"
                className="flex-1 bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-phone mr-2"></i>전화하기
              </a>
              <a
                href="https://map.naver.com/p/search/경기%20광주시%20초월읍%20도평길%242-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-map-marked-alt mr-2"></i>네이버 지도
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



