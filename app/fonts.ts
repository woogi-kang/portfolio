import localFont from "next/font/local"

export const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
})

export const goormSans = localFont({
  src: [
    { path: "./fonts/GoormSans-Regular.woff2", weight: "400" },
    { path: "./fonts/GoormSans-Medium.woff2", weight: "500" },
    { path: "./fonts/GoormSans-Bold.woff2", weight: "700" },
  ],
  variable: "--font-goorm",
  display: "swap",
  preload: false,
})

export const nanumGothicCoding = localFont({
  src: [
    { path: "./fonts/NanumGothicCoding.ttf", weight: "400" },
    { path: "./fonts/NanumGothicCoding-Bold.ttf", weight: "700" },
  ],
  variable: "--font-nanum-coding",
  display: "swap",
  preload: false,
})
