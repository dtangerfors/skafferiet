import { createClient } from "@/prismicio";
import { InnerSection, Section } from "../ui/layout/containers";
import { CategoryCard } from "../ui/cards/CategoryCard";
import { Hero } from "../ui/layout/Hero";

export default async function CoursePage() {

  const client = createClient();

  const courses = await client.getAllByType("course", {
    orderings: [{
      field: "document.first_publication_date",
      direction: "desc"
    }]
  });

  return (
    <main>
      <Hero title="Måltider" />
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