import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    function page2 (){
        navigate("/Signin")
    }
  return (
    <>
    <form>
        <input placeholder='enter your mail ' type="mail"  required
        ></input>
        <input placeholder='enter your password ' type="password"  required
        ></input> 

         <button>Login</button>
         <button onClick={page2}>Signin</button>
    </form>
    </>
  )
}

export default Login