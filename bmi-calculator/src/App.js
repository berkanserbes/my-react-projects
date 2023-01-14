import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const DEFAULT_HEIGHT = 100;
  const DEFAULT_WEIGHT = 50;

  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(e) {
    const inputHeight = e.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(e) {
    const inputWeight = e.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo( () => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className= 'input-section'>
        <p className= 'slider-output'>Weight: {weight} kg</p>
        <input 
          className= 'input-slider'
          onChange= {onWeightChange}
          type= 'range'
          step= "1"
          min= "40"
          max= "200"
        />
        <p className= 'slider-output'>Height: {height} cm</p>
        <input 
          className= 'input-slider'
          onChange= {onHeightChange}
          type= 'range'
          step= "1"
          min= "100"
          max= "250"
        />
      </div>
      <div className= 'output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  );
}

export default App;
