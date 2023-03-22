import React from "react";
import "./Input.scss";

type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      className={`input`}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
