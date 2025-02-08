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
        <input type="text" placeholder='Username' />
      </div>
      <div className="input-box">
        <input type="text" placeholder='Password' />
      </div>
      <div className="forgot"><label><input type="checkbox"/>Remember me</label>
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
