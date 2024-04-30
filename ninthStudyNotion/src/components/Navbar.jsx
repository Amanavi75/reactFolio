import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly'>
        <Link to ="/" 
        ><img src={logo} alt="" width={160} height={32} loading='lazy' />
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home </Link>
                    <Link to="/">About </Link>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex ml-5 mr-3 gap-3'>
            { !isLoggedIn && 
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged out")
                    }}>
                        signup
                    </button>
                </Link>
            }
            { isLoggedIn && 
                <Link to="/">
                    <button>
                        Logout
                    </button>
                </Link>
            }
            { isLoggedIn && 
                <Link to="/Dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
            

        </div>

        
    </div>
  ) 
}

export default Navbar;
