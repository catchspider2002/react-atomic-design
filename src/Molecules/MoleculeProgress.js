import React from "react";
import Progress from "./Atoms/AtomProgress";

const MoleculeProgress = props => (
    <>
        <div className="grid-2 moleculeProgress">
            <span className="smallest-text text-left grid-item-1">{props.label}</span>
            <span className="smallest-text text-right grid-item-2">{props.value}%</span>
            <Progress value={props.value} />
        </div>
    </>
);

export default MoleculeProgress;
