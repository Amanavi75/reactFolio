import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[formData,setFormData] = useState({firstName:"", lastName:"",pass:""})
  console.log(formData);
  function changeHandler ( event){
    
    setFormData(prevFormdata=>{
     return {
      ...prevFormdata , 
      [event.target.name] :event.target.value   
      
      // here we have name property which will save our previous state and further goes on 
     }
    })
    
    }

   

  return (
    <div>
      <form action="">
        <input type="text"
         placeholder='firstName'
         onChange={changeHandler}
         name='firstName'
         value={formData.firstName}
          />
        <input type="text"
         placeholder='LastName'
         onChange={changeHandler}
         name='lastName'
         value={formData.lastName}
          />
        <input type="text"
         placeholder='password'
         onChange={changeHandler}
         name='pass'
         value={formData.pass}
          />
      </form>

      
    </div>
  )
}

export default App
