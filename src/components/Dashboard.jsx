import React from 'react';
import LineGraph from './LineGraph';
import Map from './Map';
import "./Dashboard.css"
import OverallData from './OverallData';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <OverallData/>
      <Map />
      <LineGraph />
    </div>
  );
};

export default Dashboard;
