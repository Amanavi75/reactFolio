import React from 'react'
import { useNavigate } from 'react-router-dom';

const labs = () => {
  
  const navigate = useNavigate();
  // use to navigate directly to page 


  function clickHandler(){
    
    navigate("/about")
   

  }
  return (
    <div>
      labs

      <button  onClick={clickHandler}> Move to About Page</button>
      
      </div>

  )
}

export default labs;