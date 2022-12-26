import { t } from "i18next";
import React from "react";

interface InputDropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  values: { text: string; value: string }[];
  label?: React.ReactNode;
}

const InputDropdown: React.FC<InputDropdownProps> = ({
  values,
  label,
  id,
  ...props
}) => (
  <div className="w-full">
    {label !== undefined && (
      <label htmlFor={id} className="mb-2 text-xs text-[#9FA3B9] uppercase">
        {label}
      </label>
    )}
    <div>
      <select
        id={id}
        {...props}
        className="focus:drop-shadow-xl border border-[#8F92A133] h-[48px] px-[14px] w-full"
      >
        {values.map(({ value, text }) => (
          <option value={value} key={value}>
            {t(text)}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default InputDropdown;
