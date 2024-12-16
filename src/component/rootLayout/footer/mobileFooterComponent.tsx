"use client";

import React from "react";
import Image from "next/image";

const MobileFooterComponent = () => {


    return (
    <footer
        className="relative bg-cover bg-center py-8 mr-0"
        style={{
        backgroundImage: `url('/images/footer.jpg')`,
        color: "#FFFFFF",
        fontFamily: "NanumMyeongjo",
    }}
    >

        
    {/* 연락처 및 저작권 */}
    <div className="text-left text-sm px-4 space-y-4">
        <p>
        문의전화: (접수 문의) 02-000-0000 <br /> 대표자 010-0000-0000
        </p>
        <p>운영시간: 09:00 ~ 17:00 <br /> (점심시간 11:30 ~ 12:30)</p>
        <div className="flex flex-row items-end mb-6 ">
            <div className="flex flex-col items-end mb-2">
            <Image 
            src="/images/logo.png" 
            alt="천대사 로고" 
            width={150} 
            height={150}
            />
            <p className="text-sm">경기광주시 초월읍 쌍동리 241-1</p>
            </div>
        </div>
        <span className="">Kakao</span> |{" "}
        <span className="">Instagram</span>
        <p className="text-xs">Copyright © CHEONTAESA. All Rights Reserved.</p>
    </div>
    </footer>
);
};

export default MobileFooterComponent;
