import React from 'react'
import { Counter } from './features/counter/Counter.js'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
        {/* Try these tables, collapsable or spanning */}
        {/* https://mui.com/material-ui/react-table/ */}
      </header>
    </div>
  )
}

export default App
