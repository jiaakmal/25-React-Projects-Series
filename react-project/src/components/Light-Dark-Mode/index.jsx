import React from 'react'
import useLocalStorage from './localStorageCustomHook'
import './theme.css'

export default function LightDarkMode() {

  const [theme, setTheme] = useLocalStorage("theme" , "dark")

  function toggleMode(){
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className='container'>
            <h1>Light/Dark Mode Toggle</h1>
            <button className='btn-toggle' onClick={() => toggleMode()}>Toggle Mode</button>

        </div>

    </div>
  )
}
