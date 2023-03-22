import React from "react";

interface IconProps {
  icon: React.FC<{ width: number; height: number; color: string }>;
  size?: number;
  color?: string;
  [key: string]: any;
}

function Icon(props: IconProps): React.ReactElement | null {
  const {
    icon: IconComponent,
    size = 24,
    color = "currentColor",
    ...rest
  } = props;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color={color} {...rest} />;
}

export default Icon;
