import { createClient } from "@/prismicio";
import { InnerSection, Section } from "../ui/layout/containers";
import { Hero } from "../ui/layout/Hero";
import { PrismicText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";

type PageProps = {
  params: {
    uid: string;
  }
}

export default async function SinglePage({ params }: PageProps) {
  const client = createClient();

  const page = await client.getByUID("page", params.uid);

  return (
    <>
    <Hero title={page.data.title} />
    <Section>
      <InnerSection>
        <SliceZone slices={page.data.slices} components={components} />
      </InnerSection>
    </Section>
    </>
  )
}

export async function generateStaticParams() {
  const client = createClient();

  const recipes = await client.getAllByType("recipe");

  return recipes.map((recipe) => {
    return { uid: recipe.uid };
  });
}
