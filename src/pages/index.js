import {Header} from "../../components/Header";
import Head from "next/head";
import Video from "../../Components/Video";
import {Player} from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import {Footer} from "../../Components/Footer";

function Home() {
    return (
        <div className="body">
            <Header/>
            <Video/>
            <div id="hero" className="w-full flex flex-col md:flex-row justify-center my-auto py-10">
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                    <h1 className=" text-center md:text-3xl ">Changez votre vision de l'informatique d'entreprise</h1>
                    <p className="w-10/12 text-xl m-auto text-center md:text-left">Fort de plus de 15 ans d’expérience dans le domaine, nous sommes convaincus que l’informatique ne doit pas être
                        une source de stress pour les entreprises, mais plutôt un outil efficace pour leur développement.</p>
                    <div className="m-auto p-5">
                        <button className="btn px-4 py-3 ">Découvrez l'univers d'Azzu informatique</button>
                    </div>
                </div>
                <Player className="md:hidden"
                        autoplay
                        loop
                        src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                        style={{ height: '200px', width: '200px' }}>
                </Player>
                <Player id="image"
                        className=""
                        autoplay
                        loop
                        src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                        style={{ height: '400px', width: '400px' }}>
                </Player>
            </div>
            <div className="flex flex-col justify-center mx-auto text-center space-y-4 w-96 md:space-y-0 md:flex-row md:w-[50rem] md:space-x-2" >
                <div className="w-full bg-gray-300 rounded-xl" id="maintenance">
                    <h2 className="text-xl md:text-xl text-center">Gestion et maintenance</h2>
                    <p className="p-4 pb-16 text-lg">Gestion de parc informatique simplifiée. Maîtrisez votre infrastructure, optimisez vos ressources.</p>
                    <div className="p-4">
                        <button className="btn absolute inset-x-8 bottom-4 px-4 py-2 m-auto">Découvrir</button>
                    </div>
                </div>
                <div className="w-full bg-gray-300 rounded-xl" id="materiel">
                    <h2  className="text-xl md:text-xl text-center">Vente de matériel </h2>
                    <p  className="p-4 pb-16 text-lg">Matériel informatique de qualité et expertise assurée : choisissez Azzu. Optimisez votre équipement, boostez votre productivité.</p>
                    <div className="p-4">
                        <button className="btn absolute inset-x-8 bottom-4 px-4 py-2 m-auto">Découvrir</button>
                    </div>
                </div>
                <div  className="w-full bg-gray-300 rounded-xl" id="cyber">
                    <h2 className="text-xl md:text-xl text-center"> logiciel et sécurité</h2>
                    <p className="p-4 pb-16 text-lg">Cybersécurité et logiciels : la combinaison parfaite avec Azzu informatique. Protégez vos données, optimisez vos performances.</p>
                    <div className="p-4">
                        <button className="btn absolute inset-x-8 bottom-4 px-4 py-2 m-auto">Découvrir</button>
                    </div>
                </div>
                <div  className="w-full bg-gray-300 rounded-xl" id="telephonie">
                    <h2  className="text-xl lg:text-xl text-center">Téléphonie</h2>
                    <p  className="p-4 pb-16 text-lg">Téléphonie professionnelle optimisée avec Azzu. Communiquez efficacement, boostez vos collaborations.</p>
                    <div className="p-4">
                        <button className="btn absolute inset-x-8 bottom-4 px-4 py-2 m-auto">Découvrir</button>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col m-auto md:w-3/4 md:flex-row pt-10">
                <Player className=""
                        autoplay
                        loop
                        src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                        style={{ height: '300px', width: '300px' }}>
                </Player>
                <div className="w-full m-auto">
                    <h1 className="text-center text-xl font-bold  w-full ">Gagner en productivité n'a jamais été aussi facile !</h1>
                    <p className="text-xl text-center w-full pt-7">À une époque où tout est interconnecté et en constante évolution, Azzu Informatique vous propose
                        un partenariat durable qui vous permettra de vous concentrer pleinement sur votre activité.
                        Pendant que vous vous consacrez à votre domaine d’expertise, nous prenons en charge la gestion de votre infrastructure
                        informatique. Ainsi, vous bénéficiez de la tranquillité d’esprit en sachant que votre outil informatique est entre de
                        bonnes mains. Azzu informatique a forcément une solution adaptée à vos besoins. contactez nous !</p>
                </div>
            </div>
            <h2 className="text-center p-4">Nos valeurs</h2>
            <div className="w-10/12 flex flex-col m-auto  items-center space-y-2 p-4">
                <h3>Honnêteté</h3>
                <h3>Efficacité</h3>
                <h3>Transparence</h3>
            </div>
            <h2 className="text-lg text-center pb-8 lg:text-2xl">Ensemble, changeons votre vision de l'informatique d'entreprise</h2>
            <div className="w-full p-4 md:w-2/3 m-auto ">
                <p className="text-left text-cyan-600 font-bold lg:text-2xl animate-flip-up animate-once animate-duration-[600ms] animate-delay-0">Vous vous concentrez sur votre activité</p>
                <p className="text-right font-bold lg:text-2xl animate-flip-up animate-once animate-duration-[600ms] animate-delay-200">Nous déployons des solutions adaptées</p>
                <p className="text-left text-cyan-600 font-bold lg:text-2xl animate-flip-down animate-once animate-duration-[600ms] animate-delay-700">Nous assurons la gestion de votre parc</p>
                <p className="text-right font-bold lg:text-2xl animate-flip-down animate-once animate-duration-[600ms] animate-delay-900">Vous gagnez en productivité</p>
            </div>
            <Footer/>
        </div>
    )
}
export default Home
