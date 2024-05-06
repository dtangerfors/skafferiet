import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { Header } from "./ui/layout/Header";
import { Footer } from "./ui/layout/Footer";
import { CourseDocument } from "../../prismicio-types";

export type MenuProps = {
  courses: CourseDocument<string>[];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const client = createClient();

  const courses = await client.getAllByType("course", {
    orderings: [{
      field: "document.first_publication_date",
      direction: "desc"
    }]
  });

  const menu_items: MenuProps = {
    courses: courses
  }

  return (
    <html lang="sv">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oew4hfl.css" />
      </head>
      <body className="font-sans overflow-x-hidden bg-tertiary-50">
        <Header menuItems={menu_items} />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
