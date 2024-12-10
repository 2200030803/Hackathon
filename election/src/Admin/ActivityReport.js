// src/Admin/Report/ActivityReport.js
import React from 'react';

const ActivityReport = () => {
  const activityData = [
    { id: 1, description: 'District A conducted a campaign rally', date: '2024-12-02' },
    { id: 2, description: 'District B voter turnout was 70%', date: '2024-12-04' },
  ];

  return (
    <div>
      <h2>Activity Reports</h2>
      <ul>
        {activityData.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.description}</strong> (Date: {activity.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityReport;
