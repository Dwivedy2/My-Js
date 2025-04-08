import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App({ body }) {
  const [color, setColor] = useState('olive')

  const colorList = ['red', 'green', 'blue', 'olive', 'gray', 'yellow', 'pink', 'purple', 'lavender', 'white', 'black'];

  function setBgColor(colour) {
    setColor(colour);
  }

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colorList.map((colour, index) => <Button key={index} color={colour} handleClick={setBgColor} />)}
        </div>
      </div>
    </div>
  )
}

export default App
