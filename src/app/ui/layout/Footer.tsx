import Link from "next/link";

import { Instagram } from "iconoir-react";

let year = new Date().getFullYear();

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li className="mb-1">
      <Link
        href={to}
        className="text-gray-950/70 hover:text-gray-950 leading-loose"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-tertiary-200">
      <div className="bg-tertiary-100/50 text-center p-6">
        <span className="font-script text-primary text-xl">Daniels Skafferi</span>
      </div>
      <div className="px-6 pt-6">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid lg:grid-cols-12 pt-6 pb-32 gap-10">
            <div className="lg:col-span-6">
              <p className="text-xs text-primary font-semibold uppercase tracking-widest pb-4">
                Daniels Skafferi
              </p>
              <p className="text-gray-950/70">
                På Daniels Skafferi hittar du enkla recept skapade av mig, och
                bra tips för göra matlagningen roligare.
              </p>
            </div>
            <div className="lg:col-span-3">
              <p className="text-xs text-primary font-semibold uppercase tracking-widest pb-4">
                Sociala medier
              </p>
              <ul className="flex flex-col">
                <li>
                  <a
                    href="https://www.instagram.com/danielsskafferi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-950/70 hover:text-gray-950 leading-loose"
                  >
                    <span className="inline-block align-sub">
                      <Instagram width="1.2em" height="1.2em" />
                    </span>{" "}
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <p className="text-xs text-primary font-semibold uppercase tracking-widest pb-4">
                Om
              </p>
              <ul className="flex flex-col">
                <FooterLink to="/om">Om</FooterLink>
                <FooterLink to="/cookies">Cookies</FooterLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-3 px-6">
        <div className="max-w-screen-lg w-full mx-auto border-t border-primary-300 pt-3">
          <p className="font-sans text-gray-950/70 text-xs">
            Copyright &copy; {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
