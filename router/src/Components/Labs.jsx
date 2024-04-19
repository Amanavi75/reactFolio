import React from 'react'
import { useNavigate } from 'react-router-dom';

const labs = () => {
  
  const navigate = useNavigate();
  // use to navigate directly to page 


  function clickHandler(){
    
    navigate("/about")
   

  }

  function oneBack(){
    navigate(-1);

  }
  return (
    <div>
      labs

      <button  onClick={clickHandler}> Move to About Page</button>

      <button onClick={oneBack}>Gobaack </button>
      
      </div>

  )
}

export default labs;