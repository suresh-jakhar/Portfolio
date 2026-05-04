import React from "react";
import DotPattern from "./ui/dot-pattern-1";

export function Quote() {
  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-5xl px-6 xl:px-0">
        <div className="relative flex flex-col items-center border border-red-500/50 rounded-lg overflow-hidden bg-neutral-900/20">
          <DotPattern width={5} height={5} className="fill-red-500/20" />

          {/* Corner accents */}
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white z-30" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500 text-white z-30" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white z-30" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500 text-white z-30" />

          <div className="relative z-20 mx-auto max-w-4xl py-10 px-6 md:p-10 xl:py-16 text-white text-center md:text-left">
            <p className="md:text-md text-xs text-red-500 lg:text-lg xl:text-xl mb-4 font-black uppercase tracking-[0.2em]">
              I believe
            </p>
            <div className="text-2xl tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <h1 className="font-semibold italic">"Design should be</h1>
                <p className="font-thin text-gray-400">easy to</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <p className="font-thin text-gray-400">understand</p>
                <h1 className="font-semibold italic">because</h1>
                <p className="font-thin text-gray-400">simple</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <p className="font-thin text-gray-400">ideas</p>
                <h1 className="font-semibold italic">are quicker to</h1>
              </div>
              <h1 className="font-semibold italic">grasp..."</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
