import {createContext, useContext} from 'react';




type ThemeContextType = {
 theme: string
 toggleTheme: () => void;
}
const defaultThemeContext: ThemeContextType = {
 theme: 'whiteMode',
 toggleTheme: () => {}
};
export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);
 export const useTheme = () => useContext(ThemeContext);