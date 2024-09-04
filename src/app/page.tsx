import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomepageSlider } from "./ui/slider/HomepageSlider";
import { InnerSection, Section } from "./ui/layout/containers";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Image from "next/image";
import { asText } from "@prismicio/client";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getSingle("home").catch(() => notFound());

  return {
    title: home.data.meta_title,
    description: home.data.meta_description,
  };
}

export default async function Home() {
  const client = createClient();

  const home = await client.getSingle("home", {
    graphQuery: `
    {
      home {
        ...homeFields
        slices {
          ...on featured_categories {
            variation {
              ...on default {
                primary {
                  ...primaryFields
                }
                items {
                  category {
                    ...on category {
                      ...categoryFields
                    }
                  }
                }
              }
            }
          }
          ...on featured_recipes {
            variation {
              ...on default {
                primary {
                  ...primaryFields
                }
                items {
                  recipe {
                    ...on recipe {
                      ...recipeFields
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
  });

  const latestRecipes = await client.getAllByType("recipe", {
    limit: 5,
    orderings: [{
      field: "document.first_publication_date",
      direction: "desc"
    }]
  });

  return (
    <main className="flex flex-col">
      <section className="relative bg-primary-950">
        <div className="relative z-10 w-full max-w-screen-lg mx-auto py-12 lg:py-20 max-lg:px-6">
          <h1 className="font-serif text-5xl lg:text-6xl text-balance text-secondary text-center mb-4">{asText(home.data.title)}</h1>
          <form action="#" className="flex flex-col items-center">
            <input type="text" className="w-full max-w-screen-sm bg-white border border-primary-100 rounded-3xl px-4 py-3"/>
          </form>
        </div>
        <div className="w-full max-w-screen-lg mx-auto pt-12 max-lg:px-6">
          <h2 className="font-serif text-3xl text-white">Senaste tillagda recept</h2>
        </div>
        <div className="relative z-10 bg-gradient-to-b from-transparent from-50% to-white to-50% p-6 overflow-hidden">
          <div className="relative w-full max-w-screen-lg mx-auto md:grid grid-cols-2 gap-6">
            <HomepageSlider recipes={latestRecipes} />
          </div>
        </div>
      </section>
      <SliceZone slices={home.data.slices} components={components} />
    </main>
  );
}
