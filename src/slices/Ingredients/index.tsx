import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Ingredients`.
 */
export type IngredientsProps = SliceComponentProps<Content.IngredientsSlice>;

/**
 * Component for "Ingredients" Slices.
 */
const Ingredients = ({ slice }: IngredientsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for ingredients (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Ingredients;
