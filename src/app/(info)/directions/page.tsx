import Image from "next/image";

export default function Directions() {
  return (
    <div style={{ maxWidth: "600px",  padding: "20px", justifyContent: "center", alignItems: "center", margin: "0 auto",}}>
   
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* 지도 이미지 */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/images/map.png"
            alt="map"
            width={800}
            height={600}
            style={{ border: "1px solid #ddd" }}
          />
        </div>
        {/* 교통 정보 */}
        <div style={{ marginTop: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        천태사
      </h1>
      <p style={{ marginBottom: "20px", fontSize: "16px", color: "#555" }}>
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
  );
}
