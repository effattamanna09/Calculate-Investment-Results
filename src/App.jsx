import { useState } from "react"

import Header from './components/Header.jsx'
import Results from './components/Results.jsx'
import UserInput from './components/UserInput.jsx'

function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIndentifier, newValue) {
    setuserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue,
      }
    });
  }

  const inputsIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputsIsValid && <p className="center">Plaese Inter valid value</p>}
      {inputsIsValid && <Results input={userInput} />}
    </>

  )
}

export default App
