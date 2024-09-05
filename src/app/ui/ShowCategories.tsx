import Link from "next/link";
import { SmallCategoryCard } from "./cards/SmallCategoryCard";
import { ArrowRight } from "iconoir-react";
import { TagDocument } from "../../../prismicio-types";
import clsx from "clsx";
import { getDeviceType } from "../lib/server_utils";

export function ShowCategories({data, link, label}: {
  data: TagDocument[],
  link: string,
  label: string
}) {

  const { isMobile } = getDeviceType();

  return (
    <div className={clsx(isMobile ? "flex gap-3 col-span-2 whitespace-nowrap overflow-auto snap-x snap-mandatory -mx-6 px-6 scrollbar-hide" : "grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6", "mt-6")}>
      {data.map((item) => (
        <SmallCategoryCard key={item.id} data={item} />
      ))}
      <Link
        href={link}
        className={clsx(
          "group inline-flex items-center justify-between bg-tertiary-50 rounded-xl overflow-hidden px-4 py-6 text-lg text-primary", 
          {"snap-center scroll-ml-3 w-72 shrink-0" : isMobile}, 
          {"flex-1 " : !isMobile},
           "hover:bg-tertiary-200 transition-all"
        )}
      >
        <span className="">{label}</span>
        <ArrowRight className="text-xs group-hover:animate-snap-right transition-all duration-300" strokeWidth={2} />
      </Link>
    </div>
  )
}