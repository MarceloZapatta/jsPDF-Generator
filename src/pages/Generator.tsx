import React from 'react'
import { useAppDispatch } from '../app/hooks'
import SortableComponent from '../components/SortableComponent'
import Title from '../components/Title'
import { addItem } from '../features/pdf/pdfSlice'

function Generator() {
  const dispatch = useAppDispatch()

  const handleClickTitle = () => {
    dispatch(addItem(<Title title='Example title' />))
  }

  return (
    <div className="App-main-code">
      <div className="App-main-code-options">
        <ul>
          <li>
            <button onClick={handleClickTitle}>Title</button>
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
  )
}

export default Generator
