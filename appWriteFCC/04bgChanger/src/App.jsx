import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('orange')

  function changeColor(color) {
    setColor(color)
  }

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
            <button onClick={() => changeColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg'>Red</button>
            <button onClick={() => changeColor('rebeccapurple')} className='outline-none px-4 py-1 rounded-full shadow-lg'>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
