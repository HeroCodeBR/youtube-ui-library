import React from 'react';
interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      className={`${className} rounded-md bg-blue-500 `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
