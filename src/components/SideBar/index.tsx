import React from 'react';
import logo from '../../assets/before-pay-logo.png';

import './styles.scss';

interface SideBarProps {
  title: string;
  description: string;
}

const SideBar: React.FC<SideBarProps> = ({ title, description }) => {
  return (
    <div className="side-bar-container">
      <img src={logo} alt="before-pay-logo" className="logo-white" />
      <section className="title-description">
        <p>{title}</p>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default SideBar;
