"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <nav className="bg-[#1E1E1E] min-w-[350px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex">
            <Image
              alt="Logo INGELMECO"
              src="/images/logo.png"
              width={270}
              height={51}
            />
          </div>
  
          <div className="space-x-8 hidden w-full md:block md:w-auto">
            <a href="#" className="text-white font-bold lg:text-2xl sm:text-1xl">
              Contáctanos
            </a>
            <a href="#" className="text-white font-bold lg:text-2xl">
              Categorias
            </a>
            <a href="#" className="text-white font-bold lg:text-2xl">
              Productos
            </a>
            <a href="#" className="text-white font-bold lg:text-2xl">
              Sobre Nosotros
            </a>
          </div>
  
          <button
            type="button"
            className="ml-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
  
        {menuOpen && (
  <div className="fixed top-0 right-0 h-screen w-3/5 bg-opacity-80 bg-[#1E1E1E] backdrop-blur">
    <div className="h-screen flex flex-col justify-start p-4">
      <a href="#" className="text-white font-bold text-1xl my-4">
        Contáctanos
      </a>
      <a href="#" className="text-white font-bold text-1xl my-4">
        Categorias
      </a>
      <a href="#" className="text-white font-bold text-1xl my-4">
        Productos
      </a>
      <a href="#" className="text-white font-bold text-1xl my-4">
        Sobre Nosotros
      </a>
    </div>
  </div>
)}
      </nav>
    );
  };

export default Navbar;
