
import './App.css' ;
import React, {useState} from 'react';

function App(){

  const[inputValue1, setInputValue1] = useState("")
  const[inputValue2, setInputValue2] = useState("")
  const[submittedText, setSubmittedText] = useState("")
  const [color,setColor] = useState("black")
  const handleName =(e)=>{
    setInputValue1(e.target.value)
  }
  const handlemail =(e)=>{
    setInputValue2(e.target.value)
  }
  const handleClick =()=>{
    setSubmittedText(`Hello ${inputValue1}, otp send to ${inputValue2}`)
    //alert(`name is ${inputValue1} and e-mail is ${inputValue2}`)
  }
  const handleColor = ()=>{
    setColor((prevColor)=> (prevColor === "blue" ? "red" : "blue"))
  }
  

  return (
    <div className='todoap'>
      <div className='heading'>
       <h1>PROFILE</h1>
       <div className='filed1'>
        <input
        type = "text"
        value = {inputValue1}
        onChange={handleName}
        placeholder='enter your name...'
      
        ></input>
        </div>
        <div className='field2'>
          <input
          type = "text"
          value = {inputValue2}
          onChange={handlemail}
          placeholder='enter your email...'
          ></input>
        </div>
        <button onClick={handleClick}>submit</button>
    
      </div>
      <div className='text' style = {{color : color}}>
      {submittedText && <p>{submittedText}</p>} 
      <button onClick={handleColor}>click</button>
      </div>
    </div>
   
  )
}
 
export default App;