import React from "react";

const AtomLink = props => (
  <a href={props.linkURL} className="card-link">
    {props.linkText}
  </a>
);

export default AtomLink;