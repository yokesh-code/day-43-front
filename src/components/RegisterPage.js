import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/register.css'
function RegisterPage() {

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = e=>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const register = ()=>{
        const {name,email,password}= user
        if(name&& email && password){
            axios.post("http://localhost:3020/user/register",user)
            .then(res=>console.log(res))
        }
        else{
            alert("invalid input!!")
        }
    }

  return (
    <div className='form mx-5'>
        <div className='heading'><h1>Register Page</h1></div>
        <form className='container my-5'>

            <div className='my-2'>
                <label>Name</label>
                <input
                type='text'
                name='name'
                placeholder='Enter your Name'
                onChange={handleChange}
                value={user.name} />
            </div>
            <div  className='my-2'>
                <label>Email ID</label>
                <input
                type='email'
                name='email'
                placeholder='Enter Email address'
                onChange={handleChange}
                value={user.email} />
            </div>
            <div  className='my-2'>
                <label>Password</label>
                <input
                type='password'
                name='password'
                placeholder='Enter Password'
                onChange={handleChange}
                value={user.password} />
            </div>
        </form>
        <hr />
        <br />
        <button className='btn btn-success btn-lg' onClick={register}>Register</button>
        <Link to='/'>
        <button className='btn btn-danger btn-lg' >back</button>
        </Link>
    </div>
  )
}

export default RegisterPage