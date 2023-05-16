import React, { useEffect, useState } from 'react'
import './login.css';
import { login } from '../redux/actions/userAction';
import {useDispatch, useSelector} from "react-redux"
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from '@mui/material';


const Login = () => {
  const notify = () => toast("Wow so easy!");


    const {error,isAuthenticated} =useSelector(state => state.user);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    useEffect(()=>{
        if(isAuthenticated){
              navigate(`/jobs`)
        }
        if(error){
         alert('Invalid email or password')
        }
    },[dispatch,error,isAuthenticated,navigate])


    // const [ user, setUser] = useState({
    //     email: "",
    //     password: ""
    //   })
    
    //   const handleChange =(e)=>{
    //       const {name, value} = e.target
    //       setUser({
    //         ...user,
    //         [name]:value
    //       })
    //   }

      const loginSubmit = (e) =>{
        e.preventDefault()
          dispatch(login(loginEmail,loginPassword))
      }

  return (
    <div className='login'>
        <div className='ref-card'>
          <p><b>refrence email and password</b></p>
        <p>email - test@gmail.com</p>
      <p>password - password</p>
        </div>
        <span className="loginTitle">Login</span>
        <form  className="loginForm" onSubmit={loginSubmit}>
            <label>Email</label>
            <input className='loginInput' type="text" 
            placeholder='Enter your email...'
            name='email'  value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}

            />
            <label>Password</label>
            <input className='loginInput' type="password" 
            placeholder='Enter your password...'
            name='fname'   value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}

            />

            <button className="loginButton" type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login