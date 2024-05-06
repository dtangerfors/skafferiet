import { CategoryCard } from "@/app/ui/cards/CategoryCard";
import { InnerSection, Section } from "@/app/ui/layout/containers";
import { Heading2 } from "@/app/ui/typography";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturedCategories`.
 */
export type FeaturedCategoriesProps =
  SliceComponentProps<Content.FeaturedCategoriesSlice>;

/**
 * Component for "FeaturedCategories" Slices.
 */
const FeaturedCategories = ({
  slice,
}: FeaturedCategoriesProps): JSX.Element => {

  return (
   <Section>
    <InnerSection>
      <div className="w-full">
        <Heading2>{slice.primary.title}</Heading2>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mt-6">
            {slice.items.map(item => <CategoryCard key={item.category.link_type} category={item.category} />)}
        </div>
    </InnerSection>
   </Section>
  );
};

export default FeaturedCategories;
