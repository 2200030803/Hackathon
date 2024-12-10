import React, { useState } from 'react';
import './Report.css'; // Import the CSS for styling

const Report = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('malpractice');

  // Data for each report section
  const [malpracticeReports, setMalpracticeReports] = useState([
    { id: 1, description: "Malpractice in polling station 5." },
    { id: 2, description: "Unauthorized access detected in area 3." },
  ]);

  const [inactiveVoterReports, setInactiveVoterReports] = useState([
    { id: 1, voterName: "John Doe", reason: "Did not vote in 3 elections." },
    { id: 2, voterName: "Jane Smith", reason: "Moved to another region." },
  ]);

  const [activityReports, setActivityReports] = useState([
    { id: 1, activity: "Polling station 2 opened at 9 AM." },
    { id: 2, activity: "Vote counting started in region 4." },
  ]);

  // State to track the input for new report
  const [newReport, setNewReport] = useState({
    description: '',
    voterName: '',
    reason: '',
    activity: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport({
      ...newReport,
      [name]: value
    });
  };

  // Add new report to the respective section
  const addReport = () => {
    if (activeTab === 'malpractice' && newReport.description) {
      setMalpracticeReports([
        ...malpracticeReports,
        { id: malpracticeReports.length + 1, description: newReport.description }
      ]);
      setNewReport({ ...newReport, description: '' });
    } else if (activeTab === 'inactive' && newReport.voterName && newReport.reason) {
      setInactiveVoterReports([
        ...inactiveVoterReports,
        { id: inactiveVoterReports.length + 1, voterName: newReport.voterName, reason: newReport.reason }
      ]);
      setNewReport({ ...newReport, voterName: '', reason: '' });
    } else if (activeTab === 'activity' && newReport.activity) {
      setActivityReports([
        ...activityReports,
        { id: activityReports.length + 1, activity: newReport.activity }
      ]);
      setNewReport({ ...newReport, activity: '' });
    }
  };

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'malpractice':
        return (
          <div className="report-section">
            <h2>Malpractice Reports</h2>
            <ul>
              {malpracticeReports.map((report) => (
                <li key={report.id}>{report.description}</li>
              ))}
            </ul>
            <div className="add-report">
              <input
                type="text"
                name="description"
                value={newReport.description}
                onChange={handleInputChange}
                placeholder="Add Malpractice Report"
              />
              <button onClick={addReport}>Add Report</button>
            </div>
          </div>
        );
      case 'inactive':
        return (
          <div className="report-section">
            <h2>Inactive Voter Reports</h2>
            <ul>
              {inactiveVoterReports.map((report) => (
                <li key={report.id}>
                  {report.voterName}: {report.reason}
                </li>
              ))}
            </ul>
            <div className="add-report">
              <input
                type="text"
                name="voterName"
                value={newReport.voterName}
                onChange={handleInputChange}
                placeholder="Voter Name"
              />
              <input
                type="text"
                name="reason"
                value={newReport.reason}
                onChange={handleInputChange}
                placeholder="Reason for Inactivity"
              />
              <button onClick={addReport}>Add Report</button>
            </div>
          </div>
        );
      case 'activity':
        return (
          <div className="report-section">
            <h2>Activity Reports</h2>
            <ul>
              {activityReports.map((report) => (
                <li key={report.id}>{report.activity}</li>
              ))}
            </ul>
            <div className="add-report">
              <input
                type="text"
                name="activity"
                value={newReport.activity}
                onChange={handleInputChange}
                placeholder="Add Activity Report"
              />
              <button onClick={addReport}>Add Report</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="report-page">
      <h1>Election Reports</h1>
      
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={activeTab === 'malpractice' ? 'active' : ''}
          onClick={() => setActiveTab('malpractice')}
        >
          Malpractice Reports
        </button>
        <button
          className={activeTab === 'inactive' ? 'active' : ''}
          onClick={() => setActiveTab('inactive')}
        >
          Inactive Voter Reports
        </button>
        <button
          className={activeTab === 'activity' ? 'active' : ''}
          onClick={() => setActiveTab('activity')}
        >
          Activity Reports
        </button>
      </div>

      {/* Content Rendering Based on Active Tab */}
      {renderContent()}
    </div>
  );
};

export default Report;
