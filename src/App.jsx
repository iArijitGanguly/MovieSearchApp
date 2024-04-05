import React, { useState } from 'react';
import MainRoutes from './routes/MainRoutes';
import NavBar from './components/NavBar';

import { ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="bg-darkBlue" data-theme={theme}>
          <NavBar />
          <MainRoutes />
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;