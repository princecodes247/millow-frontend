import Header from "@/components/Header";
import SlidingSection from "@/components/SlidingSection";
import Head from "next/head";
import React from "react";
import img1 from "@/assets/img1.webp";
import img2 from "@/assets/img2.webp";
import heroBG from "@/assets/heroBG.webp";
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
        <section className="hero_bg relative min-h-[500px] flex h-[70vh] md:h-[97vh] flex-col items-center justify-end p-8 md:p-20">
          <div className="grayscale absolute overflow-hidden opacity-50 inset-0 flex justify-end">
          <img src={heroBG.src} className="h-full scale-[1.3] md:scale-[1] relative aspect[1/2] min-w-[800px] object-contain" alt="" />
          </div>
          <div className="relative z-10">
            <h1 className="mb-4 font-heading text-3xl md:text-7xl font-semibold text-[#f8ffe5]">
              Unlock real estate investments with Millow.
            </h1>
            <button className="px-8 btn-accent btn">Get Started</button>
          </div>
        </section>
        <section className="p-8 py-12 md:p-20">
          <h2 className="md:text-5xl text-3xl font-semibold text-center text-black font-heading">
            Find A Property
          </h2>
          <div className="mx-auto mt-12 flex md:flex-row flex-col max-w-[600px] justify-center gap-2 md:px-6">
            <input
              type="text"
              placeholder="Search here"
              className="w-full p-3 bg-gray-200 border-none rounded-lg input"
            />
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 py-8 md:flex-row">
            {React.Children.toArray(
              [0, 0, 0].map((property) => <PropertyCard />),
            )}
          </div>
          <div className="flex items-center justify-center pt-8">
            <button className="btn-primary btn">See more properties</button>
          </div>
        </section>
        <section className="p-8 py-12 md:p-20">
          <h2 className="md:text-5xl text-3xl font-bold text-black font-heading">
            Why Choose Millow?
          </h2>
          <div className="grid md:grid-cols-2">
            {React.Children.toArray(
              [0, 0, 0, 0, 0, 0].map((reason) => (
                <div className="py-8">
                  <h4 className="text-xl">Low Capital</h4>
                  <p>Invest with as little as $20. Everyone&apos;s welcome.</p>
                </div>
              )),
            )}
          </div>
        </section>
        <section className="p-8 py-12 md:p-20">
          <h2 className=" mx-auto max-w-[800px] text-center font-heading text-3xl md:text-4xl font-bold text-black">
            Join the revolution of real estate investments today!
          </h2>
          <div className="mx-auto mt-8 flex max-w-[350px] flex-col gap-2">
            <input
              type="text"
              placeholder="Search here"
              className="p-3 bg-gray-200 border-none rounded-full input"
            />
            <button className="rounded-full btn-primary btn">Search</button>
          </div>
        </section>
        <SlidingSection image={img1.src} reverse>
          <div className="">
            <h4 className="md:text-4xl text-3xl font-semibold text-black font-heading">
              Buy your very own piece of property paradise.
            </h4>
            <p>
              Browse Millow&apos;s curated listings of tokenized properties,
              from cozy apartments to bustling marketplaces.
            </p>
          </div>
        </SlidingSection>
        <SlidingSection image={img1.src}>
          <div className="">
            <h4 className="md:text-4xl text-3xl font-semibold text-black font-heading">
              Invest, trade, and build your wealth with ease.
            </h4>
            <p>
              Keep track of your investments and manage your portfolio on
              Millow&apos;s intuitive platform.
            </p>
          </div>
        </SlidingSection>
        <section className="p-8 py-12 md:p-20">
          <h2 className="md:text-5xl text-3xl md:mb-12 mb-8 font-bold text-black font-heading">
            FAQs
          </h2>
          <ul className="flex flex-col gap-2 md:flex-row">
            <li className="mb-8">
              <h4 className="text-xl mb-4">Who can invest?</h4>
              <p>Anyone! Millow welcomes investors from all walks of life.</p>
            </li>
            <li className="mb-8">
              <h4 className="text-xl mb-4">Is it secure?</h4>
              <p>
                Absolutely! We prioritize the security of your assets and data.
              </p>
            </li>
            <li className="mb-8">
              <h4 className="text-xl mb-4">Any hidden fees?</h4>
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
