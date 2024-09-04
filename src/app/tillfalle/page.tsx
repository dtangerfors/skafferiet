import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerSection, Section } from "../ui/layout/containers";
import { CategoryCard } from "../ui/cards/CategoryCard";
import { Hero } from "../ui/layout/Hero";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "tillfalle").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function CoursePage() {

  const client = createClient();

  const page = await client.getByUID("page", "tillfalle");
  const courses = await client.getAllByType("course", {
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
              {courses.map(course => <CategoryCard key={course.id} category={course} />)}
            </div>
        </InnerSection>
      </Section>
    </main>
  )
}