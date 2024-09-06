import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { InnerSection, Section } from "../ui/layout/containers";
import { Hero } from "../ui/layout/Hero";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

type PageProps = {
  params: {
    uid: string;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", params.uid);

  return {
    title: page.data.meta_title || page.data.title,
    description: page.data.meta_description,
  };
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
