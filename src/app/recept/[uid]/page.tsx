import { createClient } from "@/prismicio";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage,  } from "@prismicio/next";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone, PrismicText } from "@prismicio/react";
import { components } from "@/slices";
import { InnerSection, Section } from "@/app/ui/layout/containers";
import { Heading1, Heading2 } from "@/app/ui/typography";
import { Item, ItemList, RecipeGroup } from "./ingredients";
import Step from "./step";
import { MetaField } from "./metafield";

type Params = { uid: string };

export async function generateMetadata({ params }: {params: Params}): Promise<Metadata> {
  const client = createClient();
  const recipe = await client.getByUID("recipe", params.uid).catch(() => notFound());;

  return {
    title: recipe.data.meta_title || `${asText(recipe.data.title)}`,
    description: recipe.data.meta_description,
  };
}

export default async function SingleRecipePage({ params }: {params: Params}) {
  const client = createClient();

  const recipe = await client.getByUID("recipe", params.uid, {
    fetchLinks: ["category.name", "course.name"],
  });

  const ingredients = recipe.data.slices.filter(
    (slices) => slices.slice_type === "ingredients"
  ) as Content.IngredientsSlice[];

  const how_to = recipe.data.slices.filter(
    (slices) => slices.slice_type === "how_to"
  ) as Content.HowToSlice[];
  const blog_post = recipe.data.slices.filter(
    (slices) => slices.slice_type === "text"
  );
  const description = recipe.data.description;

  return (
    <>
      <section className="relative bg-primary-100 lg:px-6">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap">
          <div className="w-full max-w-lg py-20 max-lg:pb-8 px-6 lg:pl-0 lg:py-12 ml-auto self-center">
            <Heading1>
              <PrismicText field={recipe.data.title} />
            </Heading1>
            <MetaField
              categories={recipe.data.categories}
              courses={recipe.data.courses}
              servings={recipe.data.servings}
              time={recipe.data.time}
            />
            {description.length > 0 && (
              <p className="font-sans font-normal text-base leading-relaxed text-primary-800 pb-[1em] last:pb-0">
                <PrismicText field={description} />
              </p>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <figure className="relative h-full lg:-mr-6 lg:max-h-[50vh]">
              <PrismicNextImage
                field={recipe.data.image}
                className="object-cover object-center w-full h-full"
              />
            </figure>
          </div>
        </div>
      </section>

      {blog_post.length > 0 && (
        <Section>
          <InnerSection className="border-b border-gray-200 pb-0">
            <div className="max-w-screen-md mx-auto pb-12">
              <SliceZone slices={blog_post} components={components} />
            </div>
          </InnerSection>
        </Section>
      )}

      <Section>
        <InnerSection className="lg:grid lg:grid-cols-12">
          <section className="col-span-4">
            <Heading2>Ingredienser</Heading2>
            {ingredients.map((ingredientGroup, i) => {
              return (
                <RecipeGroup key={`ingredients-${i}`}>
                  {ingredientGroup.primary.title.length > 0 && (
                    <h3 className="font-serif font-normal text-lg text-primary pb-3 pt-6">
                      <PrismicText field={ingredientGroup.primary.title} />
                    </h3>
                  )}
                  <ItemList>
                    {ingredientGroup.items.map((ingredient, i) => {
                      return (
                        <Item
                          key={`${ingredientGroup.id}-item-${i}`}
                          item={ingredient.item}
                          quantity={ingredient.quantity}
                          measurement={ingredient.measurement}
                        />
                      );
                    })}
                  </ItemList>
                </RecipeGroup>
              );
            })}
          </section>
          <section className="col-span-6 col-start-7">
            <Heading2>Gör så här</Heading2>
            {how_to.map((recipeItemStep, i) => {
              return (
                <RecipeGroup key={`ingredients-${i}`}>
                  {recipeItemStep.primary.title.length > 0 && (
                    <h3 className="font-serif font-normal text-lg text-primary pb-3 pt-6">
                      <PrismicText field={recipeItemStep.primary.title} />
                    </h3>
                  )}
                  <ItemList>
                    {recipeItemStep.items.map((step, i) => (
                      <Step
                        key={`${recipeItemStep.id}-step-${i}`}
                        step={step.step}
                      />
                    ))}
                  </ItemList>
                </RecipeGroup>
              );
            })}
          </section>
        </InnerSection>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const recipes = await client.getAllByType("recipe");

  return recipes.map((recipe) => {
    return { 
      uid: recipe.uid, 
      title: recipe.data.meta_title, 
      description: recipe.data.meta_description,
    };
  });
}