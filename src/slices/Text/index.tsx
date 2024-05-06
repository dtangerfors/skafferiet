import { typography } from "@/app/ui/typography";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <div
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="max-w-screen-md mx-auto"
  >
    {slice.items.map((item, i) => <PrismicRichText field={item.content} key={`${slice.id}-${i}`} components={typography} />)}
  </div>
  );
};

export default Text;
