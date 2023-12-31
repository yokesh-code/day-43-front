import React, { useState } from 'react'
import axios from 'axios'
import '../styles/reset.css'
import { Link } from 'react-router-dom'

function Resetpass() {
    const [user,setUser] = useState({
        email:""
    })
    const handleChange = e=>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const reset=()=>{
        const {email} =user
        if(email){
            axios.post('http://localhost:3020/user/reset',user)
            .then(res=>console.log(res))
        }
        else{
            alert("invalid input!!")
        }
    }
  return (
    <div className='text-center'>
        <form>
            <div>
                <label>Email</label>
                <input
                name='email'
                value={user.email}
                onChange={handleChange}
                type='email'
                placeholder='Enter your email'
                 />
            </div>
            <Link to ='/otp-reset'>
            <button className='btn btn-md mx-3 btn-success' onClick={reset}>Sent email</button>
            </Link>
            <Link to ='/'>
            <button className='btn btn-md btn-danger'>Home</button>
            </Link>
        </form>
    </div>
  )
}

export default Resetpass