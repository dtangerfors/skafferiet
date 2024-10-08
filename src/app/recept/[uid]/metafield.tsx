import { PrismicText } from "@prismicio/react";
import { BookStack, Alarm, User } from "iconoir-react";
import { PrismicNextLink } from "@prismicio/next";
import { Content, GroupField } from "@prismicio/client";
import {
  RecipeDocumentData,
  Simplify,
  TagDocument,
} from "../../../../prismicio-types";
import { convertTime } from "@/app/ui/slider/utils";

type MetaFieldProps = {
  tags: GroupField<Simplify<Content.RecipeDocumentDataTagsItem>> & {
    data: Pick<Content.TagDocument["data"], "name">;
  };
  servings: RecipeDocumentData["servings"];
  time: RecipeDocumentData["time"];
};

export function MetaField({ tags, servings, time }: MetaFieldProps) {
  return (
    <ul className="flex my-4">
      {servings && (
        <li
          className="text-base leading-none flex items-center mr-4 text-white/70"
          title={`Det här recepetet är för ${servings} personer`}
        >
          <span className="text-sm mr-1">
            <User />
          </span>
          <span>{servings}</span>
        </li>
      )}
      {time && (
        <li
          className="text-base leading-none flex items-center mr-4 text-white/70"
          title={`Receptet tar ${time} minuter att tillaga`}
        >
          <span className="text-sm mr-1">
            <Alarm />
          </span>
          <span>{convertTime(time)}</span>
        </li>
      )}
      {Object.keys(tags[0]!.tag).length > 1 && (
        <li className="text-base leading-none flex items-center mr-4 text-white/70">
          <span className="text-sm mr-1">
            <BookStack />
          </span>
          <span>
            {tags.map((item, index) => {
              const tag = item.tag as unknown as TagDocument;

              return (
                <>
                  {index > 0 ? ", " : ""}
                  <PrismicNextLink
                    key={tag.id}
                    document={tag}
                    className="underline hover:no-underline decoration-white/70"
                  >
                    <PrismicText field={tag.data.name} />
                  </PrismicNextLink>
                </>
              );
            })}
          </span>
        </li>
      )}
    </ul>
  );
}
