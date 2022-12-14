import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as LabelPrimitive from "@radix-ui/react-label";
import cx from "classnames";
import React from "react";

const Checkbox = () => {
  return (
    <form className="flex items-center">
      <CheckboxPrimitive.Root
        id="c1"
        defaultChecked
        className={cx(
          "flex h-5 w-5 items-center justify-center rounded",
          "radix-state-checked:bg-sky-600 radix-state-unchecked:border-2 border-grey dark:radix-state-unchecked:border-1 border-grey",
          "focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75"
        )}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="h-4 w-4 self-center text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <LabelPrimitive.Label
        htmlFor="c1"
        className="ml-3 select-none text-sm font-medium text-gray-700 dark:text-gray-100"
      >
        Accept terms and conditions
      </LabelPrimitive.Label>
    </form>
  );
};

export default Checkbox;
