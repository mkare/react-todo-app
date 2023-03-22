import React from "react";
import "./Button.scss";

type ButtonProps = {
  variant: "primary" | "danger" | "dark" | "light" | "link";
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  icon,
  className,
  disabled,
  type = "button",
}) => {
  function classes() {
    return `button ${variant} ${icon && "with-icon"} ${className && className}`;
  }

  return (
    <button
      className={classes()}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && icon}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
