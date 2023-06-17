import Header from "@/components/Header";
import SlidingSection from "@/components/SlidingSection";
import Head from "next/head";
import React from "react";
import img1 from "@/assets/img1.webp";
import img2 from "@/assets/img2.webp";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Millow</title>
        <meta name="description" content="Millow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      
      </main>
      <Footer />
    </div>
  );
}
