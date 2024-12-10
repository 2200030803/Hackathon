// src/Admin/Report/InactiveVoterReport.js
import React from 'react';

const InactiveVoterReport = () => {
  const inactiveVotersData = [
    { id: 1, name: 'John Doe', lastVote: '2020' },
    { id: 2, name: 'Jane Smith', lastVote: '2019' },
  ];

  return (
    <div>
      <h2>Inactive Voter Reports</h2>
      <ul>
        {inactiveVotersData.map((voter) => (
          <li key={voter.id}>
            {voter.name} - Last Vote Year: {voter.lastVote}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InactiveVoterReport;
