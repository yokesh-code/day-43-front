import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import '../styles/home.css'
function Home() {
  return (
    <div id='bg'> 
          <h1 className='heading'>User Login FORM</h1>
                <div  className='text-center my-5 py-5'>
                  <Link to="/register"><button className='btn btn-secondary btn-lg mx-3'>Register</button></Link>  
                  <Link to="/login"><button className='btn btn-primary btn-lg'>Login</button></Link>
                </div>
    </div>
  )
}

export default Home