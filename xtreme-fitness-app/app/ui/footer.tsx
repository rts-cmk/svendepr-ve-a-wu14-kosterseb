import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const OPENING_HOURS = [
  { day: "Mandag-Fredag", hours: "12.00 - 14.00" },
  { day: "Lørdag", hours: "17.30 - 00.00" },
  { day: "Søndag", hours: "17.30 - 00.00" },
];

const QUICK_LINKS = [
  { name: "Om os", href: "/om-os" },
  { name: "Tjenester", href: "/tjenester" },
  { name: "Trænere", href: "/traenere" },
  { name: "Priser", href: "/priser" },
  { name: "Kontakt", href: "/kontakt" },
];

const CONTACT_INFO = {
  address: "Nørregade 42, 9000 Aalborg",
  email: "info@xtremefitness.dk",
  phone: "+ 45 99751642",
};

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

function ColumnHeading({ children }: { children: string }) {
  return <h2 className="text-lg text-white">{children}</h2>;
}

export default function Footer() {
  return (
    <footer className="relative bg-black grid gap-10 py-20">
      <Image
        src="/icons/footer_left_icon.png"
        width={200}
        height={200}
        alt="footer left icon"
        className="pointer-events-none absolute -left-6 top-20 md:block"
        priority
      />

      <Image
        src="/icons/footer_right_icon.png"
        width={200}
        height={200}
        alt="footer right icon"
        className="pointer-events-none absolute -right-6 top-20 md:block"
        priority
      />

      <Container className="relative grid gap-10 py-section lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Image src="/icons/logo.png" width={140} height={60} alt="logo" />
          <p className="max-w-xs text-sm text-white/60">
            Hos os handler træning om glæde, kvalitet og resultater
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Opening Hours */}

        <div className="flex flex-col gap-5">
          <ColumnHeading>Åbningstider</ColumnHeading>
          <ul className="flex flex-col gap-4">
            {OPENING_HOURS.map((time) => (
              <li key={time.day}>
                <p className="text-sm font-semibold text-white">{time.day}</p>
                <p className="mt-1 text-sm text-white">{time.hours}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5">
          <ColumnHeading>Hurtige Links</ColumnHeading>
          <ul className="flex flex-col gap-4">
            {QUICK_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white transition-colors"
                >
                  <FaChevronRight size={14} className="" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-5">
          <ColumnHeading>Kontakt os</ColumnHeading>
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <p className="font-semibold text-white">Adresse:</p>
              <p className="mt-1 text-white">{CONTACT_INFO.address}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Email:</p>
              <p className="mt-1 text-white">{CONTACT_INFO.email}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Telefon:</p>
              <p className="mt-1 text-white">{CONTACT_INFO.phone}</p>
            </div>
          </div>
        </div>
      </Container>

      {/* copyright stuff */}
      <div className="border-t border-white/10">
        <Container className="flex justify-center py-9">
          <p className="text-xs text-white/50">
            Copyright {new Date().getFullYear()} xtremefitness.dk - All Rights
            Reserved
          </p>
        </Container>
      </div>
    </footer>
  );
}
