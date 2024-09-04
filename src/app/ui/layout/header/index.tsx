import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Hamburger } from "./Hamburger";
import { MegaMenu } from "./MegaMenu";
import { getDeviceType } from "@/app/lib/server_utils";

export async function Header() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "header-menu");
  const { isMobile } = getDeviceType();

  return (
    <header className="sticky z-50 top-0 w-full">
      <div className="relative h-14 bg-tertiary-100 px-6 md:h-16">
        <div className="relative flex items-center gap-8 justify-between max-w-screen-lg mx-auto">
          <Link href="/">
            <span className="font-script text-primary text-xl">
              Daniels Skafferi
            </span>
          </Link>
          <nav className="ml-auto hidden lg:block">
            <ul className="flex flex-wrap gap-8">
              {navigation.data.main_navigation.map((item, i) => (
                <li key={`main-nav-item-${i}`}>
                  <PrismicNextLink
                    field={item.link}
                    className="text-base leading-[4rem] text-gray-600 hover:text-gray-950 transition-all ease-in-out duration-200"
                  >
                    <PrismicText field={item.name} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="h-full block">
            <Hamburger />
          </div>
        </div>
      </div>
      <MegaMenu navigation={navigation} isMobile={isMobile} />
    </header>
  );
}
