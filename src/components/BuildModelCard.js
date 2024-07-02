import React from 'react';
import './BuildModelCard.css';

const BuildModelCard = () => {
  const handleUpload = () => {

    alert('File uploaded!');
  };

  return (
    <div className="card">
       <center><h2>Build a Model</h2></center>
       <br></br>
       <br></br>
      <input type="file" />
      <button onClick={handleUpload}>Upload Data</button>
    </div>
  );
};

export default BuildModelCard;
