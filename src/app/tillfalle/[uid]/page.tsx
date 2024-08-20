import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { Section, InnerSection } from "@/app/ui/layout/containers";
import { Hero } from "@/app/ui/layout/Hero";
import { RecipeCard } from "@/app/ui/cards/RecipeCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCategoryRecipePages } from "./data";
import Pagination from "@/app/ui/pagination";
import { RecipePosts } from "./posts";

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const client = createClient();
  const course = await client.getByUID("course", params.uid).catch(() => notFound());

  return {
    title: `${prismic.asText(course.data.name)}`,
    description: `${prismic.asText(course.data.description)}`,
  };
}

export default async function RecipeCoursePage({ params, searchParams }: PageProps) {
  const client = createClient();

  const course = await client.getByUID("course", params.uid);
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCategoryRecipePages(course.id);

  return (
    <>
      <Hero page={course} mode="image" />
      <Section className="bg-white">
        <InnerSection>
          <RecipePosts currentPage={currentPage} id={course.id} />
          <Pagination totalPages={totalPages} />
        </InnerSection>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const categories = await client.getAllByType("course");

  return categories.map((course) => {
    return {
      id: course.id,
      uid: course.uid,
      type: course.type,
    };
  });
}
