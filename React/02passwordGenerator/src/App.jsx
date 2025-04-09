import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumberChecked, setIsNumberChecked] = useState(false);
  const [isCharacterChecked, setIsCharacterChecked] = useState(false);
  const [password, setPassword] = useState("");
  let passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumberChecked) {
      str += "1234567890";
    }
    if(isCharacterChecked) {
      str += "!@#$%^&*-=[]{}|\/?,.<>`~:;";
    }
    
    let pass = "";
    for(let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
    console.log("password is generated");
  }, [length, isNumberChecked, isCharacterChecked, setPassword]);

  useEffect(() => passwordGenerator(), [length, isNumberChecked, isCharacterChecked]);

  function copyToClipboard() {
    passRef.current.select();
    window.navigator.clipboard.writeText(passRef.current.value);
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 bg-gray-500'>
        <h1 className='text-white text-4xl text-center my-3'>Password Generator</h1>
        <div className='flex shadow-md mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white rounded-l-2xl text-blue-600 font-bold'
            readOnly
            ref={passRef}
          />
          <button 
            onClick={copyToClipboard}
            className='text-white bg-blue-600 rounded-r-2xl font-bold py-1 px-3 cursor-pointer'
            >Copy
          </button>
        </div>
        <div className='flex gap-4'>
          <div>
            <input 
              type="range" 
              name="length" 
              id="length" 
              className='mr-4'
              min={8}
              max={32}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-white' htmlFor="length">Length ({length})</label>
          </div>
          <div className='flex align-middle'>
            <input 
              type="checkbox" 
              name="isNum" 
              id="isNum"
              className='mr-0.5'
              onChange={() => setIsNumberChecked(prev => !prev)}
            />
            <label className='text-white' htmlFor="isNum">Number</label>
          </div>
          <div className='flex align-middle'>
            <input 
              type="checkbox" 
              name="isChar" 
              id="isChar"
              className='mr-0.5'
              onChange={() => setIsCharacterChecked(prev => !prev)}
            />
            <label className='text-white' htmlFor="isChar">Character</label>
          </div>
        </div>
      </div>
    </> 
  )
}

export default App
