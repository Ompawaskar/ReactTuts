import {createContext, useContext} from 'react';

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

// useContext will return contextObject
export default function useTheme(){
    return useContext(ThemeContext)
}



