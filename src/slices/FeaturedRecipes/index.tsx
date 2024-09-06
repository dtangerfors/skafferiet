import { InnerSection, Section } from "@/app/ui/layout/containers";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Heading2 } from "@/app/ui/typography";
import { RecipeCard } from "@/app/ui/cards/RecipeCard";
import clsx from "clsx";
import { RecipeDocument } from "../../../prismicio-types";

/**
 * Props for `FeaturedRecipes`.
 */
export type FeaturedRecipesProps =
  SliceComponentProps<Content.FeaturedRecipesSlice>;

/**
 * Component for "FeaturedRecipes" Slices.
 */
const FeaturedRecipes = ({ slice }: FeaturedRecipesProps): JSX.Element => {
  return (
   <Section className={clsx(slice.primary.background_color === "white" ? "bg-white" : "bg-tertiary-50")}>
      <InnerSection>
      <div className="w-full">
        <Heading2>{slice.primary.title}</Heading2>
      </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-3 lg:gap-x-6 mt-6">
            {slice.items.map(item => {
              const recipe = item.recipe as unknown as RecipeDocument

              return <RecipeCard key={recipe.id} recipe={recipe} />
            })}
        </div>
      </InnerSection>
   </Section>
  )
};

export default FeaturedRecipes;
