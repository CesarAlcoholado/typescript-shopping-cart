import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>
    <Routes>
      <Route/>
      <Route/>
      <Route/>
    </Routes>
    </div>
  )
}

export default App
