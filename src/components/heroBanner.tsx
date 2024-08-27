import Link from "next/link";
import React from "react";
const HeroBanner = () => {
  return (
    <div className="my-10 flex flex-col gap-3">
      <p className="text-2xl font-bold text-primaryTextColor md:text-3xl">
        Discover the Latest in Electronics
      </p>
      <hr className="w-16 border-t-4 border-red-500" />
      <p>Check out new tech that changes everything.</p>
      <button className="mt-4 bg-black px-2 py-3 sm:px-4 lg:max-w-[50%]">
        <Link href={"/electronics"}>Check the electronics</Link>
      </button>
    </div>
  );
};

export default HeroBanner;
