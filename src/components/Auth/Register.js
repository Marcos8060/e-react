import React,{useState} from 'react'
import '../../assets/css/register.css'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { register } from './axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const history = useNavigate();
    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:''
    })

   const handleChange = (e) =>{
     setFormData({
        ...formData,
        [e.target.name] : e.target.value
     })
    }

    const handleSubmit = (e) =>{
      e.preventDefault();

      axios.post(register,{
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
      .then((res) =>{
        history('/login')
      })
      .catch((err) =>{
        console.error(err)
      })
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
            <form onSubmit={handleSubmit}>
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