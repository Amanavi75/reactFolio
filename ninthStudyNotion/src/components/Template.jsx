import React from 'react'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import frameImage from "../assets/frame.png"
import signImg from "../assets/signup.png"


 const Template = ({title, desc1, desc2,image , formtype,setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span> {desc1}</span>
                <span> {desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm  setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div>
                <div>
                    <p> OR</p>
                    <div></div>
                </div>

                <button> SignUp with google</button>
            </div>
        </div>
        <div>
            <img src={frameImage} alt="patternTxt" 
            width={550}
            height={504}
            loading='laxy'
            />
            <img src={signImg} alt="student" 
            
            width={550}
            height={490}
            loading='laxy'
            />
        </div>
    </div>
  )
}

export default Template;
