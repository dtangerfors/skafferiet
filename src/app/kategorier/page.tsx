import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { InnerSection, Section } from "../ui/layout/containers";
import { CategoryCard } from "../ui/cards/CategoryCard";
import { Hero } from "../ui/layout/Hero";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "kategorier");

  return {
    title: page.data.meta_title || page.data.title,
    description: page.data.meta_description,
  };
}

export default async function CategoryPage() {

  const client = createClient();

  const page = await client.getByUID("page", "kategorier");
  const categories = await client.getAllByType("category", {
    orderings: [{
      field: "document.first_publication_date",
      direction: "desc"
    }]
  });

  return (
    <main>
      <Hero title={page.data.title} />
      <Section>
        <InnerSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mt-6">
              {categories.map(category => <CategoryCard key={category.id} category={category} />)}
            </div>
        </InnerSection>
      </Section>
    </main>
  )
}