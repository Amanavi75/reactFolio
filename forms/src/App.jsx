import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function changeHandler ( event){
    const[formData,setFormData] = useState({firstName:"", lastName:"",pass:""})
    setFormData(prevFormdata=>{
     return {
      ...prevFormdata , 
      [event.target.name] :event.target.value   
      
      // here we have name property which will save our previous state and further goes on 
     }
    })
    console.log(event.target.name);
    }

   

  return (
    <div>
      <form action="">
        <input type="text"
         placeholder='firstName'
         onChange={changeHandler}
         firstName='firstName'
         value={formData.firstName}
          />
        <input type="text"
         placeholder='LastName'
         onChange={changeHandler}
         name='lastName'
         value={formData.lastName}
          />
        <input type="text"
         placeholder='pass'
         onChange={changeHandler}
         name='password'
         value={formData.pass}
          />
      </form>

      
    </div>
  )
}

export default App
