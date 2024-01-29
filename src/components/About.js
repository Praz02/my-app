import React,{useState} from 'react'


export default function About(props) {
  const UpperClick=(event)=>{
    
    const text=document.getElementById("text_area")
    let newText=text.value.toUpperCase()
    setText(newText)
    
  }
  const LowerClick=(event)=>{

    const text=document.getElementById("text_area")
    let newText=text.value.toLowerCase()
    setText(newText)
    
  }
  const clear=()=>{
    setText(" ")
  }
  const handleOnChange=(event)=>{
    
    setText(event.target.value);
    
  }
  const[text,setText]=useState()
  
  return (
    
    <div className="container">
    <div className="text_area">
        <h1 id ="h" style={props.style}>Write Your text here!</h1>
        <textarea placeholder='Enter Your text here.' style={props.style} id="text_area" rows="3" value={text} onChange={handleOnChange}></textarea>
      </div>
      <div className="button">
      <button className="btn btn-primary me-md-2" type="button" onClick={UpperClick}>UpperCase</button>
      <button className="btn btn-primary me-md-2" type="button" onClick={LowerClick}>LowerCase</button>
      <button className="btn btn-primary me-md-2" type="button" onClick={clear}>Clear</button>
      </div>
     

</div>

        
  )
}
