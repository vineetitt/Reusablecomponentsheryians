import { useState } from 'react'
import './App.css'
import Card from './components/card'
import SongCard from './components/SongCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <SongCard/>
    </>
  )
}

export default App
