import { useState } from 'react';
import './App.css';

function App() {

  const [num1 , setNum1] = useState()
  const [num2 , setNum2] = useState()
  return (
    <div className="App">
    <div className='container'>
     <h1 className='center'>Sum Calculator</h1>
      <form>
      <div>
        <label>Number 1</label>
        <input type='text' placeholder='Enter the number 1' value={num1} onChange={(e)=> setNum1(e.target.value)}></input>

      </div>
      <div>
        <label>Number 2</label>
        <input type='text' placeholder='Enter the number 2' value={num2} onChange={(e)=> setNum2(e.target.value)}></input>
      </div>
      </form>
      <div>
        
      </div>

    </div>
    </div>
  );
}

export default App;
