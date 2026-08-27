"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./container";

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
    <header>
      <nav className="top-0 z-50 sticky">
        <Container>
        <ul className="absolute flex py-8 px-100">
          <Link href={"/"} >
          <Image 
          src="/icons/logo.png"
          width={200}
          height={100}
          className="absolute inset-x-0 pl-10"
          alt="logo"
          />
          </Link>
          {link.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} 
                className="block whitespace-nowrap px-8 py-8 text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        </Container>
      </nav>
      </header>
  );
}
