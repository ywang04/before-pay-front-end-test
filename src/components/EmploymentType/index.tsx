import React, { useContext } from 'react';
import Button from '../Button';
import DropDown from '../Dropdown';

import { EmploymentContext } from '../../providers/EmploymentProvider';
import './styles.scss';

const EmploymentType: React.FC = () => {
  const { employmentType, changeBankAccountStatus } = useContext(
    EmploymentContext
  );

  return (
    <div className="employment-type-container">
      <DropDown classname="employment-select" />
      {employmentType && (
        <Button
          label="Next"
          onClick={() => changeBankAccountStatus()}
          classname="next-button"
        />
      )}
    </div>
  );
};

export default EmploymentType;
