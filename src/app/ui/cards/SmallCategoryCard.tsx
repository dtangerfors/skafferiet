import Link from "next/link";
import { CategoryDocument, CourseDocument } from "../../../../prismicio-types";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight } from "iconoir-react";
import clsx from "clsx";
import { getDeviceType } from "@/app/lib/server_utils";

export function SmallCategoryCard({data}: {data: CategoryDocument | CourseDocument}) {

  const { isMobile } = getDeviceType();

  return (
    <Link href={`${data.url}`} className={clsx(
        "group flex bg-tertiary-50 rounded-xl overflow-hidden", 
        {"snap-center scroll-ml-3 w-72 shrink-0" : isMobile},
        "hover:bg-tertiary-200 transition-all"
        )}>
      <figure className="w-[4.5rem] aspect-square">
        <PrismicNextImage field={data.data.image} className="w-full h-full object-cover" width={72} height={72}/>
      </figure>
      <span className="inline-flex items-center flex-1 justify-between px-4 py-6 text-lg text-primary">
        <PrismicText field={data.data.name} />
        <ArrowRight className="inline-block relative text-xs group-hover:animate-snap-right transition-all duration-300" strokeWidth={2} />
      </span>
    </Link>
  )
}