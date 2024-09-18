import React from 'react';
import Selection from '../../components/Selection';
import { selectionsData } from '../../data/selections';
import Divider from '../../components/Divider';

const Works = () => {
    return (
        <div className="works section-background">
            <Divider title="Our Work" />
            <Selection selectionsData={selectionsData} />
        </div>
    );
};

export default Works;
