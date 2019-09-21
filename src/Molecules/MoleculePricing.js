import React from "react";
import PricingText from "./Atoms/AtomPricingText";

const MoleculePricing = props => (
    <div className="pricingTable col-4">
        <div className="pricingHeader">
            <span>$50 /mo</span>
        </div>
        <div className="pricingBody">
            <h2 className="text-center">$50 /mo</h2>
            <ul className="list-unstyled">
                <PricingText value="Lorem Ipsum Service 5" valid="yes" />
                <PricingText value="Lorem Ipsum Service 2" valid="yes" />
                <PricingText value="Lorem Ipsum Service 3" valid="no" />
                <PricingText value="Lorem Ipsum Service 4" valid="yes" />
                <PricingText value="Lorem Ipsum Service 5" valid="no" />
                <PricingText value="Lorem Ipsum Service 6" valid="no" />
            </ul>
        </div>
    </div>
);

export default MoleculePricing;
