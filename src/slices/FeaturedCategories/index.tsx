import clsx from "clsx";
import { getDeviceType } from "@/app/lib/server_utils";
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

  const { isMobile } = getDeviceType();

  return (
   <Section>
    <InnerSection>
      <div className="w-full">
        <Heading2>{slice.primary.title}</Heading2>
      </div>
      <div className={clsx(isMobile ? "flex gap-3 col-span-2 whitespace-nowrap overflow-auto snap-x snap-mandatory -mx-6 px-6 scrollbar-hide" : "grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6", "mt-6")}>
         {slice.items.map(item => <CategoryCard key={item.tag.link_type} category={item.tag} />)}
      </div>
    </InnerSection>
   </Section>
  );
};

export default FeaturedCategories;
