import React from "react";
import Navigation from "../components/Navigation";

const About = () => {  
    return (
        <>
        <Navigation />
        <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="max-h-96 md:h-screen">
        <img className="w-screen h-screen object-contain object-top" 
        src="https://static.vecteezy.com/system/resources/previews/026/419/546/original/3d-icon-of-a-money-growth-finance-illustration-png.png" alt="">
        </img>
      </div>
      <div className="flex bg-gray-100 p-10">
        <div className="mb-auto mt-auto max-w-lg">
          <h1 className="text-3xl uppercase">Budget-Buddy</h1>
          <p className="font-semibold mb-5">Fintech</p>
          <p>Budget Buddy is a cutting-edge Progressive 
            Web App (PWA) designed to empower individuals in managing 
            their finances efficiently. Crafted with the latest technologies 
            including React, Tailwind CSS, Vite, and Firebase, this fintech PWA 
            provides a seamless and user-friendly experience for tracking your daily 
            budget. Whether you're monitoring expenses, setting savings goals, or analyzing 
            your financial habits, Budget Buddy is your trusted companion on the path to financial 
            success. Stay in control of your money and make informed financial decisions with ease, thanks to the intuitive features and modern design of Budget Buddy.</p>
          <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">Get Started</button>
        </div>
      </div>
    </div>
  </div>
    
        </>
    );
    };

export default About;