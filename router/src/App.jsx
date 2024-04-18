import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 
"react-router-dom"
import Home from './Components/Home'
import Support from './Components/Support'
import About from './Components/About'
import Labs from './Components/Labs'
import Notfound from './Components/Notfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Routes>
        <Route path="/" element={<div> home page</div>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
     </div>
    </>
  )
}

export default App
