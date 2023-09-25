import * as React from 'react';
import {Header} from "../../Components/Header";
import Head from "next/head";
import {Footer} from "../../Components/Footer";
import {Player} from "@lottiefiles/react-lottie-player";

function Univers() {
    return (
        <div className="body">

            <Head>
                <title>Azzu informatique - Notre univers</title>
            </Head>
            <Header/>
            <div className="body">
                    <h1 className="text-center pt-20 text-2xl">Notre histoire</h1>
                    <div className="w-3/4 flex flex-col md:flex-row justify-center  m-auto">
                        <Player className="md:hidden"
                                autoplay
                                loop
                                src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                                style={{ height: '200px', width: '200px' }}>
                        </Player>
                        <Player className=""
                                autoplay
                                loop
                                src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                                style={{ height: '400px', width: '400px' }}>
                        </Player>
                        <p className="my-auto w-1/2 text-justify">
                            En tant que professionnels chevronnés dans le domaine de l’informatique, nous avons acquis une riche expérience tout au long de nos 25 années de travail combinées,
                            expérience qui a été le moteur de la création de notre entreprise.

                            Au cours de notre parcours professionnel, nous avons été sensibilisés à l’importance d’apporter un soutien complet à nos clients. Nous avons
                            constaté que pour répondre de manière optimale à leurs besoins, il est impératif de collaborer étroitement avec eux, en prenant le temps de comprendre et
                            d’analyser leurs besoins et leurs attentes. Dans cette optique, nous considérons que l’établissement d’une relation de confiance est fondamental.
                        </p>
                    </div>
                <div>
                    <h1 className="text-center text-2xl pt-10">Nos convictions</h1>
                    <div className="w-3/4 flex flex-col md:flex-row justify-center my-auto m-auto">
                    <p className="my-auto w-1/2 text-justify">
                        Nous sommes convaincus que l’informatique d’entreprise doit être abordée d’une manière différente. Nous refusons de suivre le modèle traditionnel de vente pure
                        et simple de produits ou services génériques.
                        Au contraire, nous sommes animés par la volonté de fournir des solutions sur mesure, en prenant en compte les besoins spécifiques de chaque client.
                        Nous croyons fermement à l’importance de l’information et de la compréhension mutuelle. Nous nous engageons à expliquer clairement les différentes options disponibles,
                        en évaluant objectivement les avantages et les inconvénients de chaque choix.
                        Notre objectif est de vous accompagner dans votre prise de décision, en vous conseillant de manière éclairée et en vous aidant à comprendre les implications techniques.
                    </p>
                        <Player className="md:hidden"
                                autoplay
                                loop
                                src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                                style={{ height: '200px', width: '200px' }}>
                        </Player>
                        <Player className=""
                                autoplay
                                loop
                                src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                                style={{ height: '400px', width: '400px' }}>
                        </Player>
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-2xl pt-10">Nos valeurs</h1>
                    <div className="w-3/4 flex flex-col md:flex-row justify-center my-auto m-auto">
                        <Player className="md:hidden"
                                autoplay
                                loop
                                src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                                style={{ height: '200px', width: '200px' }}>
                        </Player>
                        <Player className=""
                                autoplay
                                loop
                                src='https://assets8.lottiefiles.com/packages/lf20_itbfc45d.json'
                                style={{ height: '400px', width: '400px' }}>
                        </Player>
                        <p className="my-auto w-1/2 text-justify">
                            Chez Azzu informatique, nous sommes guidés par des valeurs fortes. L’honnêteté, l’intégrité et la transparence sont au cœur de notre approche.
                            Nous croyons en l’établissement de relations de confiance durables avec nos clients, en comprenant leurs besoins spécifiques et en fournissant des solutions
                            adaptées. Notre engagement envers la qualité se reflète dans chaque aspect de notre travail. Nous accordons une attention minutieuse aux détails et nous nous
                            efforçons de dépasser les attentes de nos clients.
                            Nous sommes déterminés à créer des partenariats solides et à long terme, en plaçant la satisfaction du client au centre de notre démarche.</p>
                    </div>

                </div>
                <div className="m-auto flex flex-row justify-center p-20">
                    <button className="inset-x-8 bottom-4 px-10 py-6 m-auto text-white font-bold hover:bg-yellow-200">Contactez nous ! </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Univers
