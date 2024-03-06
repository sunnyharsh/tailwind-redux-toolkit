import React from "react";

const TailwindPractice = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="bg-pink basis-1/4 md:basis-1/2">1</div>
        <div className="bg-pink basis-1/4">2</div>
        <div className="bg-pink basis-1/4">3</div>
        <div className="bg-pink basis-1/4">4</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-purple">01</div>
        <div className="bg-purple">02</div>
        <div className="bg-purple">03</div>
        <div className="bg-purple">04</div>
      </div>
      <div className="flex gap-3">
        <div className="bg-orange basis-1/2">01</div>
        <div className="bg-orange basis-1/4">02</div>
        <div className="bg-orange basis-1/4">03</div>
      </div>

      <div className="grid grid-cols-12 gap-4 justify-center">
        <div className="bg-green xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:bg-purple">
          01
        </div>
        <div className="bg-green xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          02
        </div>
        <div className="bg-green xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          03
        </div>
        <div className="bg-green xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          03
        </div>
      </div>
      <div>
        <div className="text-10xl">card</div>
      </div>
      <div className="bg-blue h-screen grid place-content-center">
        <h1 className="antialiased md:subpixel-antialiased text-5xl ">hello</h1>
        <p className="italic hover:not-italic font-black">
          The quick brown fox ...
        </p>
        <p className="italic  md:not-italic tracking-widest">
          The quick brown fox ...
        </p>
        <p className="not-italic">The quick brown fox ...</p>
        <p className="ordinal">1st</p>
        <p className="ordinal slashed-zero tabular-nums">1234567890</p>
      </div>
    </>
  );
};
export default TailwindPractice;
