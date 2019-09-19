import React from "react";
import Link from "./Atoms/AtomLink";

const MoleculeCard = props => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Link linkText="Card Link" linkURL="https://google.com" />
      <Link linkText="Another link" linkURL="https://yahoo.com" />
      <Link linkText="Test link" linkURL="https://google.com" />
    </div>
  </div>
);

export default MoleculeCard;