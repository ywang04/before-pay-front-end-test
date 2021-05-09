import React from 'react';

interface DropdownItemProps {
  type: string;
  description: string;
}

/**
 * todo:
 * may need to rewrite vanilla select and option to meet the UX design
 *
 */
const DropdownItem: React.FC<DropdownItemProps> = ({ type, description }) => {
  return <option value={type}>{description}</option>;
};

export default DropdownItem;
