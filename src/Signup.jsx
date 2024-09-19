import React from 'react'
import './Login.css'

function Signup() {
  return (
    <div className='main_div'>
    <h1 className='main_login'>Signup</h1>
    <div>
        <input className='input' type='email' placeholder='Email' name='email'></input>
    </div>
    <div>
        <input className='input' type='password' placeholder='Create Password' name='Password'></input>
    </div>
    <div>
        <input className='input' type='password' placeholder='Confirm Password' name='Password'></input>
    </div>
    <p className='link'>Forgot password?</p>
    <button className='login_button'>Signup</button>
    <p>Already have an account? <span className='link'>Login</span></p>
    <div className='line_or'>
        <div className='line'></div>
        <p>Or</p>
        <div className='line'></div>
    </div>
    <div className='facebook'>
        <div className='facebook_img'>f</div>
        <p>Login with Facebook</p>
    </div>
    <div className="google">
        <div className='google_img'></div>
        <p>Login with google</p>
    </div>
</div>
  )
}

export default Signup