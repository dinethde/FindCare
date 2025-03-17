import React from "react";

type NestedCirclesIconProps = {
  color: string;
};

const hexToRgba = (hex: string, opacity: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default function NestedCirclesIcon({ color }: NestedCirclesIconProps) {
  return (
    // Wrapper div
    <div
      className="w-9 h-9 relative flex justify-center content-center flex-wrap rounded-[50%]"
      style={{ backgroundColor: hexToRgba(color, 0.2) }}
    >
      {/* Main div */}
      <div
        className="w-5 h-5 rounded-[50%] relative flex justify-center content-center flex-wrap "
        style={{ backgroundColor: color }}
      >
        {/* Inner div */}
        <div className="w-1 h-1 rounded-[50%] relative  bg-white "></div>
      </div>
    </div>
  );
}
