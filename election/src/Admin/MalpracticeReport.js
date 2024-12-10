// src/Admin/Report/MalpracticeReport.js
import React from 'react';

const MalpracticeReport = () => {
  const malpracticeData = [
    { id: 1, description: 'Vote tampering detected in District A', date: '2024-12-01' },
    { id: 2, description: 'Duplicate votes identified in District B', date: '2024-12-03' },
  ];

  return (
    <div>
      <h2>Malpractice Reports</h2>
      <ul>
        {malpracticeData.map((report) => (
          <li key={report.id}>
            <strong>{report.description}</strong> (Date: {report.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MalpracticeReport;
