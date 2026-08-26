import Image from "next/image";
import Link from "next/link";
import Container from "./container";

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

function ColumnHeading({ children }: { children: string }) {
  <h2 className="">
    {children}
  </h2>
}

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <Image 
          src="/icons/footer_left_icon.png"
          width={400}
          height={400}
          alt="footer left icon"
          className=""
          priority
          />
        </div>

        <div>
          <Image
          src="/icons/footer_right_icon.png"
          width={400}
          height={400}
          alt="footer right icon"
          className=""
          priority
          />
        </div>
      </footer>
    </>
  );
}
