import { PrismicText } from "@prismicio/react";
import { BookStack, Cutlery, Alarm, User } from "iconoir-react";
import { PrismicNextLink } from "@prismicio/next";
import { Content, GroupField } from "@prismicio/client";
import { RecipeDocumentData, Simplify } from "../../../../prismicio-types";
import { convertTime } from "@/app/ui/slider/utils";

type MetaFieldProps = {
  categories: GroupField<Simplify<Content.RecipeDocumentDataCategoriesItem>>;
  courses: GroupField<Simplify<Content.RecipeDocumentDataCoursesItem>>;
  servings: RecipeDocumentData["servings"];
  time: RecipeDocumentData["time"];
};

export function MetaField({
  categories,
  courses,
  servings, 
  time
}: MetaFieldProps) {

  return (
    <ul className="flex my-4">
      {servings && 
      <li className="text-base leading-none flex items-center mr-4 text-primary-800" title={`Det här recepetet är för ${servings} personer`}>
          <span className="text-sm mr-1">
            <User />
          </span>
          <span>
            {servings}
          </span>
      </li>
      }
      {time && 
      <li className="text-base leading-none flex items-center mr-4 text-primary-800" title={`Receptet tar ${time} minuter att tillaga`}>
          <span className="text-sm mr-1">
            <Alarm />
          </span>
          <span>
            {convertTime(time)}
          </span>
      </li>
      }
      {(Object.keys(categories[0]!.category).length > 1) && 
        <li className="text-base leading-none flex items-center mr-4 text-primary-800">
          <span className="text-sm mr-1">
            <BookStack />
          </span>

        <span>
          {categories.map((data, index) => {
            return (
              <>
                {index ? ", " : ""}
                <PrismicNextLink key={data.category.id} document={data.category} className="underline hover:no-underline decoration-primary-800/80">
                  <PrismicText field={data.category.data.name} />
                </PrismicNextLink>
              </>
            )
          })}
        </span>
        
        </li>}
      {(Object.keys(courses[0]!.course).length > 1) && 
        <li className="text-base leading-none flex items-center mr-4 text-primary-800">
          <span className="text-sm mr-1">
            <Cutlery />
          </span>
          {courses.map((data, index) => {
          return (
            <>
              {index ? ", " : ""}
              <PrismicNextLink key={data.course.id} document={data.course} className="underline hover:no-underline decoration-primary-800/80">
                <PrismicText field={data.course.data.name} />
              </PrismicNextLink>
            </>
          )
        })}
        </li>}
    </ul>
  );
}