import React,{useState,useContext} from 'react'
import { MdAccountCircle } from 'react-icons/md'
import '../../assets/css/login.css'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/AuthContext'

function Login() {
    const { userLogin,message } = useContext(userContext)

  return (
    <>
     { message && 

        <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
         { message }
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

     }
      <div className="app__login">
        <div className="container">
          <div className="row form">
          <div className="col-md-5">
            <div className="card">
              <p className='text-center'><MdAccountCircle className='accountIcon' /></p>
              <h3 className='text-center'>Login</h3>
              <form onSubmit={userLogin}>
                <label htmlFor="email" className="form-label">Username</label>
                <input 
                   name='username'
                   type="text" 
                   className="form-control input1" 
                   placeholder='username...' 
                   />
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                   name='password'
                   type="password" 
                   className="form-control input1" 
                   placeholder='password...' 
                   />
                   <br />
                   Don't have an account? <Link to="/register">Register</Link>
                <button
                   className='btn8 mt-4'
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