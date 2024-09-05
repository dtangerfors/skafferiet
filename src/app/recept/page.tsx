import * as prismic from '@prismicio/client'
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

  const courses = await client.getAllByType("tag", {
    limit: 5,
    filters: [
      prismic.filter.at("my.tag.collection", "Ztl7yRIAACAAxZSl")
    ]
  });
  
  const typeOfFood = await client.getAllByType("tag", {
    limit: 5,
    filters: [
      prismic.filter.at("my.tag.collection", "Ztl90hIAAB4AxcS6")
    ]
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
              <Heading2>Efter typ av rätt</Heading2>
              <ShowCategories data={typeOfFood} label="Alla typer av rätter" link="/recept/kategori/typ-av-ratt" />
            </InnerSection>
            <InnerSection>
              <Heading2>Recept efter måltid</Heading2>
              <ShowCategories data={courses} label="Alla måltider" link="/recept/kategori/maltid" />
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
