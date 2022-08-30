import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

const PageLinks = ({text}) => {

  const [ hover, setHover] = useState(false)

  return (
    <div
      onClick={() => {
        
      }}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseOut={() => {
        setHover(false)
      }}
      style={{ 
        height: 20,
        color: 'white',
        paddingLeft: 20,
        cursor: 'pointer',
        fontFamily: 'Fira Sans,Roboto,Arial,Helvetica,sans-serif',
        paddingTop: 8,
        color: hover ? 'grey' : 'white'
      }}
    >
      {text}
    </div>
  )
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={{ 
        position: 'absolute',
        height:'100%', 
        width:'100%', 
        backgroundColor: 'grey'
      }}>
        {/* Header */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: 60,
          left: 0,
          top: 0,
          background: 'white'
        }}>
          {/* User */}
          <div 
            style={{
              position: 'absolute',
              width: 30,
              height: 30,
              //left: 0,
              //top: 0,
              background: 'grey',
              borderRadius: 25,
              marginLeft: '95%',
              marginTop: 17
            }}
          >
          </div>
        </div>
        {/* Sidebar */}
        <div style={{ 
          position: 'absolute',
          width: 95,
          height: '100%',
          left: 0,
          top: 60,
          paddingTop: 8,
          background: '#282828'
        }}>
          {/* Page Links */}
          <PageLinks text='Funds'/>
          <PageLinks text='Charts'/>
          <PageLinks text='Payday'/>
        </div>
      </div>
    </Provider>
  </React.StrictMode>
)



//take logic out of mobile app, thats the one I want!