import './App.css';
import './styles.css';
import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
import React, { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });
  
    function handleChange(inputIdentifier, newValue) {
      setUserInput((prevInput) => {
        return {
          ...prevInput,
          [inputIdentifier]: +newValue,
        };
      });
    }

const inputIsValid =  userInput.duration >= 1;

    return (
    <div className="container">
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="error-message">Please enter a valid duration which should be greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </div>
  );
}

export default App;
