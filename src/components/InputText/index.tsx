import React from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

const InputText: React.FC<InputTextProps> = ({ label, id, ...props }) => {
  return (
    <div className="w-full">
      {label !== undefined && (
        <label htmlFor={id} className="mb-2 text-xs text-[#9FA3B9] uppercase">
          {label}
        </label>
      )}
      <div>
        <input
          id={id}
          type="text"
          className="focus:drop-shadow-xl border border-[#8F92A133] h-[48px] px-[14px] w-full"
          aria-invalid="true"
          {...props}
        />
      </div>
    </div>
  );
};

export default InputText;
