import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
   <>
   <ThemeContext.Provider value={{ theme, toggleTheme }}>
   <div id={theme}>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
   </div>
   </ThemeContext.Provider>
   </>
  );
}

export default App;
