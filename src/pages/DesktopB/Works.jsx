import React from 'react';
import Selection from '../../components/Selection';
import { selectionsData } from '../../data/selections';

const Works = () => {
    return (
        <div className="works section-background">
            <Selection selectionsData={selectionsData} />
        </div>
    );
};

export default Works;
