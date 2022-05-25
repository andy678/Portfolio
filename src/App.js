import './App.css';
import React, {useState, createContext} from 'react';
import NavBar from './components/navBar';
import Footer from './components/footer';
import PageRoutes from './pageRoutes';

export const ThemeContext = createContext(null)

export default function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  localStorage.setItem("theme", theme)

  return (
      <div className={`App ${theme} relative`}>
            <NavBar onDarkMode={toggleTheme} />
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
