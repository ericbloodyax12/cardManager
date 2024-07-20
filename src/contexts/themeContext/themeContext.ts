import {createContext, useContext} from 'react';



export type TThemeClassName = "whiteMode" | "darkMode";

type ThemeContextType = {
 themeClassName: TThemeClassName
 toggleTheme: () => void;
}

const defaultThemeContext: ThemeContextType = {
 themeClassName: 'whiteMode',
 toggleTheme: () => {}
};
export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);
export const useTheme = () => useContext(ThemeContext);