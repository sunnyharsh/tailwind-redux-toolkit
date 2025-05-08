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
      <div className="grid grid-cols-4 gap-9 ">
        <div className="grid grid-cols-subgrid py-3 col-span-1 bg-pink rounded-lg hover:bg-purple text-center">
          01
        </div>
        <div className="grid grid-cols-subgrid py-3 col-span-1 bg-pink rounded-lg hover:bg-purple text-center">
          02
        </div>
        <div className="grid grid-cols-subgrid py-3 col-span-1 bg-pink rounded-lg hover:bg-purple text-center">
          03
        </div>
        <div className="grid grid-cols-subgrid py-3 col-span-1 bg-pink rounded-lg hover:bg-purple text-center">
          04
        </div>
        <div className="grid grid-cols-subgrid py-3 col-span-1 bg-pink rounded-lg hover:bg-purple text-center">
          05
        </div>
        <div className="grid grid-cols-subgrid py-3 col-span-1 bg-pink rounded-lg hover:bg-purple text-center">
          06
        </div>
        <div className="grid grid-cols-subgrid py-3 col-span-1 bg-pink rounded-lg hover:bg-purple text-center">
          07
        </div>
        <div className="grid grid-cols-subgrid py-3 col-span-1 bg-pink rounded-lg hover:bg-purple text-center">
          08
        </div>
      </div>

      {/* here 6 column */}
      <div className="grid grid-cols-6 gap-4 mt-8">
        {/* first div start position 2 and take 4 colspan and merge in single div */}
        <div className="col-start-2 col-span-4 bg-pink rounded-lg hover:bg-purple text-center py-3">
          01
        </div>
        {/* start from 1 end on 3 */}
        <div className="col-start-1 col-end-3 bg-pink rounded-lg hover:bg-purple text-center py-3">
          02
        </div>
        <div className="col-end-7 col-span-2 bg-pink rounded-lg hover:bg-purple text-center py-3">
          03
        </div>
        <div className="col-start-1 col-end-7 bg-pink rounded-lg hover:bg-purple text-center py-3">
          04
        </div>
      </div>

      <div className="w-[300px] lg:w-[440px] mt-4">
        <div className="grid lg:grid-cols-2">
          <div className="bg-purple">
            <p>Hello</p>
          </div>
          <div className="bg-pink">
            <p>World</p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-9">
        <div className="row-span-3 bg-pink">01</div>
        <div className="col-span-2 bg-pink">02</div>
        <div className="row-span-2 col-span-2 bg-pink">03</div>
      </div>
    </>
  );
};
export default TailwindPractice;
