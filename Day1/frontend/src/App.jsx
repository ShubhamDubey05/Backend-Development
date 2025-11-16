import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])
  return (
    <>
      <h1>Hello, This is fullstack Project</h1>
      <p>Number of jokes = {jokes.length}</p>
      {jokes.map((joke, index)=>(
        <div key ={joke.id}>
          <h3>{joke.category}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  )
}

export default App
