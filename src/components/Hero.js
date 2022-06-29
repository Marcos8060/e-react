import React,{useContext} from 'react'
import hero from '../assets/images/hero.png'
import '../assets/css/hero.css'
import { Link } from 'react-router-dom'
import { userContext } from '../context/AuthContext'

const Hero = () => {
  const { user } = useContext(userContext)
  return (
    <div className='container'>
        <div className="row hero">
            <div className="col-md-6">
                <img className='img-fluid heroImg' src={hero} alt="" />
            </div>
            <div className="col-md-6">
                <h1 className='heroTitle'>Get to <span className='yellow'>hire</span> some of the most professional housemaids in <span className='yellow'>Nairobi</span>.</h1>
                {
                  user ?
                <Link to='/profile' className='heroBtn btn'>Create Profile</Link>
                :
                <Link to='/login' className='heroBtn btn'>Get started</Link>
                }
            </div>
        </div>
    </div>
  )
}

export default Hero