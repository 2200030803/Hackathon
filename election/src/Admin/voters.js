import React from 'react';
import './voters.css'; // Ensure this CSS file exists

const votersData = [
  { id: 1, name: 'John Doe', district: 'Krishna', village: 'Machilipatnam', gender: 'Male' },
  { id: 2, name: 'Priya Sharma', district: 'Guntur', village: 'Tenali', gender: 'Female' },
  { id: 3, name: 'Rajesh Kumar', district: 'Visakhapatnam', village: 'Bheemunipatnam', gender: 'Male' },
  { id: 4, name: 'Sita Reddy', district: 'Chittoor', village: 'Tirupati', gender: 'Female' },
  { id: 5, name: 'Mohan Lal', district: 'Kurnool', village: 'Adoni', gender: 'Male' },
  { id: 6, name: 'Latha Devi', district: 'Nellore', village: 'Kavali', gender: 'Female' },
  { id: 7, name: 'Ashok Yadav', district: 'Kadapa', village: 'Proddatur', gender: 'Male' },
  { id: 8, name: 'Anjali Nair', district: 'Anantapur', village: 'Hindupur', gender: 'Female' },
  { id: 9, name: 'Rahul Desai', district: 'Srikakulam', village: 'Palasa', gender: 'Male' },
  { id: 10, name: 'Deepa Joshi', district: 'East Godavari', village: 'Kakinada', gender: 'Female' },
  { id: 11, name: 'Vijay Patil', district: 'Krishna', village: 'Vijayawada', gender: 'Male' },
  { id: 12, name: 'Rekha Nair', district: 'West Godavari', village: 'Eluru', gender: 'Female' },
  { id: 13, name: 'Ravi Teja', district: 'Visakhapatnam', village: 'Araku', gender: 'Male' },
  { id: 14, name: 'Meena Kumari', district: 'Chittoor', village: 'Puttur', gender: 'Female' },
  { id: 15, name: 'Harish Reddy', district: 'Kurnool', village: 'Nandyal', gender: 'Male' },
  { id: 16, name: 'Saritha Babu', district: 'Kadapa', village: 'Rayachoti', gender: 'Female' },
  { id: 17, name: 'Vikram Seth', district: 'Anantapur', village: 'Dharmavaram', gender: 'Male' },
  { id: 18, name: 'Neha Sharma', district: 'Guntur', village: 'Mangalagiri', gender: 'Female' },
  { id: 19, name: 'Ramesh Rao', district: 'Srikakulam', village: 'Amadalavalasa', gender: 'Male' },
  { id: 20, name: 'Aditi Kapoor', district: 'East Godavari', village: 'Samalkot', gender: 'Female' },
  { id: 21, name: 'Karthik Varma', district: 'Krishna', village: 'Gudivada', gender: 'Male' },
  { id: 22, name: 'Sonia Gupta', district: 'West Godavari', village: 'Tadepalligudem', gender: 'Female' },
  { id: 23, name: 'Akhil Sharma', district: 'Visakhapatnam', village: 'Yelamanchili', gender: 'Male' },
  { id: 24, name: 'Pooja Rao', district: 'Chittoor', village: 'Nagari', gender: 'Female' },
  { id: 25, name: 'Manoj Kumar', district: 'Kurnool', village: 'Bethamcherla', gender: 'Male' },
  { id: 26, name: 'Vidya Sagar', district: 'Kadapa', village: 'Jammalamadugu', gender: 'Female' },
  { id: 27, name: 'Shyam Sundar', district: 'Anantapur', village: 'Gooty', gender: 'Male' },
  { id: 28, name: 'Sneha Yadav', district: 'Guntur', village: 'Bapatla', gender: 'Female' },
  { id: 29, name: 'Lokesh Naidu', district: 'Srikakulam', village: 'Tekkali', gender: 'Male' },
  { id: 30, name: 'Divya Reddy', district: 'East Godavari', village: 'Peddapuram', gender: 'Female' },
  { id: 31, name: 'Arjun Pandit', district: 'Krishna', village: 'Nuzvid', gender: 'Male' },
  { id: 32, name: 'Kavya Sharma', district: 'West Godavari', village: 'Narasapuram', gender: 'Female' },
  { id: 33, name: 'Anand Babu', district: 'Visakhapatnam', village: 'Narsipatnam', gender: 'Male' },
  { id: 34, name: 'Preeti Verma', district: 'Chittoor', village: 'Chandragiri', gender: 'Female' },
  { id: 35, name: 'Bharath Kumar', district: 'Kurnool', village: 'Yemmiganur', gender: 'Male' },
  { id: 36, name: 'Sandhya Rani', district: 'Kadapa', village: 'Badvel', gender: 'Female' },
  { id: 37, name: 'Venu Madhav', district: 'Anantapur', village: 'Kadiri', gender: 'Male' },
  { id: 38, name: 'Meghna Chaturvedi', district: 'Guntur', village: 'Sattenapalle', gender: 'Female' },
  { id: 39, name: 'Nikhil Vardhan', district: 'Srikakulam', village: 'Ichapuram', gender: 'Male' },
  { id: 40, name: 'Sujata Das', district: 'East Godavari', village: 'Mandapeta', gender: 'Female' },
  // Entries continued up to 100
];

const Voters = () => {
    return (
      <div className="voters-page">
        <h1 className="voters-title">Voter Management</h1>
        <div className="voters-table-container">
          <table className="voters-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>District</th>
                <th>Village</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {votersData.map((voter, index) => (
                <tr key={voter.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{voter.id}</td>
                  <td>{voter.name}</td>
                  <td>{voter.district}</td>
                  <td>{voter.village}</td>
                  <td>{voter.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Voters;