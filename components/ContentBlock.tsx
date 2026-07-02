import Image from "next/image";
import Reveal from "./Reveal";

export default function ContentBlock({
  heading,
  body,
  image,
  imageAlt,
  align = "left",
  compact = false,
}: {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  align?: "left" | "right";
  compact?: boolean;
}) {
  const textFirst = align === "left";

  const Text = (
    <div className={`max-w-sm ${textFirst ? "text-left" : "text-right md:text-right"} mx-auto md:mx-0`}>
      <Reveal>
        <h3 className="font-display font-medium text-ink text-4xl sm:text-5xl leading-tight mb-6">
          {heading}
        </h3>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-ink/65 leading-relaxed text-[15px]">{body}</p>
      </Reveal>
    </div>
  );

  const Pic = (
    <div className="flex flex-col items-center">
      <span className="w-2.5 h-2.5 rounded-full bg-ink/20 mb-3" />
      <div
        className={`relative w-full ${
          compact ? "max-w-xs h-64" : "max-w-md h-[420px]"
        } overflow-hidden`}
      >
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="500px" />
      </div>
    </div>
  );

  return (
    <section className="bg-cream py-20 sm:py-28 px-6">
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${
          textFirst ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        {textFirst ? (
          <>
            <div className="flex justify-center md:justify-start">{Text}</div>
            {Pic}
          </>
        ) : (
          <>
            {Pic}
            <div className="flex justify-center md:justify-end">{Text}</div>
          </>
        )}
      </div>
    </section>
  );
}
