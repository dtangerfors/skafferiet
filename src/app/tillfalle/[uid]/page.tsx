import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
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

export default async function RecipeCoursePage({ params }: PageProps) {
  const client = createClient();

  const course = await client.getByUID("course", params.uid);
  const recipes = await client.getAllByType("recipe", {
    filters: [prismic.filter.at("my.recipe.courses.course", course.id)],
  });

  return (
    <>
      <Hero title={<PrismicText field={course.data.name} />} mode="light" />
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

  const categories = await client.getAllByType("course");

  return categories.map((course) => {
    return {
      id: course.id,
      uid: course.uid,
      type: course.type,
    };
  });
}
