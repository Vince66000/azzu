import Image from 'next/image'
import * as React from 'react';
import Link from 'next/link'
import {Navbar} from "flowbite-react";
import "flowbite";

const links = [
    { href: '/materiel', label: 'Matériel' },
    { href: '/logiciels', label: 'Logiciel' },
    { href: '/telephonie', label: 'Téléphonie' },
    { href: '/it_management', label: 'IT management' },
    { href: '/contact', label: 'Contact' },
    {href: '/', label: 'Accueil'},
    {href: '/valeurs', label: 'Nos valeurs'},
    {href: '/univers', label: 'L\'univers d\'azzu'}
]
export function Header() {

    return (
        <header className="bg-blue-900 top-0 flex flex-col  md:flex-row justify-between p-4 text-yellow-300">
            {/*Left*/}
            <div className="cursor-pointer m-auto pb-4 md:my-auto">
                <Link href="/">
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        objectFit="contain"
                        objectPosition="left"
                        width={200}
                        height={200}
                        className="items-center justify-center"
                    />
                </Link>
            </div>
            {/*Middle*/}

            <nav className="m-auto ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 my-auto">
                    <button data-collapse-toggle="navbar-dropdown" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500
                            rounded-lg bg-blue-900 border border-yellow-300 md:hidden focus:outline-none focus:ring-1 focus:ring-yellow-300"
                            aria-controls="navbar-dropdown" aria-expanded="true">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto " id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-yellow-300 rounded-lg md:flex-row md:space-x-8
                        md:mt-0 md:border-0 bg-blue-900 text-yellow-300">
                            <li>
                                <a href="/"
                                   className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                                   aria-current="page">Accueil</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                        className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded md:border-0
                                        md:p-0 md:w-auto">Nos services
                                    <svg
                                        className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                {/*dropdown*/}
                                <div id="dropdownNavbar"
                                     className="z-10 hidden font-normal bg-blue-900 border border-yellow-300 divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <ul className="py-2 text-sm"
                                        aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="../it_management" className="block px-4 py-2 hover:bg-yellow-200 hover:text-blue-900 hover:font-bold">IT management</a>
                                        </li>
                                        <li>
                                            <a href="../logiciel" className="block px-4 py-2 hover:bg-yellow-200 hover:text-blue-900 hover:font-bold">Logiciel et sécurité</a>
                                        </li>
                                        <li>
                                            <a href="../materiel" className="block px-4 py-2 hover:bg-yellow-200 hover:text-blue-900 hover:font-bold">Matériel</a>
                                        </li>
                                        <li>
                                            <a href="../telephonie" className="block px-4 py-2 hover:bg-yellow-200 hover:text-blue-900 hover:font-bold">Téléphonie</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="../univers"
                                   className="block py-2 pl-3 pr-4 rounded  md:border-0 md:p-0 ">L'univers d'azzu</a>
                            </li>
                            <li>
                                <a href="../valeurs"
                                   className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0
                                   md:p-0">Nos valeurs</a>
                            </li>
                            <li>
                                <a href="../contact"
                                   className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/*Right*/}
            <div className="hidden md:w-auto md:flex md:items-center md:justify-end md:text-gray-500">
                <Link href="https://assist.rg.gg/" target="_blank">
                    <button className="text-red-700 bg-gray-200 px-8 py-2 rounded-full shadow-md font-bold  hover:shadow-xl
                active:scale-90 transition duration-150 z-20">Assistance</button></Link>

            </div>
        </header>

    );
};
