import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `IngredientKit`.
 */
export type IngredientKitProps =
  SliceComponentProps<Content.IngredientKitSlice>;

/**
 * Component for "IngredientKit" Slices.
 */
const IngredientKit = ({ slice }: IngredientKitProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for ingredient_kit (variation: {slice.variation})
      Slices
    </section>
  );
};

export default IngredientKit;
