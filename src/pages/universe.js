
import * as React from 'react';
import {Header} from "../../Components/Header";
import Head from "next/head";
import {Footer} from "../../Components/Footer";

function Universe() {
    return (
        <div className="body">

            <Head>
                <title>Azzu informatique - Notre univers</title>
            </Head>
            <Header/>
            <div className="h-screen">

            </div>
            <Footer/>
        </div>
    );
}
export default Universe
