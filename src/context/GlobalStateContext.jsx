// GlobalStateContext.js
import React, { createContext, useContext, useState } from 'react'


const GlobalStateContext = createContext()

export const useGlobalState = () => useContext(GlobalStateContext)

export const GlobalStateProvider = ({ children }) => {
 
    const [languageGlobalState, setLanguageGlobalState] = useState({
        "fromLanguage": 'en',
        "toLanguage": 'fr'
    })

  return (
    <GlobalStateContext.Provider value={{ languageGlobalState, setLanguageGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  )
}