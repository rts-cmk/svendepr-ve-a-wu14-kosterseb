import Image from "next/image";
import type { ReactNode } from "react";
import Container from "./container";
import { url } from "inspector";

export default function Section({
  fullWidth = false,
  children,
  className = "",
}: {
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section>
      <Image
        src="/headers/section_background.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {fullWidth ? children : <Container>{children}</Container>}
    </section>
  );
}
