import { useState } from 'react'
import {Routes , Route, BrowserRouter} from "react-router-dom"
import Login from './Login'
import Signin from './Signin'
import Data from './Data'



function App() {
 

  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/signin' element={<Signin/>}></Route>
<Route path='/Data' element={<Data/>}></Route>

</Routes>



</BrowserRouter>

     
    </>
  )
}

export default App
