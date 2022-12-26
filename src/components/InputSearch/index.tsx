import React from "react";
import classNames from "classnames";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { t } from "i18next";

const InputSearch: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <div className="flex relative drop-shadow-sm hover:drop-shadow-md active:drop-shadow-md focus:drop-shadow-md">
    <MagnifyingGlassIcon className="absolute h-6 w-6 left-[21px] top-[20px]" />
    <input
      type="text"
      name="search"
      placeholder={t("search-for-a-user") || ""}
      className={classNames(
        "placeholder:text-sm placeholder:text-black py-[20px] pr-[26px] pl-[60px] w-[320px] rounded-lg"
      )}
      aria-invalid="true"
      {...props}
    />
  </div>
);

export default InputSearch;
