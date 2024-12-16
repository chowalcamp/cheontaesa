"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import style from "./style";
export default function LoginPage() {
  const KAKAO_JAVASCRIPT_KEY = "98ad4539e855a8624ab5230c74e816f9"; // 카카오 JavaScript 키로 교체
  const REDIRECT_URI = "http://localhost:3000/auth/login"; // 리다이렉트 URI (카카오 설정과 일치)

    useEffect(() => {
    // 카카오 SDK 초기화
    const loadKakaoScript = () => {
        if (!document.getElementById("kakao-sdk")) {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        script.id = "kakao-sdk";
        script.onload = () => {
            console.log("Kakao SDK initialized!");
            
            if (window.Kakao) {
            window.Kakao.init(KAKAO_JAVASCRIPT_KEY);
            }
        };
        document.head.appendChild(script);
        }
    };
    loadKakaoScript();
    }, []);

    const handleKakaoLogin = () => {
        if (window.Kakao) {
            window.Kakao.Auth.authorize({
                redirectUri: REDIRECT_URI,
            });
        } else {
            console.error("Kakao SDK not loaded.");
        }
    };

    return (
    <div
        className="flex flex-row max-w-6xl"
        style={style.group as React.CSSProperties}
        >
        <div style={style.form2 as React.CSSProperties}
        >
            <Image
            src="/images/login.png" 
            alt="login-bg" 
            width={300} 
            height={300} 
            style={{marginLeft: "30px"}}
            />
        </div> 
        <div
            style={style.form as React.CSSProperties}
        > 
            <h1 className="text-2xl mb-8 text-gray-800 text-left">천태사</h1>
            <h1 className="text-2xl mb-4 text-gray-800 text-left">로그인 또는 회원가입</h1>
            <div>
                <form action="" className="flex flex-col justify-center items-center"
                    >
            <input style={style.input} type="text" placeholder="아이디" />
            <input style={style.input} type="password" placeholder="비밀번호" />
        </form>
    </div>


    {/* 카카오톡 로그인 버튼 */}
    <button
        onClick={handleKakaoLogin}  
        >
        <Image
        src="/images/kakao_login_large_narrow.png"
        alt="카카오 로그인"
        width={230}
        height={100}
        className=""
        />
    </button>
    </div>
    </div>
);
}
