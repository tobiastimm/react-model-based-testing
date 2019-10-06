import React from 'react'
import './styles/tailwind.css'
import Feedback from './components/Feedback'

function App() {
  return (
    <div
      data-testid="app"
      className="flex flex-col justify-center w-full h-screen mx-auto max-w-md"
    >
      <Feedback></Feedback>
    </div>
  )
}

export default App
