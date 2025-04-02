import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  function incCounter() {
    setCounter(counter + 1);
  }

  const notes = [
    {
      Title: "Making branch as per minh",
      Description: "Make a branch as per minh suggestion on master"
    },
    {
      Title: "Check story in anshi machine",
      Description: "Check story in anshi machine and check if it is working"
    },
    {
      Title: "Learn React",
      Description: "Make some light weight projects in react"
    },
  ];

  return (
    // <>
    //     <h1>Hello React</h1>
    //     <Button getCounter={counter} handlerFunc={incCounter} />
    //     <Button getCounter={counter} handlerFunc={incCounter} />
    // </>

    <>
      {notes.map(({Title, Description}) => <Card title={Title} description={Description} />)}
    </>
  )
}

function Button({getCounter, handlerFunc}) {  
  return (
    <>
      <p>Total Clicks: {getCounter}</p>
      <button onClick={handlerFunc}>Click Counter</button>
    </>
  );
}

function Card({title, description}) {
  return (
    <div class="card">
      <div class="container">
        <h4><b>{title}</b></h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default App
