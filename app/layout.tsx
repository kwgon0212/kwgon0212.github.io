import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "../components/shared/ScrollProgress";
import { ThemeProvider } from "next-themes";
import { ThemeTogglerButton } from "../components/shared/ThemeToggler";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김우곤 | FE Developer",
  description: "웹 서비스에 관심이 많은 프론트엔드 개발자 김우곤입니다.",
  keywords: [
    "김우곤",
    "포트폴리오",
    "프론트엔드 개발자",
    "풀스택 개발자",
    "React",
    "Next.js",
    "TypeScript",
    "웹 개발",
  ],
  authors: [{ name: "김우곤" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://kwgon0212.github.io",
    siteName: "김우곤 포트폴리오",
    title: "김우곤 | FE Developer",
    description: "웹 서비스에 관심이 많은 프론트엔드 개발자 김우곤입니다.",
    images: [
      {
        url: "/assets/me.JPG",
        width: 1200,
        height: 630,
        alt: "김우곤 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김우곤 | FE Developer",
    description: "웹 서비스에 관심이 많은 프론트엔드 개발자 김우곤입니다.",
    images: ["/assets/me.JPG"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          <ScrollProgress />
          <ThemeTogglerButton direction="btt" position="br" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
