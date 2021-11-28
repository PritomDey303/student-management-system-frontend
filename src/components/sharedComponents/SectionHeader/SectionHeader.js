import React from "react";

export default function SectionHeader(props) {
  return (
    <div>
      <div className="section-heading text-center">
        <h1 className="text-green">{props.heading}</h1>
        <p className="lead">{props.paragraph}</p>
      </div>
    </div>
  );
}
