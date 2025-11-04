import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4]">

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 px-6"
        style={{
          backgroundImage: "url('/house-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#b7d470] mb-4">
            Welcome to HomeWise
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-200">
            Get a quick and reliable estimate of your home’s worth in just a few clicks.  
            Choose <span className="font-semibold text-[#b7d470]">HomeWise</span> for the wisdom and confidence 
            you need when it comes to your home’s value.
          </p>

          <Link
            to="/predict"
            className="bg-[#b7d470] hover:bg-[#a1a861] text-white font-semibold px-6 py-3 rounded-full text-lg shadow-md transition"
          >
            Check Home Worth
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#4b3429] mb-12">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#4b3429] mb-3">Accurate Results</h3>
              <p className="text-gray-600">
                Our model is designed to give the most precise home value estimations.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#4b3429] mb-3">Simple Interface</h3>
              <p className="text-gray-600">
                Just enter your details and get your estimated value instantly.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#4b3429] mb-3">Trusted Platform</h3>
              <p className="text-gray-600">
                Built to help you make informed decisions about your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4b3429] text-white text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} HomeWise — Smart Home Valuation</p>
      </footer>
    </div>
  );
};

export default Home;
