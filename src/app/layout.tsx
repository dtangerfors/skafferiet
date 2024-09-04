import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { Header } from "./ui/layout/header";
import { Footer } from "./ui/layout/Footer";
import { AnimationPresence } from "./animation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  

  return (
    <html lang="sv">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oew4hfl.css" />
      </head>
      <body className="font-sans overflow-x-hidden bg-white">
        <AnimationPresence>
          <Header />
          {children}
          <Footer />
        </AnimationPresence>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
