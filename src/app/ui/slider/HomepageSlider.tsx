"use client";
import { SliderCard } from "./SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./styles.css";
import { RecipeDocument } from "../../../../prismicio-types";

export function HomepageSlider({ recipes }: {recipes: RecipeDocument<string>[]}) {
  return (
    <div className="py-5.5 pr-[15%] lg:pr-0">
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          758: {
            spaceBetween: 24,
          },
        }}
      >
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <SliderCard recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
