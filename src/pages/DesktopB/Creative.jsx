import React from "react";

const CreativeCompo = () => {
  return (
    <div className="text-white font-Arial px-[15%] pb-20">
      <div className="flex flex-row font-bold text-9xl py-4">
        <div className="basis-1/2">Global</div>
        <div className="basis-1/2">Creative</div>
      </div>
      <div className="flex flex-row font-normal text-2xl pt-16">
        <div className="flex basis-1/2">
          <div>01.</div>
          <div className="flex-1 pl-1">
            Our creative team is a global force of the <br /> best and brightest
            minds in the industry.
          </div>
        </div>
        <div className="flex basis-1/2">
          <div>01.</div>
          <div className="flex-1 pl-1">
            We combine strategy, design and technology to create impactful
            solutions that inspire change and shape the future.
          </div>
        </div>
      </div>
      <div className="flex flex-row font-normal text-2xl pt-20">
        <div className="flex basis-1/2">
          <div>02.</div>
          <div className="flex-1 pl-1 px-20">
            By combining forces across locations, we bring our clients’ visions
            to life through seamless collaboration and unparalleled creative
            expertise.
          </div>
        </div>
        <div className="pl-10 flex basis-1/2">
          <div>02.</div>
          <div className="flex-1 pl-1 px-24">
            We focus on real results that amplify your message’s impact.
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreativeCompo;
