import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import MainWebBannerComponent from '@/component/Banner/Banner'
import '@/styles/home/home.css'

export const metadata: Metadata = {
  title: '천태사 홈',
  description:
    '천태사 공지사항, 법회안내, 사찰안내, 오시는 길, 천태사 홈, 천태사 홈 예약',
}

export default function Home() {
  return (
    <main className="home-main">
      <section>
        {/* 메인 비주얼 섹션 */}
        <MainWebBannerComponent />
        <h1 className="home-title"></h1>
        <p className="home-subtitle"></p>
      </section>
      
      {/* 주지스님 인사말 */}
      <section className="section-greeting">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">주지스님 인사말</h2>
            <div className="section-divider"></div>
          </div>
          <div className="greeting-content">
            <div className="greeting-image-container">
              <Image
                src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/humen.jpg"
                alt="주지스님"
                width={500}
                height={600}
                className="greeting-image"
                priority
              />
            </div>
            <div className="greeting-text">
              <p className="greeting-paragraph">
                부처님의 가르침 안에서 평화를 찾는 천태사에 오신 것을
                환영합니다.
              </p>
              <p className="greeting-paragraph">
                우리 천태사는 불자님들의 신행생활과 수행의 도량으로서 항상
                부처님의 <br />
                가르침을 실천하고 전하는데 최선을 다하고 있습니다.
              </p>
              <p className="greeting-paragraph">
                이곳에서 부처님의 지혜와 자비를 느끼시고 마음의 평화를
                얻으시기를
                <br /> 기원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 알림마당 */}
      <section className="section-notice">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title notice-title">알림마당</h2>
            <div className="section-divider"></div>
          </div>
          <div className="notice-grid">
            {/* 공지사항 */}
            <div className="notice-card">
              <div className="notice-card-header">
                <h3 className="notice-card-title">공지사항</h3>
                <Link href="/notice" className="notice-more-link">
                  더보기 +
                </Link>
              </div>
              <ul className="notice-list">
                {[
                  { date: '2023.11.26', title: '인등/연등 접수안내' },
                  { date: '2023.11.25', title: '촛불 접수 안내' },
                  { date: '2023.11.24', title: '천도제(영가 위패)접수 안내' },
                ].map((notice, index) => (
                  <li key={index} className="notice-item">
                    <span className="notice-title-text">
                      {notice.title}
                    </span>
                    <span className="notice-date">{notice.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 법회안내 */}
            <div className="notice-card">
              <div className="notice-card-header">
                <h3 className="notice-card-title">법회안내</h3>
                <Link href="/regular" className="notice-more-link">
                  더보기 +
                </Link>
              </div>
              <ul className="notice-list">
                <li className="notice-item">
                  <span className="notice-title-text">초하루법회</span>
                  <span className="notice-date">매월 음력 1일</span>
                </li>
                <li className="notice-item">
                  <span className="notice-title-text">일요법회</span>
                  <span className="notice-date">매주 일요일 10:30</span>
                </li>
                <li className="notice-item">
                  <span className="notice-title-text">주요행사</span>
                  <span className="notice-date">변동 가능</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 사찰안내 */}
      <section className="section-temple">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">사찰안내</h2>
            <div className="section-divider"></div>
          </div>
          <div className="temple-grid">
            <div className="temple-card">
              <Image
                src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/option.jpeg"
                alt="칠성각"
                width={400}
                height={300}
                className="temple-image"
                priority
              />
              <div className="temple-overlay">
                <span className="temple-name">칠성각</span>
              </div>
            </div>
            <div className="temple-card">
              <Image
                src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/main.jpeg"
                alt="대웅전"
                width={400}
                height={300}
                className="temple-image"
                priority
              />
              <div className="temple-overlay">
                <span className="temple-name">대웅전</span>
              </div>
            </div>
            <div className="temple-card">
              <Image
                src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/road.jpeg"
                alt="산신각"
                width={400}
                height={300}
                className="temple-image"
                priority
              />
              <div className="temple-overlay">
                <span className="temple-name">산신각</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="section-directions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">오시는 길</h2>
            <div className="section-divider"></div>
          </div>
          <div className="directions-content">
            <div className="directions-map">
              <Image
                src="https://cheontaesa.s3.eu-north-1.amazonaws.com/images/map.png"
                alt="지도"
                width={600}
                height={400}
                className="map-image"
                priority
              />
            </div>
            <div className="directions-info">
              <h1 className="directions-title">천태사</h1>
              <p className="directions-address">
                경기 광주시 초월읍 도평길 241-2
              </p>
              <h2 className="directions-subtitle">🚇 지하철</h2>
              <p className="directions-text">
                경강선 초월역 하차 후 택시 이용, 이동시간 10분 소요
                <br />
                경강선 경기광주역 하차 후 택시 이용, 이동시간 10분 소요
                <br />
              </p>
              <h2 className="directions-subtitle">🚌 버스</h2>
              <p className="directions-text">
                초월역 버스정류장 - 35-20번 탑승 -
                소쌍.동광.E편한세상.모아미래도 하차 후 도보 10분
                <br />
                초월역 버스정류장 - 300번 탑승 - 소쌍.동광.E편한세상.모아미래도
                하차 후 도보 10분
                <br />
                초월역 버스정류장 - 114번 탑승 - 소쌍.동광.E편한세상.모아미래도
                하차 후 도보 10분
                <br />
                경기광주역 버스정류장 - 431 탑승 - 도평우림아파트 하차 후 도보
                20분
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