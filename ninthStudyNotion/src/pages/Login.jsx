import React, { useEffect, useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";

import { Link } from 'react-router-dom';

 const Login = () => {

  const [formData, setFormData] = useState({
    email:"",password:""
  })

  const {showPassword , setShowPassword} = useState(false);
  function changeHandler (event){

    setFormData((prevData) =>(
      {
        ...prevData ,
        [event.target.name] :event.target.value
      }
    ))

  }
  return (
   <form action="">
    <label htmlFor="email">
      <p> email address <sub> *</sub></p>

      <input type="email"
       required 
       value={formData.email}  
       onChange={changeHandler} placeholder='enter email id'
       name='email'
       />
    </label>
    <label >
      <p> Password <sub> *</sub></p>

      <input
       type={showPassword?("text") :("password")}
       required 
       value={formData.password}  
       onChange={changeHandler} placeholder='enter password'
       name='password'
       />

       <span onClick={()=> setShowPassword((prev)=>!prev)}>
        {showPassword ? (<AiOutlineEye/>):(<AiOutlineEyeInvisible/>  )}
       </span>

       <Link to="#">
        <p>
          forgot password
        </p>
       </Link>
    </label>

    <button> Sign in </button>
   </form>
  )
}

export default Login ;
