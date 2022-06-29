import React from 'react'
import home from '../assets/images/clean.jpg'
import family from '../assets/images/family.png'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import '../assets/css/info.css'
import { Link } from 'react-router-dom'

function Info() {
  return (
    <>
     <div className="app__info">
         <div className="container">
             <div className="row top">
                 <div className="col-md-6">
                     <img className='img-fluid homeImg' src={home} alt="" />
                 </div>
                 <div className="col-md-6 text-center">
                     <h2 className='text-center underline mb-4'>About Us</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio quae libero quia rerum ea dolores modi quidem debitis iure!</p>
                     <Link to='/about' className='text-decoration-none learnMore' href='/about'><span>Learn More</span></Link>
                     <Link to='/about' className='learnMore'><AiOutlineArrowDown /></Link>
                 </div>
             </div>
             <div className="row">
                 <div className="col-md-6">
                     <h3 className='mb-5'>Reasons why families choose us..</h3>
                        <BsCheckCircleFill className='check' />
                        <span>We save you valuable time</span>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius debitis enim repellendus autem at modi eaque consectetur? Ipsa, porro.</p>
                        <BsCheckCircleFill className='check' />
                        <span>We save you valuable time</span>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius debitis enim repellendus autem at modi eaque consectetur? Ipsa, porro.</p>
                        <BsCheckCircleFill className='check' />
                        <span>We save you valuable time</span>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius debitis enim repellendus autem at modi eaque consectetur? Ipsa, porro.</p>
                 </div>
                 <div className="col-md-6">
                     <img className='img-fluid' src={family} alt="" />
                 </div>
             </div>
         </div>
     </div>
    </>
  )
}

export default Info