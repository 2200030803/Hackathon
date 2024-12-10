// Votes.js
import React from 'react';
import './votes.css'; // Make sure the path to your CSS file is correct

const Votes = () => {
  return (
    <div className="votes-page">
      <h1 className="votes-title">Election Vote Details</h1>
      <div className="votes-stats">
        <div className="stats-item">
          <h3>Total Votes</h3>
          <p>500,000</p>
        </div>
        <div className="stats-item">
          <h3>Total Men</h3>
          <p>300,000</p>
        </div>
        <div className="stats-item">
          <h3>Total Women</h3>
          <p>200,000</p>
        </div>
        <div className="stats-item">
          <h3>Age Group</h3>
          <p>18-30: 250,000 | 31-50: 150,000 | 51+: 100,000</p>
        </div>
        <div className="stats-item">
          <h3>Votes by District</h3>
          <p>District 1: 50,000 | District 2: 75,000 | District 3: 100,000</p>
        </div>
      </div>
    </div>
  );
};

export default Votes;
