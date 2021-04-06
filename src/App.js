import React from 'react'
import SortableComponent from './components/SortableComponent'

import logo from './logo.svg'
import './App.css'
import Generator from './pages/Generator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>jsPDF Generator</h1>
      </header>
      <main className="App-main">
        <Generator />
      </main>
    </div>
  )
}

export default App
