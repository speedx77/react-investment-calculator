import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import ResultRow from "./components/ResultRow"
import React, { useState, useEffect } from "react"
import { calculateInvestmentResults, formatter } from "./util/investment"


function App() {

  const [initial, setInitial] = useState(10000);
  const [annual, setAnnual] = useState(1200);
  const [expected, setExpected] = useState(6);
  const [duration, setDuration] = useState(10);

  //const [rows, setRows] = useState(defineRows)

  function defineRows() {
    let allRows = []
    let totalInterest = 0;

    for(let i = 0; i < duration; i++){
      let data = calculateInvestmentResults({
          initialInvestment : initial,
          annualInvestment : annual,
          expectedReturn : expected,
          duration : duration,
      })

      //console.log(data)

      allRows.push({
        year : data[i].year,
        investment: formatter.format(data[i].valueEndOfYear),
        interest: formatter.format(data[i].interest),
        total: formatter.format(totalInterest += data[i].interest),
        capital: formatter.format(data[i].valueEndOfYear - totalInterest),
      }) 
    }
    //console.log("defineRows func")
    return allRows;
  }

  async function updateRows(eventTarget){
      const { value, name } = eventTarget;

      if(name === "initial"){
          setInitial(Number(value))
      } else if(name === "annual"){
          setAnnual(Number(value))
      } else if(name === "expected"){
          setExpected(Number(value))
      } else if(name === "duration"){
          setDuration(Number(value))   
      }
      //setRows(defineRows)
  }
  //app.jsx re-renders everytime so the rows constant is redifined with latest, better than having rows as a state variable
  const rows = defineRows()

  return (
    <div>
      <Header/>
      <UserInput 
        initial = {initial}
        annual = {annual}
        expected = {expected}
        duration = {duration}
        updateValue={updateRows}
      />
      {duration > 0 ?  <Result rows={rows}/> : <p class="center">Please enter a duration greater than 0</p>}
    </div>

  )
}

export default App
