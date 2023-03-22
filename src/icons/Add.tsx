const Add = (props: { size?: number; color?: string; [key: string]: any }) => {
  const { size, color, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        d="M 7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Add;
