import React from "react";

const AtomProgress = props => (
    <div className="progress">
        <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
        />
    </div>
);

export default AtomProgress;
