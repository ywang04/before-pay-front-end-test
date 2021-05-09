import React, { useContext } from 'react';
import TextBox from '../TextBox';
import Button from '../Button';

import { EmploymentContext } from '../../providers/EmploymentProvider';
import postAPI from '../../utils/postAPI';

import './styles.scss';

const BankAccountDetails: React.FC = () => {
  const {
    employmentType,
    bankBSB,
    bankAccout,
    changeBankBSB,
    changeBankAccount,
  } = useContext(EmploymentContext);

  const handleSave = () => {
    /** todo:
     * will add validation here before sending api request
     */
    postAPI('http://localhost:5000', {
      employmentType,
      bankBSB,
      bankAccout,
    });
  };

  return (
    <div className="bank-account-container">
      <TextBox type="text" placeholder="BSB" onChange={changeBankBSB} />
      <TextBox type="text" placeholder="Acc" onChange={changeBankAccount} />
      <Button label="Save" onClick={handleSave} classname="save-button" />
    </div>
  );
};

export default BankAccountDetails;
