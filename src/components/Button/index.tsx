import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  classname: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, classname }) => {
  return (
    <button onClick={onClick} className={classname}>
      {label}
    </button>
  );
};

export default Button;
