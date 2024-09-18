import React from "react";
import { Divider, ExpertiseSection } from "../components";
import { expertiseData } from "../data/selections";

const Expertise = () => {
    return (
        <div className="expertise px-12">
            <div>
                <Divider title="Expertise" />
                <div className="flex">
                    <div className="w-[290px]"></div>
                    <div className="flex-1">
                        <ExpertiseSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise;