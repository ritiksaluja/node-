import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function Signin() {
    const [first , setFirst] = useState()
    const [last , setLast] = useState()
    const [mail , setMail] = useState()
    const [pass , setPass]= useState()

    const navigate1 = useNavigate()

    function account(e){
        e.preventDefault()
      
        axios.post("/signin" ,  {
          firstn : first ,
          lastn : last, 
          email: mail, 
          password :pass
        })

       
    }
  return (
    <>
    
    <form onSubmit={account}>
        <input  type="text" placeholder='Enter your  First name' required 
        value={first} onChange={(e)=>{setFirst(e.target.value)}}></input>

        <input type="text" placeholder='Enter your Last Name ' required
        value={last} onChange={(e)=>{setLast(e.target.value)}}></input>

        <input type="email" placeholder='Enter Your Email ' required
        value={mail} onChange={(e)=>{setMail(e.target.value)}}></input>

        <input type="password" placeholder='Enter Your Password ' required
        value={pass} onChange={(e)=>{setPass(e.target.value)}}></input>

        <button type='submit'>Create Account</button>
    </form>
    
    
    </>
  )
}

export default Signin