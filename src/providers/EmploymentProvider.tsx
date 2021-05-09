import React, { createContext, useState } from 'react';

interface EmploymentInterface {
  employmentType: string;
  bankAccountStatus: boolean;
  employmentTypeHidden: boolean;
  bankBSB: string;
  bankAccout: string;
  changeEmploymentType: (value: string) => void;
  changeBankAccountStatus: () => void;
  changeBankBSB: (value: string) => void;
  changeBankAccount: (value: string) => void;
}

export const EmploymentContext = createContext<EmploymentInterface>({
  employmentType: '',
  bankAccountStatus: false,
  employmentTypeHidden: false,
  bankBSB: '',
  bankAccout: '',
  changeEmploymentType: () => {},
  changeBankAccountStatus: () => {},
  changeBankBSB: () => {},
  changeBankAccount: () => {},
});

const EmploymentDetailsProvider: React.FC = ({ children }) => {
  const [employmentType, setEmploymentType] = useState('');
  const [bankAccountStatus, setBankAccountStatus] = useState(false);
  const [employmentTypeHidden, setEmploymentTypeHidden] = useState(false);
  const [bankBSB, setBankBSB] = useState('');
  const [bankAccout, setBankAccount] = useState('');

  // next button will be shown when customer selects employment type from the dropdown
  const changeEmploymentType = (value: string) =>
    value && setEmploymentType(value);

  // save button will be shown when bank details section is shown and also hide employment type
  const changeBankAccountStatus = () => {
    setBankAccountStatus(true);
    setEmploymentTypeHidden(true);
  };

  // get bank account number
  const changeBankAccount = (value: string) => {
    value && setBankAccount(value);
  };

  // get bank bsb number
  const changeBankBSB = (value: string) => {
    value && setBankBSB(value);
  };

  return (
    <EmploymentContext.Provider
      value={{
        employmentType,
        changeEmploymentType,
        bankAccountStatus,
        changeBankAccountStatus,
        employmentTypeHidden,
        bankBSB,
        bankAccout,
        changeBankAccount,
        changeBankBSB,
      }}
    >
      {children}
    </EmploymentContext.Provider>
  );
};

export default EmploymentDetailsProvider;
