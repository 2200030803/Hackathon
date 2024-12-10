import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For navigation
import './Admin.css';

const AdminFormsPage = () => {
  return (
    <div className="admin-container">
      <h2>Election Monitoring Project - Admin Panel</h2>
      <div className="buttons">
        <Button variant="success" className="me-2">+ Add Form</Button>
        <Button variant="primary">+ Add Folder</Button>
      </div>

      <Accordion defaultActiveKey="0" className="mt-3">
        {/* Campaign Rally Report Form */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Campaign Rally Report Form</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/campaign-rally-details">Rally Details</Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Complaints, Violations, and Irregularities */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Details of Activity</Accordion.Header>
          <Accordion.Body>
            <Link to="/details-of-activity" className="activate-link">
              View Details of Activity
            </Link>
          </Accordion.Body>
        </Accordion.Item>

        {/* Details of Poll Closing */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Details of Poll Closing</Accordion.Header>
          <Accordion.Body>
            <Link to="/details-of-poll-closing" className="activate-link">
              View Details of Poll Closing
            </Link>
          </Accordion.Body>
        </Accordion.Item>

        {/* Polling Center Opening Form */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Polling Center Opening Form</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/polling-center-opening-details">Details of Center Opening</Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Polling Station Observation Form */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Polling Station Observation Form</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/polling-station-observation-details">Observation Details</Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AdminFormsPage;
