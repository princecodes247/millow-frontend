import Header from "@/components/Header";
import Head from "next/head";
import React from "react";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import heroBG from "@/assets/heroBG.webp";

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
        <section className="hero_bg relative min-h-[400px] flex h-[40vh] md:h-[57vh] flex-col justify-end p-8 md:p-20">
          <div className="grayscale absolute overflow-hidden opacity-50 inset-0 flex justify-end">
          <img src={heroBG.src} className="h-full scale-[1.3] md:scale-[1.7] relative aspect[1/2] min-w-[800px] object-contain" alt="" />
          </div>
          <div className="relative z-10">
          <div className="mx-auto mt-12 flex max-w-[600px] flex-col justify-center gap-2 md:flex-row md:px-6">
            <input
              type="text"
              placeholder="Search here"
              className="w-full p-3 bg-gray-200 border-none rounded-lg input"
            />
            <button className="btn-primary btn">Search</button>
          </div>
          </div>
        </section>
        <section className="p-8 py-12 md:p-20">
          {/* <h2 className="text-3xl font-semibold text-center text-black font-heading md:text-5xl">
            Find A Property
          </h2> */}
          <div className="mb-6 flex justify-between p-6">
            <p>Search Results</p>
          </div>
       
          <div className="grid grid-cols-3 gap-6 py-8 md:flex-row">
            {React.Children.toArray(
              [0, 0, 0,0,0,0,0,0,0,0,,0,0,0,0].map((property) => <PropertyCard />),
            )}
          </div>
          <div className="flex items-center justify-center pt-8">
            {/* <button className="btn-primary btn">See more properties</button> */}
          </div>
        </section>
      
        <section className="p-8 py-12 md:p-20">
          <h2 className="mb-8 text-3xl font-bold text-black font-heading md:mb-12 md:text-5xl">
            FAQs
          </h2>
          <ul className="flex flex-col gap-2 md:flex-row">
            <li className="mb-8">
              <h4 className="mb-4 text-xl">Who can invest?</h4>
              <p>Anyone! Millow welcomes investors from all walks of life.</p>
            </li>
            <li className="mb-8">
              <h4 className="mb-4 text-xl">Is it secure?</h4>
              <p>
                Absolutely! We prioritize the security of your assets and data.
              </p>
            </li>
            <li className="mb-8">
              <h4 className="mb-4 text-xl">Any hidden fees?</h4>
              <p>
                Not a chance! We&apos;re dedicated to transparency and fairness
                in our pricing.
              </p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
