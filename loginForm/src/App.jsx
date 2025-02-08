import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  function App() {
    useEffect(() => {
      let icon = document.getElementById("icon");
      let pass = document.getElementById("pass");

      icon.onclick = () => {
        if (pass.type === "password"){
           pass.type = "text";
           icon.className='bx bxs-show';
        }
         
        else {
          pass.type = "password";
        icon.className='bx bxs-hide';
        }
      }
    }, []);

  return (
    <>
    <div className="form">
    <form action="/">
      <h1>Login</h1>

      <div className="input-box">
        <input type="text" placeholder='Username' required/>
        <i className='bx bxs-user'></i>
      </div>

      <div className="input-box">
        <input id='pass' type="password" placeholder='Password' required/>
        <i  id='icon' className='bx bxs-show' ></i>
      </div>

      <div className="remember"><label><input type="checkbox"/> Remember me</label>
      <a href="https://support.google.com/mail/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">Forgot password</a>
      </div>

      <button type='submit' className='btn'>Login</button>
      <div className="register">
        <p>Don't have an account? <a href="https://support.google.com/mail/answer/56256?hl=en">Register</a></p>
      </div>
   </form>
    </div>
    </>
  );
};

export default App
