"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, MouseEvent } from "react";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = (e: MouseEvent | any) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);

        return () => {
            document.removeEventListener("mousedown", closeMenu);
        };
    }, []);

    return (
        <header className="bg-[#202020]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/">
                            <span className="sr-only">Inicio</span>
                            <Image
                                className="cursor-pointer w-36"
                                alt="Logo INGELMECO"
                                src="/images/logo.webp"
                                width={900}
                                height={100}
                            />
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link href="/" className="text-white font-medium transition hover:text-gray-500/75">
                                        Inicio
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/productos" className="text-white font-medium transition hover:text-gray-500/75">
                                        Nuestros Productos
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Nosotros" className="text-white font-medium transition hover:text-gray-500/75">
                                        Sobre Nosotros
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="block md:hidden">
                                <button onClick={toggleMenu} className="rounded bg-[#202020] p-2 text-white transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="fixed top-0 right-0 h-screen z-20 w-3/5 bg-opacity-80 bg-[#1E1E1E] backdrop-blur"
                >
                    <div className="h-screen flex flex-col justify-start p-4">
                        <Link href="/" className="text-white font-bold text-1xl my-4" >
                            <span onClick={toggleMenu}>Inicio</span>
                        </Link>
                        <Link href="/productos" className="text-white font-bold text-1xl my-4">
                            <span onClick={toggleMenu}>Nuestros Productos</span>
                        </Link>
                        <Link
                            href="/Nosotros"
                            className="text-white font-bold text-1xl my-4"
                        >
                            <span onClick={toggleMenu}>Sobre Nosotros</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
