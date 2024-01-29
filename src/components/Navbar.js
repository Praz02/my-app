
import React from 'react'


export default function Navbar(props) {
  

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid" id="nav">
    <div className="img">
     <button className="darkMode" onClick={props.toggleStyle}>{props.btntext}</button>
    </div>
 
    <a className="navbar-brand" href="#">Home</a>
    <a className="navbar-brand" href="#">Contact US</a>
  </div>
  
</nav>

  )

  }