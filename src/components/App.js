
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [name,setName]=useState('')
  return (
    <div>
    <p>Enter your name :</p>
    <input type='text' onChange={(e)=>setName(e.target.value)}></input>
    <p>hello {name}!</p>
    </div>
  )
}

export default App
