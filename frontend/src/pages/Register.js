import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/userAction';
import './register.css';

const Register = () => {
  const dispatch = useDispatch();

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // const [user, setUser] = useState({
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   password: ''
  // });

  //const { fname, lname, email, password } = user;

  const handleChange = (e) => {

    //setUser({ ...user, [e.target.name]: e.target.value });
  // const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value
  //   });
  };

  const onRegister = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set('fname', fname);
    myForm.set('lname', lname);
    myForm.set('email', email);
    myForm.set('password', password);

    
    const formDataObject = {};
    for (const [key, value] of myForm.entries()) {
      formDataObject[key] = value;
    }

    console.log(formDataObject)
    dispatch(register(formDataObject));
  };

  return (
    <div className="register">
      {/* {console.log(user)} */}
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={onRegister} >
        <label>First Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your FirstName..."
          name="fname"
          value={fname}
          onChange={(e)=> setFname(e.target.value)}
          //onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your LastName..."
          name="lname"
          value={lname}
          onChange={(e)=> setLname(e.target.value)}
         //onChange={handleChange}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          name="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          //onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          name="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          //onChange={handleChange}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;







// import React, { useState } from 'react'
// import './register.css';
// import { useDispatch } from 'react-redux';
// import { register } from '../redux/actions/userAction';

// const Register = () => {

//   const dispatch = useDispatch();

//   const [ user, setUser] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     password: ""
//   })

//   const { fname,lname,email,password} = user;

//   const handleChange =(e)=>{
//       const {name, value} = e.target
//       setUser({
//         ...user,
//         [name]:value
//       })
//   }

//   const Onregister=(e)=>{
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("fname",fname)
//     myForm.set("lname",lname)
//     myForm.set("email",email)
//     myForm.set("password",password)

//     dispatch(register(myForm))
//     console.log(myForm)

//   }

//   return (
//     <div className='register'>
//       {
//         console.log(user)
//       }
//     <span className="registerTitle">Register</span>
//     <form  className="registerForm" 
//       encType="multipart/form-data"
//     onSubmit={Onregister}>
//         <label>First Name</label>
//         <input className='registerInput' type="text" 
//         placeholder='Enter your FirstName...'
//         name='fname'  value={fname} //onChange={handleChange}
//        />
//         <label>Last Name</label>
//         <input className='registerInput' type="text" 
//         placeholder='Enter your LastName...'
//         name='lname' value={lname} //onChange={handleChange}
//        />
//         <label>Email</label>
//         <input className='registerInput' type="text" placeholder='Enter your email...'
//         name='email'  value={email} //onChange={handleChange}
//          />
//         <label>Password</label>
//         <input className='registerInput' type="password" placeholder='Enter your password...'
//         name='password' value={password} //onChange={handleChange}
//            />

//         <button className="registerButton" type='submit' >Register</button>
//     </form>
// </div>
//   )
// }

// export default Register