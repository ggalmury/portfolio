import { ReactNode } from "react";
import type { Metadata } from "next";
import clsx from "clsx";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/global.css";

import pretendard from "@/fonts/pretendard";

import ToastProvider from "@/providers/ToastProvider";

import Footer from "@/components/layouts/Footer";
import Caption1 from "@/components/atoms/typography/Caption1";
import ScrollToTopButton from "@/components/atoms/buttons/ScrollToTopButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://galmury.com"),
  title: "이재윤 | 프론트엔드 개발자",
  description: "안녕하세요. 프론트엔드 개발자 이재윤입니다.",
  keywords: ["개발자", "프론트엔드", "프론트엔드 개발자", "포트폴리오", "개발자 포트폴리오", "프론트엔드 개발자 포트폴리오"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "이재윤 | 프론트엔드 개발자",
    description: "안녕하세요. 프론트엔드 개발자 이재윤입니다.",
    url: "https://galmury.com",
    siteName: "galmury.com",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "이재윤 | 프론트엔드 개발자",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="ko">
      <body className={clsx("antialiased", pretendard.variable)}>
        <ToastProvider />

        {children}

        <ScrollToTopButton />

        <Footer>
          <Caption1 text="© 2025 이재윤. All rights reserved." styles={{ color: "text-gray-400" }} />
        </Footer>
      </body>
    </html>
  );
};

export default RootLayout;
