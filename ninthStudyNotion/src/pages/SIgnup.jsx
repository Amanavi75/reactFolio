import React, { useState } from 'react'

 const SIgnup = () => {
  const [formData , setFormData] = useState({
    firstName:"", lastName:"" , email:"", password:"",confirmPassword:""
  })

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


        
        


      </form>
    </div>
  )
}

export default SIgnup;