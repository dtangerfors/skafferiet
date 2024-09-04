import clsx from "clsx";
import { Section, InnerSection } from "./containers";
import { Heading1, Paragraph } from "../typography";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { CategoryDocument, CourseDocument } from "../../../../prismicio-types";

type HeroProps = {
  mode?: "dark" | "light" | "image";
  page?: CourseDocument | CategoryDocument;
  title?: React.ReactNode;
  borderColor?: "white" | "lightgray" | "gray";
}

export function Hero({mode = "dark", title, page, borderColor = "white"}: HeroProps) {
  const textColor = clsx(mode === "dark" || page ? "text-secondary" : "text-primary");

  const border = {
    white: `url(/border-white.svg)`,
    lightgray: `url(/border-lightgray.svg)`,
    gray: `url(/border-gray.svg)`,
  }

  return (
    <Section className={clsx("pt-28 pb-36", mode === "dark" ? "bg-primary" : "bg-primary-100", "relative overflow-hidden")}>
      {mode === "image" && <figure className="absolute inset-0">
        <PrismicNextImage field={page?.data.image} className="w-full h-full object-cover grayscale" />
        <div className="absolute w-full h-full inset-0 bg-primary-950/80 mix-blend-multiply"></div>
      </figure>}
      <InnerSection className="relative text-center space-y-8">
        <Heading1 color={textColor}>{title || <PrismicText field={page?.data.name} />}</Heading1>
        {page?.data.description && <Paragraph color={textColor} className="text-balance max-w-prose mx-auto"><PrismicText field={page?.data.description} /></Paragraph>}
      </InnerSection>
      <div 
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: `30px`,
          backgroundImage: border[borderColor],
          backgroundSize: `30px 15px`,
          backgroundPosition: `center bottom`,
          backgroundRepeat: `repeat-x`,
      }}></div>
    </Section>
  )
}