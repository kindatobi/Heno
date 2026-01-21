import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { CartHydration } from "@/components/cart-hydration";
import TransitionProvider from "@/providers/TransitionProvider";
import { ReactLenis } from "../lib/lenis";
import { APP_DESC, APP_NAME, SERVER_URL } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neueHaas = localFont({
  src: [
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-25XThin-Trial.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-26XThinItalic-Trial.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-35Thin-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-36ThinItalic-Trial.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-45Light-Trial.otf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-46LightItalic-Trial.otf",
      weight: "350",
      style: "italic",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-55Roman-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-56Italic-Trial.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-65Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-66MediumItalic-Trial.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-75Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-76BoldItalic-Trial.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-95Black-Trial.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-96BlackItalic-Trial.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-neue-haas",
});

const bcdDiatype = localFont({
  src: [
    {
      path: "../public/fonts/BCD/ABCDiatypeMonoCondensed-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/BCD/ABCDiatypeMonoCondensed-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bcd-diatype",
});

export const metadata: Metadata = {
  title: {
    template: `%s | Heno`,
    default: APP_NAME,
  },
  description: APP_DESC,
  metadataBase: new URL(SERVER_URL),
  openGraph: {
    title: {
      template: `%s | Heno`,
      default: "Heno",
    },
    images: [
      {
        url: "https://heno.kindatobi.dev/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    description: APP_DESC,
    siteName: "Heno",
  },
  twitter: {
    title: {
      template: `%s | Heno`,
      default: "Heno",
    },
    description: APP_DESC,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${neueHaas.variable} ${bcdDiatype.variable}  ${geistMono.variable} antialiased`}
        >
          <CartHydration />
          <TransitionProvider>{children}</TransitionProvider>
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}
