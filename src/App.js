import './App.css';
import React, {useState} from 'react';
import NavBar from './components/navBar';
import Footer from './components/footer';
import PageRoutes from './pageRoutes';
import { LanguageContext, languageEN } from './context/languageContext';

export default function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  localStorage.setItem("theme", theme)

  return (
      <div className={`App ${theme} relative`}>
        <LanguageContext.Provider value={languageEN}>
          <NavBar onDarkMode={toggleTheme} />
            <div className="flex-grow h-screen p-16 dark:bg-gray-900 dark:text-white">
              <PageRoutes />
              <button className="bg-red" onClick={toggleTheme}></button>
            </div>
            <div className="float-bottom">
              <Footer />
            </div>
        </LanguageContext.Provider>
      </div> 
  );
}
