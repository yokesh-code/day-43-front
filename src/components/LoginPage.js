import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom"
import '../styles/login.css'
function LoginPage({setLoginUser}) {

const navigate = useNavigate()
  const [user,setUser]= useState({
  email:"",
  password:""
})

const handleChange = e =>{
  const {name,value}=e.target
  setUser({
    ...user,
    [name]:value
  })
}
const login =()=>{
  axios.post("http://localhost:3020/user/login",user)
  .then(res=>{alert("Successfully Login !!")
  setLoginUser(res.data.user)
  navigate("/")})
}
  return (
    <div className='container text-center'>
      <div className='heading'><h1>Login Page</h1></div>
        <form>
            <div>
                <label>Email ID</label>
                <input
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email} />
            </div>
            <div className='.col 4'>
                <label>Password</label>
                <input
                type="password"
                name="password"
                onChange={handleChange}
                value={user.password} />
            </div>
            <br />
            <hr />
  
            <Link to = '/reset'><a href='#'>Forget Password</a></Link>
            <br />
            <Link to= '/login'>
            <button className='btn my-5 btn-lg btn-success' onClick={login}>Login</button>
            </Link>
            <Link to= '/'>
            <button className='btn btn-lg btn-danger'>Home</button>
            </Link>
        </form>
    </div>
  )
}

export default LoginPage