import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData,setFormData] = useState({firstName:"",lastName:"", country:"India", email:"",city:"",streetAdd:"",comments:false, candidates:false,offers:false , pushNotification:false})

  console.log(formData);

  function changeHandler ( event){
    const {name , value, checked , type} = event.target
    
    setFormData(prevFormdata=>{
     return {

      
      ...prevFormdata , 
      [name] :type==="checkbox"?checked:value    
     }
    })
    }

    function submitHandler(event){
      event.preventDefault();
      console.log("printing formdata")
      console.log(formData)

    }

  return (
    <>
     <form onSubmit={submitHandler}>
      <input 
      type="text" 
      name='firstName'
      placeholder='firstName'
      value={formData.firstName} 
      onChange={changeHandler}
      />
      <label htmlFor="firstName"> firstName</label>
      
      <br /><br />
      
      <br />
      <input 
      type="text" 
      name='lastName' 
      placeholder='lastName'
      value={formData.lastName} 
      onChange={changeHandler}
      />
      <label htmlFor='lastName'> lastName</label>
       <br /><br /><br />
      <input 
      type="email" 
      name='email' 
      placeholder='email'
      value={formData.email} 
      onChange={changeHandler}
      />
      <label htmlFor='email'> email</label>
       <br /><br /><br />
      <select 
      name="country" 
      id="country"
      value={formData.country}
      >
        <option value=""> India</option>
        <option value=""> canada</option>
        <option value=""> us</option>
      </select>
      <label htmlFor='country'> country</label>

       <br /><br /><br />
      <input 
      type="text" 
      name='streetAdd' 
      placeholder='street'
      value={formData.streetAdd} 
      onChange={changeHandler}
      />
       <label htmlFor='streetAdd'> street</label>
       <br /><br /><br />
      <input 
      type="text" 
      name='city' 
      placeholder='city'
      value={formData.city} 
      onChange={changeHandler}
      />
      <label htmlFor='city'> city</label>
      <br /><br /><br />
      <fieldset className='flex'>
        <legend>By email </legend>
        <input 
        type="checkbox"
        id='comments'
        name='comments'
        value={formData.comments}
         />
         <div>
         <label htmlFor="checkbox"> comments</label>
         <p> get  notified when someone posts a comment on posting </p>
         </div>
        <input 
        type="checkbox"
        id='candidates'
        name='candidates'
        value={formData.candidates}
         />
         <div>
         <label htmlFor="checkbox"> candidates</label>
         <p> get a candidate  </p>
         </div>
        <input 
        type="checkbox"
        id='offers'
        name='offers'
        value={formData.offers}
         />
         <div>
         <label htmlFor="checkbox"> candidates</label>
         <p> get a offer  </p>
         </div>
      </fieldset>

      <fieldset>
        <legend>
          push Notification 
        </legend>
        <p>
          these are denoted by message 
        </p>

        <input 
        type="radio" 
        id='pushEverything '
        name='pushNotification'
        value="everything"
        onChange={changeHandler}
        />

        <label htmlFor="pushEverything"> everyThing</label>
        <input 
        type="radio" 
        id='TTT'
        name='pushNotification'
        value="AMAN"
        onChange={changeHandler}
        />

        <label htmlFor="TTT"> TTT</label>
        <input 
        type="radio" 
        id='pushEmail'
        name='pushNotification'
        value="everything"
        onChange={changeHandler}
        />

        <label htmlFor="pushEmAIL"> EMAIL</label>
      </fieldset>
      <br /><br /><br />

       <button type='submit'>submit</button>

     </form>
    </>
  )
}

export default App
