import React, { useContext, useState, useEffect } from 'react';
import DropDownItem from '../DropdownItem';
import { EmploymentContext } from '../../providers/EmploymentProvider';

import './styles.scss';

// employmentStatusList will be retrived from API response
const employmentStatusList = [
  {
    id: 1,
    type: 'full-time',
    description: `Full Time You work more than 38 hours per week`,
  },
  {
    id: 2,
    type: 'part-time',
    description: 'Part Time for testing',
  },
];

interface DropDownProps {
  classname: string;
}

const DropDown: React.FC<DropDownProps> = ({ classname }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const { changeEmploymentType } = useContext(EmploymentContext);

  useEffect(() => {
    changeEmploymentType(selectedValue);
  }, [selectedValue, changeEmploymentType]);

  return (
    <select
      name="employment-status"
      id="employment-status"
      onChange={e => setSelectedValue(e.target.value)}
      value={selectedValue}
      className={classname}
    >
      <option value="" disabled>
        Employment Status
      </option>
      {employmentStatusList.map(({ id, type, description }) => (
        <DropDownItem type={type} description={description} key={id} />
      ))}
    </select>
  );
};

export default DropDown;
