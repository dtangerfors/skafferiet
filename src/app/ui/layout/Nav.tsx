import Link from "next/link";
import { BookStack, OpenBook, UserCircle } from "iconoir-react";

function NavPill({
  to,
  children,
  linkName,
}: {
  to: string;
  children?: React.ReactNode;
  linkName: string;
}) {
  return (
    <li>
      <Link
        href={to}
        className="mr-8 flex items-center text-base leading-[4rem] text-neutral-600 text-center hover:text-primary transition-all ease-in-out duration-200"
      >
        {children} <span className="ml-1">{linkName}</span>
      </Link>
    </li>
  );
}

export function Nav() {
  return (
    <nav>
      <ul className="flex flex-wrap">
        <NavPill to="/recept" linkName="Recept">
          <BookStack className="text-sm" />
        </NavPill>
        <NavPill to="/blogg" linkName="Blogg">
          <OpenBook className="text-sm" />
        </NavPill>
        <NavPill to="/om" linkName="Om">
          <UserCircle className="text-sm" />
        </NavPill>
      </ul>
    </nav>
  )
}