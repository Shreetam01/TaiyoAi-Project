import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import "./LineGraph.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 365; // Number of items to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        setData(result.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const dates = Object.keys(data.cases);
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);
  const recovered = Object.values(data.recovered);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDates = dates.slice(startIndex, endIndex);
  const paginatedCases = cases.slice(startIndex, endIndex);
  const paginatedDeaths = deaths.slice(startIndex, endIndex);
  const paginatedRecovered = recovered.slice(startIndex, endIndex);

  const chartData = {
    labels: paginatedDates,
    datasets: [
      {
        label: "Cases",
        data: paginatedCases,
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: "Deaths",
        data: paginatedDeaths,
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Recovered",
        data: paginatedRecovered,
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "COVID-19 Case Fluctuations",
      },
    },
  };

  return (
    <div className="lineGraph">
      <Line data={chartData} options={options} />
      <div className="lineGraph-arr">
        {Array.from({ length: Math.ceil(dates.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LineGraph;
