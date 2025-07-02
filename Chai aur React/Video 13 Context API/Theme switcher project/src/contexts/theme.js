import { createContext, useContext } from 'react'

// creating a global context object called ThemeContext
export const ThemeContext = createContext({  // setting default values
    themeMode: 'light',  // default theme
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider  // exporting .Provider part of the context with a cleaner name.

// defining a custom hook named useTheme.
export default function useTheme() {
    return useContext(ThemeContext)
}
// Note: here we are definig a function or custom hook as React hooks like useContext() or any hook can only be called inside a functional component Or inside a custom hook. We CANNOT call hooks at the top level of a module (outside of a function).