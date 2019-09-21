import React from "react";

const AtomProgress = props => {
    const progressStyle = {
        width: props.value + "%"
    };
    return (
        <div className="progress">
            <div
                style={progressStyle}
                className="progress-bar"
                role="progressbar"
                aria-valuenow={props.value}
                aria-valuemin="0"
                aria-valuemax="100"
            />
        </div>
    );
};

export default AtomProgress;
