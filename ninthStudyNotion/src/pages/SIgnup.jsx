import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";

 const SIgnup = () => {
  const [formData , setFormData] = useState({
    firstName:"", lastName:"" , email:"", password:"",confirmPassword:""
  })


  const[showPassword , setShowPassword] = useState(false);

  function changeHandler(event){
    setFormData((prevData)=>(
      {
        ...prevData , 
        [event.target.name]:event.target.value 
      }

    )
  )
  }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form action="">
        <div>
        <label 
        >
          <p> first Name <sub>*</sub></p>
          <input
           type="text" 
           name="firstname" 
           onChange={changeHandler} placeholder='enter first name' 
           value={formData.firstName}
           id="firstName"
           />
        </label>
        <label 
        >
          <p> Last Name <sub>*</sub></p>
          <input
           type="text" 
           name="lastname" 
           onChange={changeHandler} placeholder='enter last name' 
           value={formData.lastName}
           />
        </label>

        </div>

        <label 
        >
          <p> Email address <sub>*</sub></p>
          <input
           type="email" 
           name="email" 
           onChange={changeHandler} placeholder='enter email address' 
           value={formData.email}
           />
        </label>

        <div>
        <label 
        >
          <p> create password <sub>*</sub></p>
          <input
           type={showPassword ? ("text"): ("password")}
           name="password" 
           onChange={changeHandler} placeholder='enter password' 
           value={formData.password}
           />

          <span onClick={()=> setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEye/>):(<AiOutlineEyeInvisible/>  )}
          </span>
        </label>


        <label 
        >
          <p> confirm password <sub>*</sub></p>
          <input
           type={showPassword ? ("text"): ("password")}
           name="confirmPassword" 
           onChange={changeHandler} placeholder='confirm password' 
           value={formData.confirmPassword}
           />

          <span onClick={()=> setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEye/>):(<AiOutlineEyeInvisible/>  )}
          </span>
        </label>
        </div>

        <button>
          create account
        </button>


        
      </form>
    </div>
  )
}

export default SIgnup;