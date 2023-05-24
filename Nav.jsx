// import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
// import Register from '../register/Register'
// import App from '../../App'

function Nav() {
    return (
    <div>
        <nav className="navbar">
            <div className="l-nav">
                <h1 id="title">WYD</h1>
            </div>
            <div className="r-nav">
                <ul id="n-lists">
                    <li><input type="text" id="l-input" placeholder="search"/></li>
                    <li><button id="l-btn">search</button></li>
                    <li><a href=''>Home</a></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Nav