import {FC, ReactNode, useEffect, useState,} from 'react';
import {ThemeContext, TThemeClassName} from '@/contexts/themeContext/themeContext';


type TThemeProviderProps = {
  children: ReactNode;

};

export const ThemeProvider: FC<TThemeProviderProps> = ({children}) => {
  const [themeClassName, setThemeClassName] = useState<TThemeClassName>('darkMode')


  useEffect(() => {
    const savedTheme = localStorage.getItem('themeClassStorageName') as TThemeClassName;
    if (savedTheme) {
      setThemeClassName(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeClassStorageName', themeClassName);
  }, [themeClassName]);

  const toggleTheme = () => {
    setThemeClassName((prevTheme) => (prevTheme === 'whiteMode' ? 'darkMode' : 'whiteMode'));
  };
  return (
      <ThemeContext.Provider value={{themeClassName, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
  );
}
