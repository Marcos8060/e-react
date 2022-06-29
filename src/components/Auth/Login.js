import React,{useState} from 'react'
import { MdAccountCircle } from 'react-icons/md'
import '../../assets/css/login.css'
import { Link } from 'react-router-dom'


function Login() {
  


    const handleChange = (e) =>{
     
      }

    const handleSubmit = (e) =>{
      
      }

  return (
    <>
      <div className="app__login">
        <div className="container">
          <div className="row form">
          <div className="col-md-5">
            <div className="card">
              <p className='text-center'><MdAccountCircle className='accountIcon' /></p>
              <h3 className='text-center'>Login</h3>
              <form>
                <label htmlFor="email" className="form-label">Username</label>
                <input 
                   name='username'
                   type="text" 
                   className="form-control input1" 
                   placeholder='username...' 
                   onChange={handleChange}
                   />
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                   name='password'
                   type="password" 
                   className="form-control input1" 
                   placeholder='password...' 
                   onChange={handleChange}
                   />
                   <br />
                   Don't have an account? <Link to="/register">Register</Link>
                <button
                   className='btn8 mt-4'
                   onClick={handleSubmit}
                   >Login</button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login