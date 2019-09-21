import React from "react";

const AtomPricingText = props => {
    // let pricingClass = "enabledPricingText";

    // if (props.valid !== "yes") pricingClass = "disabledPricingText";
    // return <li className={pricingClass}>{props.value}</li>;

    return (
        <li
            className={
                props.valid !== "yes"
                    ? "disabledPricingText"
                    : "enabledPricingText"
            }
        >
            {props.value}
        </li>
    );
};

export default AtomPricingText;
