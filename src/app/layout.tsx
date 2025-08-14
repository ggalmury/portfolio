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
  title: "이재윤 | 프론트엔드 개발자",
  description: "안녕하세요. 프론트엔드 개발자 이재윤입니다.",
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
