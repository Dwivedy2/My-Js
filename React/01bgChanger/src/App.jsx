import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App({body}) {
  const [count, setCount] = useState(0)
  const colours = ['red', 'green', 'blue', 'olive', 'gray', 'yellow', 'pink', 'purple', 'lavender', 'white', 'black'];

  function bgChange(color) {
    body.style.backgroundColor = color;
  }

  return (
    <div className='w-full p-4 bg-black fixed bottom-10 flex flex-wrap gap-10 justify-center'>
      {colours.map((colour, index) => <Button key={index} color={colour} handleClick={bgChange} />)}
    </div>
  )
}

export default App
