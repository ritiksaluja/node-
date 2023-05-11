import { useState  } from 'react'
import axios from "axios"


function App() {
  const [ name , setName] = useState("")
  const [ author , setAuthor] = useState("")
  const [ content , setContent] = useState("") 

  function handlesubmit(e){
    e.preventDefault()
    axios.post("/api" , {
       title : name ,
       author : author , 
       content : content 
    })

  }

  return (
    <>
      <form  onSubmit={handlesubmit}>
        <input  type= "text" placeholder='title' name= "title" value={name} 
        onChange={(e)=>{setName(e.target.value)}}></input>

        <input  type= "text" placeholder='Author' name='author' value={author} 
        onChange={(e)=>{setAuthor(e.target.value)}}></input>

        <input  type= "text" placeholder='Content' name='content'value={content} 
        onChange={(e)=>{setContent(e.target.value)}}></input>

        <button type='submit'>sumbit</button>

      </form>
    </>
  )
}

export default App
