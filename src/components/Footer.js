import React from 'react'
import '../assets/css/footer.css'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import { HiMenuAlt1 } from 'react-icons/hi'


function Footer() {
  return (
    <>
      <div className="app__footer">
          <div className="container-fluid">
              <div className="row foot">
                  <div className="col-md-4 text-center footItem">
                  <h2><HiMenuAlt1 className="brandIcon" />maids</h2>
                    <small style={{ color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa molestias totam natus magnam?</small>
                  </div>
                  <div className="col-md-4 text-center footItem">
                      <p>@Copyright Allrights Reserved</p>
                  </div>
                  <div className="col-md-4 text-center footItem">
                      <h4>Made with love by</h4>
                      <p>Marcos Ochieng</p>
                      <a href='#'><BsFillArrowUpSquareFill className='up' /></a>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer