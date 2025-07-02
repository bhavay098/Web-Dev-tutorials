import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')   // storing the current theme in a state variable

  // Two functions to update the theme. we'll call these from a button to switch between themes.
  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual change in theme. Applying Theme to the DOM
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')   // Removes any old theme class from the <html> element
    document.querySelector('html').classList.add(themeMode)   // Adds the new theme class (light or dark)
  }, [themeMode])   // This runs every time themeMode changes.

  return (
    // wrapping our app in context provider that shares the current theme (themeMode) and functions to switch themes (darkTheme, lightTheme)
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App