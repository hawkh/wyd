// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Getstarted from '../../pages/getstarted/Getstarted';
import './hero.css'
// import Getstarted from '../../pages/getstarted/Getstarted';
import { Link } from 'react-router-dom'
function Hero(){
  return(
    <div>
      <section className="top-main">
        <div className="about">
          <h1 id="m-title">In-demand talent on demand</h1>
          <h2 id="s-title">Upwork is how.</h2>
          <p id="m-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed laborum possimus soluta quae molestias hic optio voluptatibus? Eum, modi at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit commodi rem, reiciendis pariatur possimus? Officia eveniet porro temporibus culpa?</p>
          <div className="btns">
            {/* <button id="start" onClick={getStart}>Get Start</button> */}
            <Link to='/getstarted' id='start'>Get Started</Link>
            {/* <button id="start">Get started</button> */}
            <button id="demo">Get a dedmo</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero