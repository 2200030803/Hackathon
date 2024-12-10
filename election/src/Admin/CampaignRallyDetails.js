import React, { useState } from 'react';
import './CampaignRallyDetails.css';

const CampaignRallyDetails = () => {
  const [rallyDetails, setRallyDetails] = useState([]);
  const [formData, setFormData] = useState({
    partyName: '',
    date: '',
    time: '',
    venue: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDetail = () => {
    const { partyName, date, time, venue } = formData;

    if (partyName && date && time && venue) {
      setRallyDetails([...rallyDetails, formData]);
      setFormData({ partyName: '', date: '', time: '', venue: '' });
    } else {
      alert('Please fill all fields before adding the detail.');
    }
  };

  return (
    <div className="campaign-rally-details">
      <h2 className="text-center">Campaign Rally Details</h2>
      
      {/* Form to Add Details */}
      <div className="form-container">
        <label>Party Name:</label>
        <input
          type="text"
          name="partyName"
          value={formData.partyName}
          onChange={handleInputChange}
          placeholder="Enter Party Name"
        />
        
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
        />
        
        <label>Venue:</label>
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleInputChange}
          placeholder="Enter Venue"
        />
        
        <button className="add-button" onClick={handleAddDetail}>
          Add Rally Detail
        </button>
      </div>

      {/* Display Added Details */}
      <div className="details-list">
        <h3>Added Rally Details</h3>
        <ul>
          {rallyDetails.map((detail, index) => (
            <li key={index}>
              <strong>Party:</strong> {detail.partyName} | 
              <strong> Date:</strong> {detail.date} | 
              <strong> Time:</strong> {detail.time} | 
              <strong> Venue:</strong> {detail.venue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CampaignRallyDetails;
