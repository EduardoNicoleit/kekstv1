import React from "react";
import { Selection, Divider } from "../components";
import { selectionsData } from "../data/selections";

const WorksCompo = () => {
    return (
        <div className="px-12 works">
            <Divider title="Our work" />
            <Selection selectionsData={selectionsData} />
        </div>
    )
}

export default WorksCompo;