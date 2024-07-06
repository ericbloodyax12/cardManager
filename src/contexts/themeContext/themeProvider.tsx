import {FC, ReactNode, useState,} from 'react';
import { ThemeContext} from '@/contexts/themeContext/themeContext';


type TThemeProviderProps = {
  children: ReactNode;

};

export const ThemeProvider: FC<TThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState("")
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'whiteMode' ? 'darkMode' : 'whiteMode'));
  };
  return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
      </ThemeContext.Provider>
  );
}
