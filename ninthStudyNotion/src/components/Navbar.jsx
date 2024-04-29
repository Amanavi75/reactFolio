import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"

const Navbar = () => {
  return (
    <div className='flex'>
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

        <div>
            {
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
            {
                <Link to="/signup">
                    <button>
                        signup
                    </button>
                </Link>
            }
            {
                <Link to="/">
                    <button>
                        Logout
                    </button>
                </Link>
            }
            

        </div>

        
    </div>
  ) 
}

export default Navbar;
