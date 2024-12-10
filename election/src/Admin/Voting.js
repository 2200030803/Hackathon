// src/Admin/Voting.js
import React, { useState } from 'react';
import './Voting.css';

const Voting = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isHandicapped, setIsHandicapped] = useState(false);
  const [vote, setVote] = useState('');
  const [canVote, setCanVote] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const candidates = [
    { value: 'TDP', name: 'CHANDRABABU', party: 'TDP' },
    { value: 'JANASENA', name: 'PAWAN KALYAN', party: 'JanaSena' },
    { value: 'YSRCP', name: 'JAGAN', party: 'YSRCP' },
    { value: 'CONGRESS', name: 'RAHUL GANDHI', party: 'Congress' },
    { value: 'OTHER', name: 'Candidate', party: 'Other' }
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setCanVote(true); // Reset voting eligibility when the country changes
    setErrorMessage('');
  };

  const handleVoteChange = (event) => {
    setVote(event.target.value);
  };

  const handleHandicapToggle = (event) => {
    setIsHandicapped(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedCountry === 'IN' && !isHandicapped) {
      setCanVote(false);
      setErrorMessage("Voting is not allowed from India unless you're physically handicapped.");
    } else {
      setCanVote(true);
      setErrorMessage('');
      alert(`Your vote for ${vote} has been recorded.`);
    }
  };

  const selectedCandidate = candidates.find(candidate => candidate.value === vote);

  return (
    <div className="voting-page">
      <h1>Online Voting</h1>

      <div className="form-group">
        <label htmlFor="country">Select your country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange} required>
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="IN">India</option>
          <option value="GB">United Kingdom</option>
          <option value="AU">Australia</option>
          <option value="CA">Canada</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="JP">Japan</option>
          <option value="BR">Brazil</option>
          <option value="ZA">South Africa</option>
          {/* Add more countries as needed */}
        </select>
      </div>

      {!canVote && <p className="error-message">{errorMessage}</p>}

      <label className="handicap-toggle">
        Are you physically handicapped?
        <input
          type="checkbox"
          checked={isHandicapped}
          onChange={handleHandicapToggle}
        />
      </label>

      {canVote ? (
        <form onSubmit={handleSubmit} className="voting-form">
          <div className="form-group">
            <label htmlFor="candidate">Choose your candidate:</label>
            <select id="candidate" value={vote} onChange={handleVoteChange} required>
              <option value="">Select a candidate</option>
              {candidates.map(candidate => (
                <option key={candidate.value} value={candidate.value}>
                  {candidate.name} - {candidate.party}
                </option>
              ))}
            </select>
          </div>

          {selectedCandidate && (
            <p>You selected {selectedCandidate.name} from {selectedCandidate.party} party.</p>
          )}

          <button type="submit" className="submit-button">
            Submit Vote
          </button>
        </form>
      ) : (
        <p>Please check your eligibility to vote.</p>
      )}
    </div>
  );
};

export default Voting;
