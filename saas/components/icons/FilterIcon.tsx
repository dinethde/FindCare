import React from "react";

type UserProfileIconProps = {
  color?: string;
  className?: string;
};

const FilterIcon = ({ color = "#333", className }: UserProfileIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      className={className}
    >
      <circle cx="2.5" cy="3" r="2" stroke={color} />
      <line x1="6" y1="3" x2="16" y2="3" stroke={color} />
      <circle
        cx="2.5"
        cy="2.5"
        r="2"
        transform="matrix(-1 0 0 1 16 7.5)"
        stroke={color}
      />
      <line
        y1="-0.5"
        x2="10"
        y2="-0.5"
        transform="matrix(-1 0 0 1 10 10.5)"
        stroke={color}
      />
    </svg>
  );
};

export default FilterIcon;
