import React from 'react';
import LineGraph from './LineGraph';
import Map from './Map';
import "./Dashboard.css"
import OverallData from './OverallData';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='dashboard'>
      <OverallData/>
      <Map />
      <LineGraph />
    </div>
    </>
  );
};

export default Dashboard;
