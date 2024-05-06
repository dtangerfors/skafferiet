import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, InnerSection } from "@/app/ui/layout/containers";
import { Hero } from "@/app/ui/layout/Hero";
import { RecipeCard } from "@/app/ui/cards/RecipeCard";

type PageProps = {
  params: {
    id: string;
    uid: string;
    type: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const client = createClient();
  const category = await client.getByUID("category", params.uid).catch(() => notFound());;

  return {
    title: `${prismic.asText(category.data.name)}`,
    description: `${prismic.asText(category.data.description)}`,
  };
}


export default async function RecipeCategoryPage({ params }: PageProps) {
  const client = createClient();

  const category = await client.getByUID("category", params.uid);
  const recipes = await client.getAllByType("recipe", {
    filters: [prismic.filter.at("my.recipe.categories.category", category.id)],
  });

  return (
    <>
      <Hero title={<PrismicText field={category.data.name} />} mode="light" />
      <Section>
        <InnerSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
            {recipes.slice(0, 3).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
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
