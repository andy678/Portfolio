import React, {useContext} from 'react';
import Button from '../button';
import { LanguageContext } from '../../context/languageContext';

export default function NavBar(props) {

  const languageEN = useContext(LanguageContext)
  

    return (
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 font-rubik">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <div class="flex md:order-2">
      <Button type="dayNightToggle" />
      <button onClick={() => props.onDarkMode("dark")}></button>
          <button onClick={() => console.log("CLICKED")} ><Button text="Contact Me"/></button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 font-9xl" id="mobile-menu-4">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-large">
      <li>
        <a href="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">HOME</a>
      </li>
      <li>
        <a href="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{languageEN ? "ABOUT ME" : "关于我"}</a>
      </li>
      <li>
        <a href="/projects" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">MY PROJECTS</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    );
  }