import './App.css';
import React, {useState, createContext} from 'react';
import NavBar from './components/navBar';
import Footer from './components/footer';
import PageRoutes from './pageRoutes';

export const ThemeContext = createContext(null)

export default function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const [defaultLanguage, setDefaultLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : true)

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  const toggleLanguage = () => {
    setDefaultLanguage((curr) => (curr === true ? false : true))
  }

  localStorage.setItem("theme", theme)
  localStorage.setItem("language", defaultLanguage)

  return (
      <div className={`App ${theme} relative`}>
            <NavBar onDarkMode={toggleTheme} onLanguage={toggleLanguage} />
          <div className="flex-grow h-screen p-16 dark:bg-gray-700 dark:text-white">
            <PageRoutes />
            <button className="bg-red" onClick={toggleTheme}></button>
          </div>
          <div className="float-bottom">
            <Footer />
          </div>
      </div> 
  );
}
