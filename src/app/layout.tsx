import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { Header } from "./ui/layout/header";
import { Footer } from "./ui/layout/Footer";
import { HeaderPresence } from "./animation";
import { GoogleTagManager } from "@next/third-parties/google"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  

  return (
    <html lang="sv">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oew4hfl.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2d381e" />
        <GoogleTagManager gtmId="GTM-TLGJ28D" />
      </head>
      <body className="font-sans overflow-x-hidden bg-white">
        <HeaderPresence>
          <Header />
        </HeaderPresence>
          {children}
          <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
