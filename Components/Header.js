import Image from 'next/image'
import * as React from 'react';
import Link from 'next/link'
import { useRef } from 'react';


export function Header() {

    return (
        <header className="bg-blue-900 top-0 flex flex-col md:flex-row justify-between p-4 text-yellow-300">
            {/*Left*/}
            <div className="cursor-pointer my-auto ">
                <Link href="/">
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        // layout='fill'
                        objectFit="contain"
                        objectPosition="left"
                        width={200}
                        height={200}
                    />
                </Link>
            </div>
            {/*Middle*/}
            <div className="w-auto my-auto text-xs" id="mainMenu">
                <div className="flex space-x-4">
                    <div>
                        <Link href="/">Accueil</Link>
                    </div>
                    <div>
                        <Link href="../universe">L'univers d'Azzu</Link>
                    </div>
                    <div>
                       <Link href="../services">Nos services</Link>
                       <div className="flex flex-col absolute z-50 bg-blue-900 p-2 text-white hidden" onClick="visibility: visible" id="menu">
                           <div className="">
                               <Link href="#">Matériel</Link>
                               <Link href="#">Gestion/maintenance</Link>
                               <Link href="#">Téléphonie</Link>
                               <Link href="#">Logiciel</Link>
                           </div>
                       </div>

                    </div>
                    <div>
                        <Link href="../values">Nos valeurs</Link>
                    </div>
                </div>
            </div>
            {/*Right*/}
            <div className=" w-auto flex items-center justify-end text-gray-500">
                <Link href="https://assist.rg.gg/" target="_blank">
                    <button className="text-red-700 bg-gray-200 px-8 py-2 rounded-full shadow-md font-bold  hover:shadow-xl
                active:scale-90 transition duration-150 z-20">Assistance</button></Link>

            </div>
        </header>

    );
};
