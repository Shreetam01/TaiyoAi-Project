import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OverallData.css';

const OverallData = () => {
  const [overallData, setOverallData] = useState(null);

  useEffect(() => {
    const fetchOverallData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/all');
        setOverallData(response.data);
      } catch (error) {
        console.error('Error fetching overall data:', error);
      }
    };

    fetchOverallData();
  }, []);

  return (
    <div className="overall-data-container">
      <h2>COVID-19 Overall Data</h2>
      {overallData ? (
        <table className="overall-data-table">
          <tbody>
            <tr>
              <th>Cases</th>
              <td>{overallData.cases}</td>
            </tr>
            <tr>
              <th>Today Cases</th>
              <td>{overallData.todayCases}</td>
            </tr>
            <tr>
              <th>Deaths</th>
              <td>{overallData.deaths}</td>
            </tr>
            <tr>
              <th>Today Deaths</th>
              <td>{overallData.todayDeaths}</td>
            </tr>
            <tr>
              <th>Recovered</th>
              <td>{overallData.recovered}</td>
            </tr>
            <tr>
              <th>Today Recovered</th>
              <td>{overallData.todayRecovered}</td>
            </tr>
            <tr>
              <th>Active</th>
              <td>{overallData.active}</td>
            </tr>
            <tr>
              <th>Critical</th>
              <td>{overallData.critical}</td>
            </tr>
            <tr>
              <th>Cases Per One Million</th>
              <td>{overallData.casesPerOneMillion}</td>
            </tr>
            <tr>
              <th>Deaths Per One Million</th>
              <td>{overallData.deathsPerOneMillion}</td>
            </tr>
            <tr>
              <th>Tests</th>
              <td>{overallData.tests}</td>
            </tr>
            <tr>
              <th>Tests Per One Million</th>
              <td>{overallData.testsPerOneMillion}</td>
            </tr>
            <tr>
              <th>Population</th>
              <td>{overallData.population}</td>
            </tr>
            <tr>
              <th>Affected Countries</th>
              <td>{overallData.affectedCountries}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OverallData;
