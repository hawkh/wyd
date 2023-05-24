// import React from 'react'
import { Link } from 'react-router-dom'
import './getstarted.css'
const Getstarted = () => {
  return (
    <div className='parent'>
        <h1 id="title">
              Join as a Client or a Freelancer or a Customer 
        </h1>
        <div className="container">
            <div className="business cards">
              <img src="" alt="image" className='i-card' /> 
              <input type="checkbox" name="" id="" />
              <h2 className="ss">Im a client, hiring for a project</h2>
            </div>
            <div className="worker cards">
              <img src="" alt="image2" className='i-card' />
              <input type="checkbox" name="" id="" />
              <h2 className="ss">
              Im an experienced person looking for a job.
              </h2>
            </div>
            <div className="customer cards"> 
              <img src="" alt="image3" className='i-card'/>
              <input type="checkbox" name="" id="" />
              <h2 className="ss">
              Im a customer looking for assests.
              </h2>
            </div>
        </div>
        <Link to='/' id='home'>Home</Link>
    </div>
  )
}

export default Getstarted