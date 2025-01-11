import React, { useState } from "react";

interface props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>{" "}
    </p>
  );
};

export default ExpandableText;
