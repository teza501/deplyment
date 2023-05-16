import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/userAction'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const {isAuthenticated } = useSelector(state=>state.user)

    const dispatch = useDispatch();

    const logoutUser=()=>{
      dispatch(logout())
      alert("User logged out!")
    }

  return (
    <div className='navbar'>
         <Link to='/' className="brand-name">
        <img src='https://ytjobs.co/text-logo-dark.png' alt='yt-logo'/>
        </Link>
        <button className="hamburger"
         onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
       <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
}>
        <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/jobs'>Jobs</Link>
            </li>
            {
              isAuthenticated ?  <button
              style={{
                backgroundColor: 'crimson',
                color: 'white',
                borderRadius: '5px',
                padding: '10px',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={logoutUser}
              >
              Logout
              </button> :<>
              <li>
            <Link to='/login'>Login</Link>
            </li>
            {/* <li>
            <Link to='/register'>Register</Link>
            </li> */}
              </>
            }
            
        </ul>

        
       </div>
    </div>
  )
}

export default Navbar