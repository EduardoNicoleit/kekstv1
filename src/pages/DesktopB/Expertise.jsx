import React from "react";
import { Divider, ExpertiseSection } from "../../components";
import { expertiseData } from "../../data/selections";

const Expertise = () => {
  return (
    <div className="expertise min-h-screen py-8 px-3 md:px-8 lg:px-16">
      <Divider title="Expertise" />
      <div className="flex flex-col lg:flex-row">
        {/* Empty space or sidebar */}
        <div className="hidden lg:block lg:w-[260px]"></div>

        {/* Main Content Section */}
        <div className="flex-1 lg:pl-8">
          <ExpertiseSection expertiseData={expertiseData} />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
