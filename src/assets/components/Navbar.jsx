import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="bg-white border-red-200 dark:bg-red-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
    rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
    focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Abrir el Menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-red">
        <li>
          <Link to="/Home" className="block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700
           md:p-0 dark:text-white md:dark:text-gray-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/Contacto" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</Link>
        </li>
      </ul>
    </div>
    <Link to="/Home" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Happy Cake</span>
        <img src="https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F382-birthday-cake-512.png" className="h-8 mr-3" alt="cake" />
    </Link>
  </div>
</nav>
  )
}
