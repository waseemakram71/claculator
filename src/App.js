import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setReuslt] = useState('');
  const clickHandeler=(event)=>{
    setReuslt(result.concat(event.target.value))
  }
  const clearDisplay=()=>{
    setReuslt('');
  }
  const calculate=()=>{
    try{
    setReuslt(eval(result).toString())
  }catch(err){
    setReuslt("error")
  }
  }
  const backSpace=()=>{
    setReuslt(result.slice(0, -1))
  }
  return (
    <div className="calc">
 <input type='text' placeholder='0' id='answer' value={result}/>
 <input type='button' value="9" className='button' onClick={clickHandeler}/>
 <input type='button' value="8" className='button' onClick={clickHandeler}/>
 <input type='button' value="7" className='button' onClick={clickHandeler}/>
 <input type='button' value="6" className='button' onClick={clickHandeler}/>
 <input type='button' value="5" className='button' onClick={clickHandeler}/>
 <input type='button' value="4" className='button' onClick={clickHandeler}/>
 <input type='button' value="3" className='button' onClick={clickHandeler}/>
 <input type='button' value="2" className='button' onClick={clickHandeler}/>
 <input type='button' value="1" className='button' onClick={clickHandeler}/>
 <input type='button' value="0" className='button' onClick={clickHandeler}/>
 <input type='button' value="." className='button' onClick={clickHandeler}/>
 <input type='button' value="+" className='button' onClick={clickHandeler}/>
 <input type='button' value="-" className='button' onClick={clickHandeler}/>
 <input type='button' value="*" className='button' onClick={clickHandeler}/>
 <input type='button' value="/" className='button' onClick={clickHandeler}/>
 <input type='button' value="%" className='button' onClick={clickHandeler}/>
 <input type='button' value="Clear" className='button button1'  onClick={clearDisplay}/>
 <input type='button' value="=" className='button button1'  onClick={calculate}/>
 <input type='button' value="C" className='button button1'  onClick={backSpace}/>

 
    </div>
  );
}

export default App;
