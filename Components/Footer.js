import Image from 'next/image'
import * as React from 'react';
import Link from 'next/link'


export function Footer() {
    return (
        <footer className="bg-blue-900 h-auto flex w-full text-yellow-300 " id="footer">
            <ul className="flex flex-col p-4 text-left w-1/2 text-xs">
                <li>
                    <Link href="../universe">L'univers</Link>
                </li>
                <li>
                    <Link href="../services">Nos services</Link>
                </li>
                <li>
                    <Link href="../values">Nos valeurs</Link>
                </li>
            </ul>
            <ul className="flex flex-col text-base p-4 text-right my-auto w-1/2  text-xs">
                <li>
                    <a href="../phone">Nous contacter</a>
                </li>
                <li>
                    <a href="../software">Termes et conditions</a>
                </li>
            </ul>
        </footer>
    );
};
