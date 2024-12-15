'use client'


import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
    <main className="w-full" >
        {/* 메인 비주얼 섹션 */}
        <section className="relative w-full h-[600px]">
        <Image
        src="/images/humen.jpg"
        alt="천태사 전경"
        fill
        className="object-cover"
        priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-bold mb-6"></h1>
            <p className="text-2xl"></p>
        </div>
        </section>

      {/* 주지스님 인사말 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">주지스님 인사말</h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/humen.jpg"
                alt="주지스님"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                부처님의 가르침 안에서 평화를 찾는 천태사에 오신 것을 환영합니다.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                우리 천태사는 불자님들의 신행생활과 수행의 도량으로서
                항상 부처님의 가르침을 실천하고 전하는데 최선을 다하고 있습니다.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                이곳에서 부처님의 지혜와 자비를 느끼시고
                마음의 평화를 얻으시기를 기원합니다.
              </p>
              <p className="text-right text-xl font-bold mt-8">
                천태사 주지 ○○○
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 알림마당 */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/images/background2.png')" }}
        >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-[#fff] font-bold mb-4">알림마당</h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 공지사항 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">공지사항</h3>
                <Link href="/notice" className="text-gray-500 hover:text-yellow-600">
                  더보기 +
                </Link>
              </div>
              <ul className="space-y-4">
                {[
                  { date: '2023.11.26', title: '동안거 결제 법회 안내' },
                  { date: '2023.11.25', title: '12월 템플스테이 프로그램 안내' },
                  { date: '2023.11.24', title: '송년법회 참가 신청 안내' },
                ].map((notice, index) => (
                  <li key={index} className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium hover:text-yellow-600 cursor-pointer">
                      {notice.title}
                    </span>
                    <span className="text-gray-500 text-sm">{notice.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* 법회안내 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">법회안내</h3>
                <Link href="/schedule" className="text-gray-500 hover:text-yellow-600">
                  더보기 +
                </Link>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">새벽예불</span>
                  <span className="text-gray-500">매일 04:30</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">석가예불</span>
                  <span className="text-gray-500">매일 19:00</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">일요법회</span>
                  <span className="text-gray-500">매주 일요일 10:30</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 사찰안내 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">사찰안내</h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/fullshot.jpeg"
                alt="대웅전"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">대웅전</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/temple2.jpg"
                alt="종각"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">종각</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/temple3.jpg"
                alt="산책로"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">산책로</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">오시는 길</h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 h-full bg-gray-200 rounded-lg">
              <div className="w-full h-full">
              <Image
                src="/images/map.png"
                alt="지도"
                width={600}
                height={400}
                className="object-cover"
              />

              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">주소</h3>
                <p className="text-gray-700">경기도 XX시 XX구 XX로 123</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">대중교통</h3>
                <p className="text-gray-700">지하철: X호선 XX역 2번 출구</p>
                <p className="text-gray-700">버스: 123번, 456번</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">문의전화</h3>
                <p className="text-gray-700">TEL: 02-XXX-XXXX</p>
                <p className="text-gray-700">FAX: 02-XXX-XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}