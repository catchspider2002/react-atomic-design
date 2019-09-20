import React from "react";
import Progress from "./Atoms/AtomProgress";

const MoleculeProgress = props => (
    <>
        <h6 className="text-left">{props.label}</h6>
        <Progress />
    </>
);

export default MoleculeProgress;
