import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, InnerSection } from "@/app/ui/layout/containers";
import { Hero } from "@/app/ui/layout/Hero";
import { fetchCategoryRecipePages } from "./data";
import { RecipePosts } from "./posts";
import Pagination from "@/app/ui/pagination";

type PageProps = {
  params: {
    id: string;
    uid: string;
    type: string;
  };
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const client = createClient();
  const tag = await client.getByUID("tag", params.uid).catch(() => notFound());

  return {
    title: `${prismic.asText(tag.data.name)}`,
    description: `${prismic.asText(tag.data.description)}`,
  };
}


export default async function RecipeTagPage({ params, searchParams }: PageProps) {
  const client = createClient();

  const category = await client.getByUID("tag", params.uid);
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCategoryRecipePages(category.id);

  return (
    <>
      <Hero page={category} mode="image" />
      <Section className="bg-white">
        <InnerSection>
          <RecipePosts currentPage={currentPage} id={category.id} />
          <Pagination totalPages={totalPages} />
        </InnerSection>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const tags = await client.getAllByType("tag");

  return tags.map((tag) => {
    return {
      id: tag.id,
      uid: tag.uid,
      type: tag.type,
    };
  });
}
