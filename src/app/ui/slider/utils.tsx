import { NumberField } from "@prismicio/types";
import { Alarm, User } from "iconoir-react";

export function CookingInfo({ time, servings}: { time: NumberField; servings: NumberField;}) {
  return (
    <div className="text-sm">
      <span
        className="inline-flex items-center gap-1 text-gray-600 pr-3 leading-none"
        title={`Det här recepetet är för ${servings} personer`}
      >
        <span className="inline-block text-xs">
          <User height={16} width={16} strokeWidth={2}/>
        </span>
        <span>{servings}</span>
      </span>
      <span className="inline-flex items-center gap-1 text-gray-600 leading-none">
        <span
          className="inline-block text-xs"
          title={`Receptet tar ${time} minuter att tillaga`}
        >
          <Alarm height={16} width={16} strokeWidth={2}/>
        </span>
        <span>{convertTime(time)}</span>
      </span>
    </div>
  );
};

export function Truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 1) + "…" : str;
};

export function convertTime(time: NumberField) {
  let minutes = time!.toString();

  if (time! > 60) minutes = "60+";

  return `${minutes} min`;
};