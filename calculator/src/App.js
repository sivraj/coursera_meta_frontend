import React, { useState } from "react";
import "./App.css";
import ArithmaticOperationsButtons from "./components/ArithmaticOperationsButtons.react";
import ResetButtons from "./components/ResetButtons.react";

function App() {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(0);
  return (
    <>
      <h1>Simplest Working Calculator</h1>
      <p>{result}</p>
      <input
        type="number"
        value={input}
        onChange={(e) =>
          setInput(e.target.value === "" ? null : Number(e.target.value))
        }
        placeholder="Enter a number"
      />
      <ArithmaticOperationsButtons
        input={input}
        result={result}
        onResultChange={setResult}
      />
      <ResetButtons onResetResult={setResult} onResetInput={setInput} />
    </>
  );
}

export default App;
