import React from "react";

type HelpIconProps = {
  color?: string;
};

const HelpIcon = ({ color = "#424957" }: HelpIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
        stroke={color}
      />
      <path
        d="M8.5 11.5C10.1569 11.5 11.5 10.1569 11.5 8.5C11.5 6.84315 10.1569 5.5 8.5 5.5C6.84315 5.5 5.5 6.84315 5.5 8.5C5.5 10.1569 6.84315 11.5 8.5 11.5Z"
        stroke={color}
      />
      <path d="M10.75 6.25L13.75 3.25" stroke={color} />
      <path d="M3.25 13.75L6.25 10.75" stroke={color} />
      <path d="M6.25 6.25L3.25 3.25" stroke={color} />
      <path d="M13.75 13.75L10.75 10.75" stroke={color} />
    </svg>
  );
};

export default HelpIcon;
