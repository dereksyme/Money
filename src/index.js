import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { CgProfile } from 'react-icons/cg';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsPiggyBank } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
//https://react-icons.github.io/react-icons/search?q=money
import { store } from './app/store'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

const Icon = ({name, size}) => {

  if(name === 'BsPiggyBank'){
    return <BsPiggyBank size={size} />
  } else if(name === 'RiMoneyDollarCircleLine'){
    return <RiMoneyDollarCircleLine size={size} />
  } else if(name === 'CgProfile'){
    return <CgProfile size={size} />
  } else if(name === 'AiOutlinePieChart'){
    return <AiOutlinePieChart size={size}/>
  }
  return (
    <div />
  )
}

const PageLink = ({text, iconName}) => {

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
        paddingLeft: 15,
        cursor: 'pointer',
        fontFamily: 'Fira Sans,Roboto,Arial,Helvetica,sans-serif',
        paddingTop: 12,
        color: hover ? 'grey' : 'white',
        //marginBottom: 10
      }}
    >
      <Icon name={iconName} size={25}/>
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
              //background: 'grey',
              //borderRadius: 25,
              marginLeft: '95%',
              marginTop: 17,
              cursor: 'pointer'
            }}
          >
            <Icon name='CgProfile' size={30} />
          </div>
        </div>
        {/* Sidebar */}
        <div style={{ 
          position: 'absolute',
          width: 110,
          height: '100%',
          left: 0,
          top: 60,
          paddingTop: 8,
          background: '#282828'
        }}>
          {/* Page Links */}
          <PageLink text='Funds' iconName='BsPiggyBank' />
          <PageLink text='Charts' iconName='AiOutlinePieChart' />
          <PageLink text='Payday' iconName='RiMoneyDollarCircleLine' />
        </div>
      </div>
    </Provider>
  </React.StrictMode>
)



//take logic out of mobile app, thats the one I want!