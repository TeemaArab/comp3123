import logo from './logo.svg';
import './App.css';
import React from 'react';
import StudentInformation from './Student';

function App() {

  const borderStyle ={
    border: '10px solid #61dafb',
    padding: '20px',
    margin:  '20px auto',
    width: '40%',
    textAlign: 'center'
  }
  return (
    <div className="App">
        <div style = {borderStyle} > 
          <img src={logo} className="App-logo" alt="logo" />
        
          <StudentInformation 
           studentID="101463256"
           studentName="Fatima Arab"
            college="George Brown College" />
        </div>
    </div>
  );
}

export default App;
