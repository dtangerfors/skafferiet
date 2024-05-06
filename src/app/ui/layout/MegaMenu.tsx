import { motion } from "framer-motion"
import Link from "next/link"
import { asText } from "@prismicio/client";
import { MenuProps } from "@/app/layout";

function MenuLink({ to, children }: {to:any, children: any}) {
  return (
    <li className="mb-2">
      <Link
        href={to}
        className="text-neutral-500 hover:text-neutral-700"
      >
        {children}
      </Link>
    </li>
  )
}


export default function MegaMenu({open, menuItems}: {open: boolean, menuItems: MenuProps}) {

  return (
    <motion.div
      initial={{
        y: '-100%',
        opacity: 0,
        display: 'none',
      }}
      animate={{
        y: open ? 0 : '-100%',
        opacity: open ? 1 : 0,
        display: open ? 'block' : 'none',
      }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="absolute top-12 md:top-16 left-0 w-full -z-10 bg-tertiary-100 border-tertiary-200 border-b px-6 pt-10 pb-6"
    >
      <div className="max-w-screen-lg mx-auto py-6" key="menu-container">
        <ul className="flex flex-wrap gap-4" key="menu-list">
        <li className="flex-1" key="menu-item-1">
            <p className="font-serif text-lg text-primary border-b-2 border-dotted border-tertiary-300 pb-2 mb-4">
              Typ av rätt
            </p>
            <ul>
              {menuItems.courses.map(course => (<MenuLink key={`menu-item-${course.id}`} to={course.url}>{asText(course.data.name)}</MenuLink>))}
            </ul>
          </li>
          <li className="flex-1" key="menu-item-2">
            <p className="font-serif text-lg text-primary border-b-2 border-dotted border-tertiary-300 pb-2 mb-4">
              Om
            </p>
            <ul>
              <MenuLink to="/om" key="menu-item-2-1">Om</MenuLink>
              <MenuLink to="/cookies" key="menu-item-2-2">Cookies</MenuLink>
              <MenuLink to="/webbplatsinformation" key="menu-item-2-3">
                Webbplatsinformation
              </MenuLink>
            </ul>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
