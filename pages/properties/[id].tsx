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
        <section className="p-8 md:p-20">
          <div className="flex items-center pb-4 justify-between">
            <div>
            <h1 className="text-4xl font-heading font-semibold ">Lagoon Penthosue</h1>
            <p>Seller</p>
            </div>
            <div className="py-4 flex gap-4">
              <button className="">Share</button>
              <button className="">Save</button>
            </div>
          </div>
          <div className="w-full rounded bg-black p-3 aspect-[5/2]"></div>
          <div className="border-b p-4">
          
            <h3 className="text-2xl font-heading mt-4">$ 14,0000</h3>
            <button className="btn btn-primary px-6 my-4">Purchase</button>
            <div className="text-sm flex gap-2">
            <p>4 bedrooms</p>
            </div>
          </div>
          <div className="py-4">
            <p>Description</p>
          </div>
          <p className="text-sm text-gray-700">Seller</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
