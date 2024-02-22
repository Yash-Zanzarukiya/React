import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

let data = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5,
  duration: 10,
}

function App() {

  const [annualData, setAnnualData] = useState(data);

  let isValidInput = annualData.duration > 0;

  function handleInputChange(eventObj) {
    let input = +eventObj.target.value;
    let newData = {
      ...data,
    };
    newData[eventObj.target.id] = input;
    console.log('Before');
    setAnnualData((preData) => newData);
  }

  let calculatedData = calculateInvestmentResults(annualData);

  return (
    <>
      <UserInput onInputChange={handleInputChange} data={annualData}></UserInput>
      {!isValidInput && <p className="center">Please Give Some Valid Input!!!</p>}
      {isValidInput && <Result finalAnnualData={calculatedData} />}
    </>
  );
}

export default App
