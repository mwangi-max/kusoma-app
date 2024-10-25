import { useState } from 'react'
import Count from './Count.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Count/>
  )
}

export default App
