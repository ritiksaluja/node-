import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Data() {

  const [Data , setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3500/Res").then((response)=>{
      setData(response.data)
      console.log(response)
     
    })
  },[])
  return (
    <>
     <div>{
      Data.map((rs)=>{
        return(
          <>
          <div>
          <p>name:{rs.firstn+ rs.lastn}</p>
          <p>email:{rs.email}</p>
          <p>pass:{rs.password}</p>


          </div>
           
           

          </>
          
        )
      })

      }
      
     </div>
    </>
  )
}

export default Data