import React from "react";

export default function LogoText() {
  return (
    <div
      className="flex flex-col h-full items-start justify-center tracking-widest uppercase text-white
                                    group-hover:from-[#f9f871] group-hover:to-[#ffc75f] group-hover:via-[#ffc75f] group-hover:text-transparent
                                    group-hover:bg-clip-text group-hover:bg-gradient-to-r"
    >
      <h2 className="text-[0.5rem] font-normal sm:text-xs sm:font-light">
        University of Toronto
      </h2>
      <h1 className="text-sm sm:text-xl font-bold">Blockchain Group</h1>
    </div>
  );
}
