import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <Card>
      <h2>Hello</h2>
      <Profile />
      <Button />
    </Card>
  )
}

function Card({ children }) {
  console.log(children);
  
  return (
    <div className='card'>
      {children}
    </div>
  )
}

function Profile() {
  return (
    <>
      <h1>Name</h1>
      <p>Description</p>
    </>
  )
}

function Button() {
  return (
    <button>Submit</button>
  )
}

export default App
