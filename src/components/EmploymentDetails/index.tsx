import React, { useContext } from 'react';
import BankAccountDeatils from '../BankAccountDetails';
import EmploymentType from '../EmploymentType';

import { EmploymentContext } from '../../providers/EmploymentProvider';

import './styles.scss';

const EmploymentDetails: React.FC = () => {
  const { bankAccountStatus, employmentTypeHidden } = useContext(
    EmploymentContext
  );

  return (
    <div className="employment-details">
      <h2>Employ Details</h2>
      {!employmentTypeHidden && <EmploymentType />}
      {bankAccountStatus && <BankAccountDeatils />}
    </div>
  );
};

export default EmploymentDetails;
