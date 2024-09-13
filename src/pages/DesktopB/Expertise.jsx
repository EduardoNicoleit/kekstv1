import React from "react";
import { Divider, ExpertiseSection } from "../../components";
import { expertiseData } from "../../data/selections";

const Expertise = () => {
  return (
    <div>
      <div className="expertise">
        <Divider title="Expertise" />
        <div className="flex">
          <div className="w-[300px]"></div>
          <div className="flex-1 pl-8 ">
            <ExpertiseSection expertiseData={expertiseData} />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Divider title="Expertise" />
        <div className="flex">
          <div className="w-[300px]"></div>
          <div className="flex-1 pl-8 ">
            <ExpertiseSection expertiseData={expertiseData} />
          </div>
        </div>
      </div>
      <div>
        <Divider title="Showcase." />
      </div>
    </div>
  );
};

export default Expertise;
