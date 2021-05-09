import React, { useState } from 'react';

interface TextBoxProps {
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
}

/**
 * todo:
 * will add style based on UX design later
 */
const TextBox: React.FC<TextBoxProps> = ({ type, placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className="text-container">
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextBox;
