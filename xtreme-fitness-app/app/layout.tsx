import type { Metadata } from "next";
import { Teko, Ubuntu } from "next/font/google";
import Nav from "@/app/ui/nav";
import Footer from "@/app/ui/footer";
import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Xtreme Fitness",
    template: "%s | Xtreme Fitness",
  },
  description: "Xtreme Fitness Fitness for alle til en god pris",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${ubuntu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
