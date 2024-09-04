"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { useHeaderContext } from "./context";
import { NavigationDocument } from "../../../../../prismicio-types";

type MegaMenu = { 
  navigation: NavigationDocument; 
  isMobile: RegExpMatchArray | null;
}

export function MegaMenu({ navigation, isMobile }: MegaMenu) {
  const { open, setOpen } = useHeaderContext();

  return (
    <>
    <motion.div
      initial={{
        y: "-150%",
      }}
      animate={{
        y: open ? 0 : "-150%",
      }}
      transition={{ type: "tween", duration: 0.3 }}
      className={clsx("absolute top-12 md:top-16 left-0 -z-[1] w-screen bg-tertiary-100 px-6 pt-8 pb-6",
        {"h-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]" : isMobile}
      )}
    >
      <div className="max-w-screen-lg mx-auto pb-6" key="menu-container">
        <ul
          className="flex flex-col md:flex-row flex-wrap gap-12"
          key="menu-list"
        >
          <li
            className="w-full shrink-0 lg:hidden border-b border-tertiary-200 pb-12"
            key="menu-item-nav"
          >
            <ul className="flex flex-col gap-8">
              {navigation.data.main_navigation.map((item, i) => (
                <li key={`main-nav-item-${i}`}>
                  <PrismicNextLink
                    onClick={() => setOpen(!open)}
                    field={item.link}
                    className="font-serif font-normal text-2xl lg:text-3xl pb-3 pt-6 text-primary hover:text-primary-950 transition-all ease-in-out duration-200"
                  >
                    <PrismicText field={item.name} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </li>
          {navigation.data.slices.map((slice) => {
            return (
              <li key={slice.id}>
                <p className="text-xs text-primary font-semibold uppercase tracking-widest pb-4">
                  <PrismicText field={slice.primary.name} />
                </p>
                {slice.items.length > 0 && (
                  <ul className="space-y-4">
                    {slice.items.map((item) => {
                      return (
                        <li key={JSON.stringify(item)}>
                          <PrismicNextLink
                            onClick={() => setOpen(!open)}
                            field={item.child_link}
                            className="text-base text-gray-600 hover:text-gray-950 transition-all ease-in-out duration-200"
                          >
                            <PrismicText field={item.child_name} />
                          </PrismicNextLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
    <motion.div
      initial={{
        y: "-100%",
      }}
      animate={{
        y: open ? 0 : "-100%",
      }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed -z-[2] w-screen h-screen inset-0 bg-gray-950/50"
    ></motion.div>
    </>
  );
}
