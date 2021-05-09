import React from 'react';
import SignUp from '../SignUp';
import EmploymentDetails from '../EmploymentDetails';

import './styles.scss';

const Timeline: React.FC = () => {
  return (
    <div className="time-line">
      <div className="container inactived">
        <SignUp />
      </div>
      <div className="container actived">
        <EmploymentDetails />
      </div>
      <div className="container inactived">
        <div>
          <h4>Bank connection</h4>
        </div>
      </div>
      <div className="container inactived">
        <div>
          <h4>ID check</h4>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
