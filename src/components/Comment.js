import React from 'react'
import '../assets/css/comment.css'

const Comment = () => {
  return (
    <div>
        <h4 className='text-decoration-underline'>Drop a comment</h4>
        <form className='d-flex align-items-center commentForm'>
            <input className='form-control commentInput' type="text" placeholder='leave a comment...' />
            <button className='commentBtn'>Post</button>
        </form>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem officiis nihil eius veritatis.</p>
        <small>13th June 2022</small>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem officiis nihil eius veritatis.</p>
        <small>13th June 2022</small>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem officiis nihil eius veritatis.</p>
        <small>13th June 2022</small>
        <hr />
    </div>
  )
}

export default Comment