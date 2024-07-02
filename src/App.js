import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BuildModelCard from './components/BuildModelCard';
import StartScoringCard from './components/StartScoringCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="main-content">
        <BuildModelCard />
        <StartScoringCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
