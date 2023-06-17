import React, { useRef } from "react";

export default function SlidingSection({
  children,
  image,
  child,
  reverse,
}: {
  children: React.ReactNode;
  image: string;
  child?: React.ReactNode;
  reverse?: boolean;
}) {
  const scrollRef = useRef(null);

  return (
    <section
      className={`section mb-20 flex flex-col gap-12 px-8 md:px-24 md:items-center ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="rounded_card aspect-[6/4] flex-1 overflow-hidden bg-black">
        {!child && (
          <img className="object-cover w-full grayscale h-full" src={image} alt=""/>
        )}
        {child}
      </div>
      <div className="relative flex-col items-start justify-center flex-1 block text-black sliding_sect__text h-fit">
        {children}
      </div>
    </section>
  );
}
