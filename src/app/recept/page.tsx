import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { Hero } from "../ui/layout/Hero";
import { InnerSection, Section } from "../ui/layout/containers";
import { Heading2 } from "../ui/typography";
import { fetchRecipePages } from "./data";
import { RecipePosts } from "./posts";
import Pagination from "../ui/pagination";
import { ShowCategories } from "../ui/ShowCategories";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "recept");

  return {
    title: page.data.meta_title || page.data.title,
    description: page.data.meta_description,
  };
}

export default async function RecipePage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const client = createClient();

  const categories = await client.getAllByType("category", {
    limit: 5,
  });

  const courses = await client.getAllByType("course", {
    limit: 5,
  });

  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchRecipePages();
  const isFirstPage = currentPage === 1;

  return (
    <main>
      <Hero title="Recept" />
      {isFirstPage && (
        <>
          <Section>
            <InnerSection>
              <Heading2>Nya recept</Heading2>
              <RecipePosts currentPage={currentPage} isHighlight/>
            </InnerSection>
          </Section>
          <Section className="bg-white flex flex-col gap-12">
            <InnerSection>
              <Heading2>Aktuella kategorier</Heading2>
              <ShowCategories data={categories} label="Alla kategorier" link="/kategorier" />
            </InnerSection>
            <InnerSection>
              <Heading2>Hitta efter tillfälle</Heading2>
              <ShowCategories data={courses} label="Alla tillfällen" link="/tillfalle" />
            </InnerSection>
          </Section>
        </>
      )}
      <Section>
        <InnerSection>
          <Heading2>Alla recept</Heading2>
          <RecipePosts currentPage={currentPage} />
          <Pagination totalPages={totalPages} />
        </InnerSection>
      </Section>
    </main>
  );
}
