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
        <section className="hero_bg flex h-[70vh] flex-col items-center justify-end p-8 md:h-[97vh] md:p-20">
          <div>
            <h1 className="mb-4 font-heading text-3xl font-semibold text-[#f8ffe5] md:text-7xl">
              Unlock real estate investments with Millow.
            </h1>
            <button className="px-8 btn-accent btn">Get Started</button>
          </div>
        </section>
        <section className="p-8 py-12 md:p-20">
          <h2 className="text-3xl font-semibold text-center text-black font-heading md:text-5xl">
            Find A Property
          </h2>
          <div className="mx-auto mt-12 flex max-w-[600px] flex-col justify-center gap-2 md:flex-row md:px-6">
            <input
              type="text"
              placeholder="Search here"
              className="w-full p-3 bg-gray-200 border-none rounded-lg input"
            />
            <button className="btn-primary btn">Search</button>
          </div>
          <div className="flex flex-col items-center gap-6 py-8 md:flex-row">
            {React.Children.toArray(
              [0, 0, 0].map((property) => <PropertyCard />),
            )}
          </div>
          <div className="flex items-center justify-center pt-8">
            <button className="btn-primary btn">See more properties</button>
          </div>
        </section>
        <section className="p-8 py-12 md:p-20">
          <h2 className="text-3xl font-bold text-black font-heading md:text-5xl">
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
          <h2 className=" mx-auto max-w-[800px] text-center font-heading text-3xl font-bold text-black md:text-4xl">
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
            <h4 className="text-3xl font-semibold text-black font-heading md:text-4xl">
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
            <h4 className="text-3xl font-semibold text-black font-heading md:text-4xl">
              Invest, trade, and build your wealth with ease.
            </h4>
            <p>
              Keep track of your investments and manage your portfolio on
              Millow&apos;s intuitive platform.
            </p>
          </div>
        </SlidingSection>
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
