import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our website! We are dedicated to providing the best
          solutions for your needs. Our team is focused on delivering high
          quality services to ensure your satisfaction. We believe in innovation,
          customer-centric approach, and continuous improvement. 
        </p>
        <div className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/400"
            alt="About Us"
            className="rounded-lg shadow-xl"
          />
        </div>
        <p className="text-lg text-gray-700 mt-6">
          Our mission is to bring cutting-edge technology and a modern approach
          to all our projects. We strive to exceed expectations and build
          meaningful relationships with our clients.
        </p>
      </div>
    </div>
  );
};

export default About;
