import Image from 'next/image'
import { Metadata } from "next";
import Link from 'next/link'
import MainWebBannerComponent from '@/component/Banner/Banner'

export const metadata: Metadata = {
  title: "천태사 홈",
  description: "천태사 공지사항, 법회안내, 사찰안내, 오시는 길, 천태사 홈, 천태사 홈 정보, 천태사 홈 예약"
}

export default function Home() {
    return (
    <main className="w-full" >
              <section>

        {/* 메인 비주얼 섹션 */}
        <MainWebBannerComponent />
            <h1 className="text-6xl font-bold mb-2"></h1>
            <p className="text-2xl"></p>
      
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
                priority
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <p className="text-lg leading-relaxed text-gray-700">
                부처님의 가르침 안에서 평화를 찾는 천태사에 오신 것을 환영합니다.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                우리 천태사는 불자님들의 신행생활과 수행의 도량으로서
                항상 부처님의 <br />가르침을 실천하고 전하는데 최선을 다하고 있습니다.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                이곳에서 부처님의 지혜와 자비를 느끼시고
                마음의 평화를 얻으시기를<br /> 기원합니다.
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
                  { date: '2023.11.26', title: '인등/연등 접수안내' },
                  { date: '2023.11.25', title: '촛불 접수 안내' },
                  { date: '2023.11.24', title: '천도제(영가 위패)접수 안내' },
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
                <Link href="/regular" className="text-gray-500 hover:text-yellow-600">
                  더보기 +
                </Link>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">초하루법회</span>
                  <span className="text-gray-500">매월 음력 1일</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">일요법회</span>
                  <span className="text-gray-500">매주 일요일 10:30</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">주요행사</span>
                  <span className="text-gray-500">변동 가능</span>
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
                src="/images/option.jpeg"
                alt="칠성각"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">칠성각</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/main.jpeg"
                alt="대웅전"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">대웅전</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/road.jpeg"
                alt="산신각"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">산신각</span>
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
                priority
              />

              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
        천태사
      </h1>
      <p style={{ marginBottom: "20px", fontSize: "16px", color: "black" }}>
        경기 광주시 초월읍 도평길 241-2
      </p>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            🚇 지하철
          </h2>
          <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            경강선 초월역 하차 후 택시 이용, 이동시간 10분 소요
            <br />
            경강선 경기광주역 하차 후 택시 이용, 이동시간 10분 소요
            <br />
          </p>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            🚌 버스
          </h2>
          <p style={{ lineHeight: "1.6" }}>
            초월역 버스정류장 - 35-20번 탑승 - 소쌍.동광.E편한세상.모아미래도 하차 후 도보 10분
            <br />
            초월역 버스정류장 - 300번 탑승 - 소쌍.동광.E편한세상.모아미래도 하차 후 도보 10분
            <br />
            초월역 버스정류장 - 114번 탑승 - 소쌍.동광.E편한세상.모아미래도 하차 후 도보 10분
            <br />
            경기광주역 버스정류장 - 431 탑승 - 도평우림아파트 하차 후 도보 20분
            <br />
            경기광주역 버스정류장 - 432 탑승 - 우림아파트 하차 후 도보 20분
          </p>
        </div>
          </div>
        </div>
      </section>
    </main>
  )
}