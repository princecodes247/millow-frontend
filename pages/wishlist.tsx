import Header from "@/components/Header";
import Head from "next/head";
import React from "react";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import WishCard from "@/components/WishCard";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Millow - Wishlist</title>
        <meta name="description" content="Millow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className="p-8 md:p-20">
          <h1 className="text-3xl mb-4 font-semibold">Wishlist</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {
              React.Children.toArray(
                [0,0,0,0,0,0].map(wish => <WishCard/>)
              )
            }
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
