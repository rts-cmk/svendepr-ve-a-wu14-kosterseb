import Image from "next/image";
import Link from "next/link";

const OPENING_HOURS = [
    { day: "Mandag-Fredag", hours: "12.00 - 14.00"},
    { day: "Lørdag", hours: "17.30 - 00.00"},
    { day: "Søndag", hours: "17.30 - 00.00"}
];

const QUICK_LINKS = [
    { name: "Om os", href: "/om-os"},
    { name: "Tjenester", href: "/tjenester"},
    { name: "Trænere", href: "/traenere"},
    { name: "Priser", href: "/priser"},
    { name: "Kontakt", href: "/kontakt"}
]

const CONTACT_INFO = {
    address: "Nørregade 42, 9000 Aalborg",
    email: "info@xtremefitness.dk",
    phone: "+ 45 99751642"
}

export default function Footer() {
return (
    <>
    <footer>
        
    </footer>
    </>
)
}