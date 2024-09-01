import React ,{useRef}from 'react'

export default function Start({setusername}) {

   const inputRef=useRef();
   const handleclick=()=>{
    inputRef.current.value && setusername(inputRef.current.value);
   }
  
  return (
    <div className='start' >
      
       <h1 className='startHeading'>Welcome to Quiz Show</h1>
      <input placeholder='enter your name'className='startInput'ref={inputRef}/>
      <button className='startbutton' onClick={handleclick}>start</button>
      </div>
  )
}
