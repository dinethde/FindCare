import type { ReactNode } from "react";

/**
 * Props for the InfoField component
 */
interface InfoFieldProps {
  label: string;
  value: string | ReactNode;
  action?: ReactNode;
}

/**
 * InfoField component displays a label-value pair with an optional action
 */
const InfoField = ({ label, value, action }: InfoFieldProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <span className="text-tagline text-neutral-7">{label}</span>
      <div className="flex items-center gap-2">
        {typeof value === "string" ? (
          <span className="text-right text-regular-text-thicker text-neutral-9">
            {value}
          </span>
        ) : (
          value
        )}
        {action}
      </div>
    </div>
  );
};

export default InfoField;
