import Link from "next/link";
import { CategoryDocument, CourseDocument } from "../../../../prismicio-types";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight } from "iconoir-react";

export function CategoryCard({category}: {category: CategoryDocument | CourseDocument}) {
  return (
    <Link href={`${category.url}`} className="group relative flex items-end aspect-video rounded-xl overflow-hidden">
      <figure className="absolute w-full h-full">
        <PrismicNextImage field={category.data.image} className="w-full h-full object-cover" width={500} height={500}/>
        <div className="absolute w-full h-full inset-0 bg-black/30 group-hover:bg-secondary/50 transition-all"></div>
      </figure>
      <div className="relative z-10 w-full p-6 pt-12">
        <span className="text-2xl font-serif text-white leading-none">
          <PrismicText field={category.data.name} />
        </span>
      </div>
    </Link>
  )
}