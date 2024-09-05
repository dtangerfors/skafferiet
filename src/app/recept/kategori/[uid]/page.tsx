import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, InnerSection } from "@/app/ui/layout/containers";
import { Hero } from "@/app/ui/layout/Hero";
import { fetchTagPages } from "./data";
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
  const collection = await client.getByUID("collection", params.uid).catch(() => notFound());

  return {
    title: `${prismic.asText(collection.data.name)}`,
    description: `${prismic.asText(collection.data.description)}`,
  };
}


export default async function CollectionPage({ params, searchParams }: PageProps) {
  const client = createClient();

  const collection = await client.getByUID("collection", params.uid);
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTagPages(collection.id);

  return (
    <>
      <Hero page={collection} mode="image" />
      <Section className="bg-white">
        <InnerSection>
          <RecipePosts currentPage={currentPage} id={collection.id} />
          <Pagination totalPages={totalPages} />
        </InnerSection>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const collections = await client.getAllByType("collection");

  return collections.map((collection) => {
    return {
      id: collection.id,
      uid: collection.uid,
      type: collection.type,
    };
  });
}
