import React from 'react';
import SideBar from '../../components/SideBar';
import Timeline from '../../components/Timeline';

import './styles.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <SideBar
        title="Enter your employment details."
        description="Please ensure these details are correct because we'll use these to set
        up your account."
      />
      <Timeline />
    </div>
  );
};

export default HomePage;
