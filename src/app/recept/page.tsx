import { createClient } from "@/prismicio";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "iconoir-react";
import { Hero } from "../ui/layout/Hero";
import { InnerSection, Section } from "../ui/layout/containers";
import { Heading2 } from "../ui/typography";
import { RecipeCard } from "../ui/cards/RecipeCard";
import { SmallCategoryCard } from "../ui/cards/SmallCategoryCard";
import { fetchRecipePages } from "./data";
import { RecipePosts } from "./posts";
import Pagination from "../ui/pagination";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "recept");

  return {
    title: page.data.meta_title || page.data.title,
    description: page.data.meta_description,
  };
}

export default async function RecipePage({
  searchParams
}: {
  searchParams?: {
    query?: string,
    page?: string,
  },
}) {

  const client = createClient();

  const categories = await client.getAllByType("category", {
    limit: 5
  });
  
  const courses = await client.getAllByType("course", {
    limit: 5
  });

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchRecipePages();

  return (
    <main>
      <Hero title="Recept" />
      <Section>
        <InnerSection>
          <Heading2>Nya recept</Heading2>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mt-6">
            {recipes.results.slice(0, 3).map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div> */}
        </InnerSection>
      </Section>
      <Section className="bg-white flex flex-col gap-12">
        <InnerSection>
            <Heading2>Aktuella kategorier</Heading2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mt-6">
              {categories.map(category => <SmallCategoryCard key={category.id} data={category} />)}
              <Link href="/kategorier" className="inline-flex items-center flex-1 justify-between bg-tertiary-50 rounded-xl overflow-hidden px-4 py-6 text-lg text-primary">
                <span className="">Alla kategorier</span>
                <ArrowRight className="text-xs" strokeWidth={2} />
              </Link>
            </div>
        </InnerSection>
        <InnerSection>
            <Heading2>Hitta efter tillfälle</Heading2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mt-6">
              {courses.map(course => <SmallCategoryCard key={course.id} data={course} />)}
              <Link href="/tillfalle" className="inline-flex items-center flex-1 justify-between bg-tertiary-50 rounded-xl overflow-hidden px-4 py-6 text-lg text-primary">
                <span className="">Alla tillfällen</span>
                <ArrowRight className="text-xs" strokeWidth={2} />
              </Link>
            </div>
        </InnerSection>
      </Section>
      <Section>
        <InnerSection>
          <Heading2>Alla recept</Heading2>
          <RecipePosts currentPage={currentPage} />
          <Pagination totalPages={totalPages} />
        </InnerSection>
      </Section>
    </main>
  )
}