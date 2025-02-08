import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className="form">
    <form action="/">
      <h1>Login</h1>

      <div className="input-box">
        <input type="text" placeholder='Username' required/>
        <i class='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password' required/>
        <i class='bx bxs-lock-alt' ></i>
      </div>
      <div className="Remember"><label><input type="checkbox"/>Remember me</label>
      <a href="#">Forgot password</a>
      </div>

      <button>Login</button>
      <div className="register">
        <p>Don't have an account?<a href="#">Register</a></p>
      </div>
   </form>
    </div>
    </>
  )
}

export default App
