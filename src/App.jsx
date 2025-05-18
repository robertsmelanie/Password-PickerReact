// import { useState } from 'react'
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

function generatePassword(length, lower, upper, number, special) {
  let password = "";
  const typesCount = lower + upper + number + special;
  const typesArr = [{ lower }, { upper }, { number }, { special }].filter(
    item => Object.values(item)[0]
  );
  if (tpesCount === 0) return "";
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      password += randomFunctions[funcName]();
    });
  }
  return password.slice(0, length);
}

export default function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(true);
  const [number, setNumber] = useState(true);
  const [special, setSpecial] = useState(true);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length, lower, upper, number, special);
    setPassword(newPassword);
  };

  const handleCopy = async () => {
    if (!password) {
      alert("Please generate a password first!");
      return;
    }
    await navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };
  const handleClear = () => {
    setPassword("");
  };

  return (
    <div>
      <h1>Password Picker</h1>
      <div className="container">
        <label htmlFor="passwordLength">Password Length:</label>
        <input type="number" id="passwordLength" name="passwordLength" min={1} max={128} defaultValue={12} onChange={(e) => setLength(e.target.value)} />
        <br />
        <label htmlFor="includeUppercase">Include Uppercase Letters:</label>
        <input type="checkbox" id="upper" name="upper" defaultChecked onChange={(e) => setUpper(e.target.checked)} />
        <br />
        <label htmlFor="includeLowercase">Include Lowercase Letters:</label>
        <input type="checkbox" id="lower" name="lower" defaultChecked onChange={(e) => setLower(e.target.checked)} />
        <br />
        <label htmlFor="includeNumbers">Include Numbers:</label>
        <input type="checkbox" id="numbers" name="numbers" defaultChecked onChange={(e) => setNumber(e.target.checked)} />
        <br />
        <label htmlFor="includeSpecial">Include Special Characters:</label>
        <input type="checkbox" id="special" name="special" defaultChecked onChange={(e) => setSpecial(e.target.checked)} />
        <br />(!@#$%^&amp;*()_+[]{'{'}{'}'}|;:,.&lt;&gt;?)
        <br />
      </div>
      <div className="output">
        <p id="passwordOutput">{password || "Click 'Generate Password' to see your password!"}</p>
        <button id="generateButton" onClick={handleGeneratePassword}>Generate Password</button>
        <br />
        <h2>Password:</h2>
        <textarea name="Output" id="OutputArea" placeholder="Here is your password" value={password} readOnly />
        <button id="copyButton" onClick={handleCopy}>Copy to Clipboard</button>
        <button id="clearButton" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
  
}



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




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
