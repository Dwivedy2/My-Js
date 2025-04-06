import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const users = [
    {
      username: "Bud",
      rank: 2000,
      link: "https://tailwindcss.com/",
      linkTxt: "tailwindcss"
    },
    {
      username: "Hxx",
      rank: 3500,
      link: "https://vite.dev/",
      linkTxt: "vite"
    },
    {
      username: "Harry Honda",
      rank: 4000,
      link: "https://react.dev/",
      linkTxt: "react"
    },
    {
      username: "Till XXX",
      rank: 1200,
      link: "https://nodejs.org/en",
      linkTxt: "nodejs"
    }
  ]

  return (
    <>
      <h1 className='bg-green-400 p-4 mb-4'>Vite + React</h1>
      <div className='flex'>
        {users.map(({username, rank, link, linkTxt}) => <Card name={username} lvl={rank} btnLink={link} value={linkTxt}/> )}
      </div>
    </>
  )
}

export default App
