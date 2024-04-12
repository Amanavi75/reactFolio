import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <h1> Our testimonials </h1>
      </div>
      <div>
        underline
      </div>
      <div>
        <Testimonial/>
      </div>
    </div>
  )
}

export default App
