import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseHandler() {
    setCount(count+1)
  }
  function deacreaseHandler() {
    setCount(count-1)
  }
  function resetHandler() {
    setCount(0)
  }

  return (
    <>
     
        <div className="text-[#0398d4] font-medium text-2xl"> increament and decrement</div>
        <div className="flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
          <button   onClick={deacreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
            -
          </button>
        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>
        <div>
          <button  onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
            +
          </button>
        </div>
          
        </div>
        <button onClick={resetHandler}className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg capitalize">
            Reset
          </button>

    </>
  )
}

export default App
