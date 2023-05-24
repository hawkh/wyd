// import React from 'react'
// import React from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
function Register() {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // function getName(iname){
    //     setName(iname.target.value)
    // }

    // function getMail(imail){
    //     setEmail(imail.target.value)
    // }


    // function getPassword(ipassword){
    //     setPassword(ipassword.target.value)
    // }

    // function getData(){
    //     alert(password)
    //     alert(name)
    //     alert(email)
    // }
  return (
    <div id='root1'>
        <div className='main'>
            <h1>Sign up for Enterprise</h1>
            <form className='form'>
                <label id='name'>
                    Enter your name: 
                    <input type="text" name="name" placeholder='name'  className='s-in'/>
                </label>
                <label id='name'>
                    Enterprise name: 
                    <input type="text" name="name" placeholder='Enterprise name' className='s-in'/>
                </label>
                <label id='name'>
                    Your country: 
                    <input type="text" name="name" placeholder='country' className='s-in'/>
                </label>
                <label id='email'>
                    Enter your email: 
                    <input type="email" name="email" placeholder='email'  className='s-in'/>
                </label>
                <label id='password'>
                    Enter your password: 
                    <input type="password" name="password" placeholder='password'className='s-in'/>
                </label>
                <label>
                    <input type='submit' name='submit'className='s-in' id='signup'/>
                </label>
            </form>
            <Link to='/'>Home</Link>
        </div>
    </div>
  )
}

export default Register