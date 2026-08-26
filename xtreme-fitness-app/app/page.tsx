import Image from "next/image";
import Section from "@/app/ui/section"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold">XtremeFitness</h1>
      <Section />
    </div>
  );
}
