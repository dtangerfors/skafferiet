import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { RecipeDocument } from "../../../../prismicio-types";
import { CookingInfo, Truncate } from "./utils";

export function SliderCard({ recipe }: {recipe: RecipeDocument<string>}) {
  const {image, title, time, servings} = recipe.data;
  return (
    <Link
      href={`${recipe.url}`}
      className="inline-flex items-center w-full h-28 lg:h-52 bg-white rounded-lg overflow-hidden snap-start snap-m-5.5 whitespace-normal"
    >
      <figure className="relative w-28 h-28 lg:w-52 lg:h-52 overflow-hidden">
        <PrismicNextImage
          field={image}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex-1 px-2 lg:px-6">
        <p
          className="text-sm lg:text-xl text-primary font-sans lg:leading-relaxed lg:pb-4 text-pretty"
        >
          {Truncate(title[0]!.text, 40)}
        </p>
        <hr className="w-20 bg-primary my-1" />
        <CookingInfo
          time={recipe.data.time}
          servings={recipe.data.servings}
        />
      </div>
    </Link>
  );
}