import React from 'react';
import './StartScoringCard.css';

const StartScoringCard = () => {
  const handleTypeChange = (event) => {
    
    console.log(event.target.value);
  };

  const handleUpload = () => {
    
    alert('File uploaded!');
  };

  return (
    <div className="card">
      <center> <h2>Start Scoring</h2></center>
      <br></br>
      <br></br>
      <select onChange={handleTypeChange}>
        <option value="credits_data_gm">Credits_Data_GM</option>
        <option value="updated_loan_data">Updated_Loan_Data</option>
      </select>
      <button onClick={handleUpload}>Upload Data</button>
    </div>
  );
};

export default StartScoringCard;
