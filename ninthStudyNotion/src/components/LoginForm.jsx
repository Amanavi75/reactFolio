import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";

import { Link, useNavigate } from 'react-router-dom';

 const LoginForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
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

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true)
    toast.success("logged in")
    navigate("/dashboard")

  }
  return (
   <form onSubmit={submitHandler}>
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

export default LoginForm ;
