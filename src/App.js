import { useState } from 'react';
import './App.css';

function App() {

  const [num1 , setNum1] = useState()
  const [num2 , setNum2] = useState()
  const [add, setAdd] = useState('')

  const calcsum = (event) => {

    if(num1 == null || num2 == null){
      alert("Input some numbers")
  
    }
    event.preventDefault() 
    setAdd(parseInt(num1)+parseInt(num2))
  }
  return (
      <div className='app'>
    <div className='container'>
     <h1 className='center'>Sum Calculator</h1>
      <form onSubmit={calcsum}>
      <div>
        <label>Number 1</label>
        <input type='number' placeholder='Enter the number 1' value={num1} onChange={(e)=> setNum1(e.target.value)}></input>

      </div>
      <div>
        <label>Number 2</label>
        <input type='number' placeholder='Enter the number 2' value={num2} onChange={(e)=> setNum2(e.target.value)}></input>
      </div>
      <div>
        <button className='btn'  type='submit'>Submit</button>
      </div>
      </form>
      <div>
        <h2>Your Sum is: {add}</h2>
      </div>

    </div>
    </div>
  
  );
}

export default App;
