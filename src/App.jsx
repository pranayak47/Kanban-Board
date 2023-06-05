import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './components/board/board'

function App() {
    return (
    <div className='app'>
      <div className='app_navbar'>
        <h2>Kanban Board</h2>
      </div>
      <div className='app_outer'>
        <div className='app_boards'>
           <Board/>
           <Board/>
           <Board/>
           {/* <Board/>
           <Board/> */}
        </div>
      </div>
    </div>
  )
}

export default App
