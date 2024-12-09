export type TToken = {
  accessToken: string | null;
  refreshToken: string | null;
};

export type TUserInfo = {
  id: string;
  name: string; //'박현민';
  email: string; //'test0123@naver.com';
  phone: string | null; // '01012345678';
  createdAt: string; // 2023-12-19T14:27:55.000Z
  provider: string; // 소셜로그인 여부
};
