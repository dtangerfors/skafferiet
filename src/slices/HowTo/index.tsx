import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HowTo`.
 */
export type HowToProps = SliceComponentProps<Content.HowToSlice>;

/**
 * Component for "HowTo" Slices.
 */
const HowTo = ({ slice }: HowToProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for how_to (variation: {slice.variation}) Slices
    </section>
  );
};

export default HowTo;
