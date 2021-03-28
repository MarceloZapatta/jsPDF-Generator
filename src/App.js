import React from 'react'
import SortableComponent from './components/SortableComponent'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>jsPDF Generator</h1>
      </header>
      <main className="App-main">
        <div className="App-main-code">
          <div className="App-main-code-options">
            <ul>
              <li>
                <button>Title</button>
              </li>
              <li>
                <button>Text</button>
              </li>
              <li>
                <button>Image</button>
              </li>
              <li>
                <button>Table</button>
              </li>
            </ul>
          </div>
          <div className="App-main-code-items">
            <SortableComponent />
          </div>
        </div>
        <div className="App-main-preview">Eu sou o preview</div>
      </main>
    </div>
  )
}

export default App
