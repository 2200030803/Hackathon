import React, { useState } from 'react';
import './DetailsOfActivity.css';

const DetailsOfActivity = () => {
  const [activityDetails, setActivityDetails] = useState([]);
  const [formData, setFormData] = useState({
    activityName: '',
    date: '',
    location: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDetail = () => {
    const { activityName, date, location, description } = formData;

    if (activityName && date && location && description) {
      setActivityDetails([...activityDetails, formData]);
      setFormData({ activityName: '', date: '', location: '', description: '' });
    } else {
      alert('Please fill all fields before adding the detail.');
    }
  };

  return (
    <div className="details-of-activity">
      <h2 className="text-center">Details of Activity</h2>
      
      {/* Form to Add Details */}
      <div className="form-container">
        <label>Activity Name:</label>
        <input
          type="text"
          name="activityName"
          value={formData.activityName}
          onChange={handleInputChange}
          placeholder="Enter Activity Name"
        />
        
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Enter Location"
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter Description"
        />
        
        <button className="add-button" onClick={handleAddDetail}>
          Add Activity Detail
        </button>
      </div>

      {/* Display Added Details */}
      <div className="details-list">
        <h3>Added Activity Details</h3>
        <ul>
          {activityDetails.map((detail, index) => (
            <li key={index}>
              <strong>Activity:</strong> {detail.activityName} | 
              <strong> Date:</strong> {detail.date} | 
              <strong> Location:</strong> {detail.location} | 
              <strong> Description:</strong> {detail.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailsOfActivity;
