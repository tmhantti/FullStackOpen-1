import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  // Button - komponentti
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  // nappien painamiseen liittyvät eventit
  const increaseGood = () => {
    const newGood = good + 1
    setGood(newGood)
    setTotal(newGood + neutral + bad)
  }
  const increaseNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setTotal(good + newNeutral + bad)
  }
  const increaseBad = () => {
    const newBad= bad + 1
    setBad(newBad)
    setTotal(good + neutral + newBad)
  }

  // statistiikkaan liittyvät funktiot:


  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        handleClick = {increaseGood} 
        text= 'good'
      />
      <Button 
        handleClick = {increaseNeutral} 
        text= 'neutral'        
      />
      <Button 
        handleClick = {increaseBad} 
        text= 'bad'
      />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad)/total}</p>
      <p>positive {(good/total)*100} %</p>
    </div>
  )
}

export default App