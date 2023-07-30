import React, { useState } from 'react'
import axios from 'axios'

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
    <div>
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
                 <button onClick={reset}>Sent email</button>
            </div>
            <button>Home</button>
        </form>
    </div>
  )
}

export default Resetpass