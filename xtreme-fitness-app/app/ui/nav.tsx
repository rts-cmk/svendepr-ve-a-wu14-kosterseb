"use client";

import Image from "next/image";
import Link from "next/link";

const PUBLIC_LINKS = [
  { href: "/", label: "Forside" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/traenere", label: "Trænere" },
  { href: "/priser", label: "Priser" },
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/login", label: "Login" },
];

export default function Nav() {
  const link = PUBLIC_LINKS;

  return (
    <>
      <nav className="sticky top-0 z-50">
        <ul className="flex justify-between py-4">
          {link.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
