import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <figure
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mb-6 rounded-2xl overflow-hidden"
    >
      <PrismicNextImage field={slice.primary.image} width={1024}/>
    </figure>
  );
};

export default Image;
