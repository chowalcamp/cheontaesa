import { Nanum_Myeongjo } from "next/font/google";
import ClientWrapper from "@/component/clientWrapper/clientWrapper";
import "../../styles/globalStyles.css";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nanum-myeongjo",
});

export const metadata = {
  title: {
    template: "%s | 천태사",
    default: "천태사",
  },
  description: "서울근교 절 방문하기 | 경기도 광주시 초월읍 천태사",
  keywords: "천태사, 천태사 방문, 경기광주 절, 서울근교 절, 불교행사, 천태사 문의하기, 경기도 절, 초월읍 절, 쌍동리 절, 천태사 가는법, 절 추천",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${nanumMyeongjo.variable}`}>
      <body className="root-body">
        <ClientWrapper>
          <main className="main-content">{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}