'use client';

import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">천태사 소개</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">인사말</h3>
            <p className="text-gray-600 leading-relaxed text-lg">천태사를 찾아주신 여러분을 환영합니다.</p>
            <p className="text-gray-600 leading-relaxed text-lg">
              저희 천태사는 전통 불교의 가르침을 바탕으로 현대인의 마음에 평화와 위안을 전하고자 합니다.
              복잡한 일상에서 벗어나 고요한 사찰에서 마음의 쉼표를 찾아보세요.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              항상 여러분의 건강과 행복을 기원하며, 부처님의 자비가 함께하기를 바랍니다.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-100 to-amber-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">사찰 정보</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-amber-700 mt-1 mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-900">주소</p>
                    <p className="text-gray-600">경기 광주시 초월읍 도평길 241-2</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone text-amber-700 mt-1 mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-900">전화</p>
                    <p className="text-gray-600">0507-1366-8392</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock text-amber-700 mt-1 mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-900">운영시간</p>
                    <p className="text-gray-600">09:00 ~ 17:00</p>
                    <p className="text-gray-500 text-sm">(점심시간 11:30 ~ 12:30)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


