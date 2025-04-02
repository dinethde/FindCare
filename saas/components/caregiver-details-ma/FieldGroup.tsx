import type { ReactNode } from "react";

/**
 * Props for the FieldGroup component
 */
interface FieldGroupProps {
  children: ReactNode;
}

/**
 * FieldGroup component provides visual grouping for related fields
 * with a separator line between groups
 */
const FieldGroup = ({ children }: FieldGroupProps) => {
  return (
    <div className="divide-y border-[0.5px] rounded-[12px] border-gray-200">
      {children}
    </div>
  );
};

export default FieldGroup;
