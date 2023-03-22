import React from "react";
import { Icon } from "components";
import { Check, Square } from "icons";
import "./Checkbox.scss";

const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: React.ReactEventHandler;
}) => {
  return (
    <>
      <Icon
        icon={checked ? Check : Square}
        className={`checkbox-icon ${checked ? "checked" : "unchecked"}`}
      />
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </>
  );
};

export default Checkbox;
