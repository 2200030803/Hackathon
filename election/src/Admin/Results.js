import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './Results.css';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Results() {
  const [resultsData, setResultsData] = useState({
    totalVotes: 0,
    voterTurnout: 0,
    partyResults: [
      { partyName: 'TDP', votes: 1000 },
      { partyName: 'JANASENA', votes: 800 },
      { partyName: 'YCRSP', votes: 600 },
      { partyName: 'CONGRESS', votes: 600 },
    ],
  });

  const pastelColors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#D5BAFF'];

  // Function to simulate live updates
  const simulateLiveData = () => {
    setResultsData((prevData) => {
      const updatedData = { ...prevData };
      updatedData.totalVotes += Math.floor(Math.random() * 50) + 20;

      updatedData.partyResults = updatedData.partyResults.map((party) => ({
        ...party,
        votes: party.votes + Math.floor(Math.random() * 20), // Randomly increment votes
      }));

      updatedData.voterTurnout = Math.min(
        100,
        (updatedData.totalVotes / 100000) * 100 // Example voter turnout calculation
      );

      return updatedData;
    });
  };

  // Start the live simulation
  useEffect(() => {
    const interval = setInterval(simulateLiveData, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const barChartData = {
    labels: resultsData.partyResults.map((party) => party.partyName),
    datasets: [
      {
        label: 'Votes',
        data: resultsData.partyResults.map((party) => party.votes),
        backgroundColor: pastelColors.slice(0, resultsData.partyResults.length),
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: resultsData.partyResults.map((party) => party.partyName),
    datasets: [
      {
        data: resultsData.partyResults.map((party) => party.votes),
        backgroundColor: pastelColors.slice(0, resultsData.partyResults.length),
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="results-container">
      <header>
        <h1>Live Election Results Dashboard</h1>
      </header>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Votes</h3>
          <p>{resultsData.totalVotes.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Voter Turnout (%)</h3>
          <p>{resultsData.voterTurnout.toFixed(2)}%</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart">
          <h3>Votes by Party</h3>
          <Bar data={barChartData} />
        </div>
        <div className="chart">
          <h3>Votes Distribution</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
}
