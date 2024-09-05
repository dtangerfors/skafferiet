"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RecipeDocument } from "../../../../prismicio-types";
import { CookingInfo } from "../slider/utils";

export function RecipeCard({ recipe }: { recipe: RecipeDocument }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
    >
      <Link href={`${recipe.url}`} className="group w-full">
        <figure className="relative w-full aspect-video rounded-xl overflow-hidden">
          <PrismicNextImage
            field={recipe.data.image}
            className="absolute inset-0 w-full h-full object-cover rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300"
            width={400}
            height={400}
          />
        </figure>
        <div className="mt-3">
          <h2 className="font-serif font-normal text-xl leading-normal text-primary">
            <PrismicText field={recipe.data.title} />
          </h2>
          <div className="mt-2">
            <CookingInfo
              time={recipe.data.time}
              servings={recipe.data.servings}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
