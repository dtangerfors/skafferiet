import Link from "next/link";
import { CategoryDocument, CourseDocument } from "../../../../prismicio-types";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight } from "iconoir-react";

export function SmallCategoryCard({data}: {data: CategoryDocument | CourseDocument}) {
  return (
    <Link href={`${data.url}`} className="flex bg-tertiary-50 rounded-xl overflow-hidden">
      <figure className="w-[4.5rem] aspect-square">
        <PrismicNextImage field={data.data.image} className="w-full h-full object-cover" width={72} height={72}/>
      </figure>
      <span className="inline-flex items-center flex-1 justify-between px-4 py-6 text-lg text-primary">
        <PrismicText field={data.data.name} />
        <ArrowRight className="text-xs" strokeWidth={2} />
      </span>
    </Link>
  )
}