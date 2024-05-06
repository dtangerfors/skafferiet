"use client"

import { useState } from "react";
import { HowToSliceDefaultItem } from "../../../../prismicio-types";
import { PrismicText } from "@prismicio/react";
import { Check } from "iconoir-react";

export default function Step({ step }: HowToSliceDefaultItem) {
  const [finished, setFinished] = useState(false);

  return (
    <li className="flex gap-4 text-lg leading-10 mb-12 relative">

      <button
        onClick={() => setFinished(!finished)}
        className="relative z-20 top-0 w-10 h-10 p-2 bg-white -ml-2"
      >
        <span className="block relative w-full h-full rounded-full border-2 border-secondary-700  bg-white">
          <span className="absolute w-full h-full inset-0 bg-secondary-700 rounded-full transition-all ease-in-out duration-300" style={{opacity: finished ? '1' : '0'}}>
            <Check className="relative text-sm leading-none text-white" />
          </span>
        </span>
        <span className="sr-only">Markera som färdig</span>
      </button>

      <span style={{opacity: finished ? '.25' : '1'}} className="flex-1">{<PrismicText field={step} />}</span>
    </li>
  )
}