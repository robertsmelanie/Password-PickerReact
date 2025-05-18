import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from "react";



// Function to generate a random password
// Helper functions to get random characters
function getRandomLower() {
  const letters = `abcdefghijklmnopqrstuvwxyz`;
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomUpper() {
  const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomNumber() {
  const numbers = `0123456789`;
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSpecial() {
  const specials = `!@#$%^&*()_+[]{}|;:,.<>?`;
  return specials[Math.floor(Math.random() * specials.length)];
}

const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
};




<div>
  <h1>Password Picker</h1>
  <div className="container">
    <label htmlFor="passwordLength">Password Length:</label>
    <input type="number" id="passwordLength" name="passwordLength" min={1} max={128} defaultValue={12} /> 
    <br />
    <label htmlFor="includeUppercase">Include Uppercase Letters:</label>
    <input type="checkbox" id="upper" name="upper" defaultChecked />
    <br />
    <label htmlFor="includeLowercase">Include Lowercase Letters:</label>
    <input type="checkbox" id="lower" name="lower" defaultChecked />
    <br />
    <label htmlFor="includeNumbers">Include Numbers:</label>
    <input type="checkbox" id="numbers" name="numbers" defaultChecked />
    <br />
    <label htmlFor="includeSpecial">Include Special Characters:</label>
    <input type="checkbox" id="special" name="special" defaultChecked />
    <br />(!@#$%^&amp;*()_+[]{'{'}{'}'}|;:,.&lt;&gt;?)
    <br />
  </div>
  <div className="output">
    <p id="passwordOutput">Click "Generate Password" to see your password!</p>
    <button id="generateButton">Generate Password</button>
    <br />
    <h2>Password:</h2>
    <textarea name="Output" id="OutputArea" placeholder="Here is your password" defaultValue={""} />
    <button id="copyButton">Copy to Clipboard</button>
    <button id="clearButton">Clear</button>
  </div>
</div>




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
