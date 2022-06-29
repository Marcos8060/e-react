import React,{useState} from 'react'
import '../../assets/css/register.css'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Register() {

   const handleChange = (e) =>{
   
    }

    const handleSubmit = (e) =>{
      

    }
      

  return (
    <>
    <div className="app__register">
      <div className="container">
        <div className="row form">
        <div className="col-md-5">
          <div className="card">
            <p className='text-center'><MdAccountCircle className='accountIcon' /></p>
            <h3 className='text-center'>SignUp</h3>
            <form>
              <label htmlFor="username" className="form-label">Username</label>
              <input 
                  type="text" 
                  className="form-control input1" 
                  name='username'
                  placeholder='username...' 
                  onChange={handleChange}
                  />
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                  type="email" 
                  className="form-control input1" 
                  name='email'
                  placeholder='email...' 
                  onChange={handleChange}
                  />
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                  type="password" 
                  className="form-control input1" 
                  name='password'
                  placeholder='password...' 
                  onChange={handleChange}
                  />
                  <br />
                   Already have an account? <Link to="/login">Login</Link>
              <button 
                  className='btn8 mt-4'
                  onClick={handleSubmit}
                  >Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Register