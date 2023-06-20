import Header from "@/components/Header";
import Head from "next/head";
import React from "react";
import Footer from "@/components/Footer";
import { switchToHederaNetwork } from "@/utils/switchToHederaNetwork";

export default function Faucet() {

    return (
        <div>
            <Head>
                <title>Millow - Faucet</title>
                <meta name="description" content="Millow" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="w-[100vw] h-[100vh] flex flex-col items-center justify-between">
                <Header />
                <section className="w-[100vw] h-[80vh] flex items-center justify-center">
                    <div className='w-[30rem] h-[30rem] flex flex-col items-center justify-center'>
                        <input type="text" placeholder="Your Hbar Token Address" className="w-[90%] h-[3rem] rounded-lg my-2 text-black" />
                        <input type="number" placeholder="Amount of tokens" className="w-[90%] h-[3rem] rounded-lg my-2 text-black" />
                        <button className="w-[10rem] h-[3rem] rounded-lg bg-[#2371bb] text-white my-2">Send Me Tokens!</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
