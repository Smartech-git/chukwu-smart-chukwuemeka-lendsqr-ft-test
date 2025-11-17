import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";

import "./styles/globals.scss";
import { SvgSprite } from "@/components/icons";

const avenirNext = localFont({
  src: [
    {
      path: "../../public/fonts/AvenirNext-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirNext-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirNext-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirNext-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirNext-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-avenir-next",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Loan management software | Lending software | Lendsqr",
  description: "Start and scale your loan business with Lendsqr loan management system. Get the best features to position you as a market leader and make your customers happy!",
  metadataBase: new URL("https://wandeesan.africa"),
  openGraph: {
    title: "Loan management software | Lending software | Lendsqr",
    images: { url: "assets/images/preview.webp", alt: "Lendsqr" },
    description: "Start and scale your loan business with Lendsqr loan management system. Get the best features to position you as a market leader and make your customers happy!",
  },
  twitter: {
    title: "Loan management software | Lending software | Lendsqr",
    images: { url: "assets/images/preview.webp", alt: "Lendsqr" },
    description: "Start and scale your loan business with Lendsqr loan management system. Get the best features to position you as a market leader and make your customers happy!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${avenirNext.className} ${workSans.className}`}>
        {children}
        <SvgSprite />
      </body>
    </html>
  );
}
