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
  const category = await client.getByUID("category", params.uid).catch(() => notFound());

  return {
    title: `${prismic.asText(category.data.name)}`,
    description: `${prismic.asText(category.data.description)}`,
  };
}


export default async function RecipeCategoryPage({ params, searchParams }: PageProps) {
  const client = createClient();

  const category = await client.getByUID("category", params.uid);
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

  const categories = await client.getAllByType("category");

  return categories.map((category) => {
    return {
      id: category.id,
      uid: category.uid,
      type: category.type,
    };
  });
}
