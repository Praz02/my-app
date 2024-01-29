

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import './Navbar.css'
import './About.css'
import React, { useState } from 'react'
import Alert from './components/Alert';



function App() {
  const[mode,setMode]=useState('light')
  const[btnText,setBtnText]=useState('DarkMode')
  const[style,setMystyle]=useState({
    color:'black'
  })
  const[textStyle,setTextStyle]=useState({
    color:'black',
    backgroundColor:'white'
  })
const[alert,setAlert]=useState(null)

const showAlert=(message,type)=>{
  setAlert({
 
   msg:message,
   type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },2000)
}



  const toggleStyle=()=>{
    if(mode==='light'){
      document.body.style.backgroundColor='#494a4b'
     setMode('dark')
      setMystyle({
        color:'white',
        backgroundColor:'#494a4b'
      })
      showAlert("DarkMode has been enabled.","success")
      setBtnText('LightMode')
      document.title='TextUtils-DarkMode'

    }
    else{
      setMystyle({
        color:'black'
      })
      setTextStyle({
        color:'black',
        backgroundColor:'white'
  
      })
      document.body.style.backgroundColor='white'
      setMode('light')
      setBtnText('DarkMode')
      showAlert("LightMode has been enabled.","success")
      document.title='TextUtils-Home'
      
      
    }

  }
  
  return (
    <>
    
   <Navbar mode={mode} btntext={btnText} toggleStyle={toggleStyle} />
   <Alert alert={alert}/>
    <About heading="Write Your text here!" style={style} showAlert={showAlert} />
   </>
  );

  }
export default App;
