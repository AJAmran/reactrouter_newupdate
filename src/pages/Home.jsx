import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to the <span className="text-yellow-300">Home Page</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore the beauty of modern web design. Dive into our features and
          enjoy a seamless user experience.
        </p>
        <button className="px-6 py-3 bg-yellow-300 text-blue-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:shadow-xl transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
