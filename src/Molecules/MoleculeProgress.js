import React from "react";

const MoleculeProgress = props => (
    <div className="progress">
        <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
);

export default MoleculeProgress;
