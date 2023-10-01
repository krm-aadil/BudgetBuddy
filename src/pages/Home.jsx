import React from "react";
import Navigation from "../components/Navigation";
import { useState } from "react";





const Home = () => {  

  const [shareURL] = useState("https://accidental-wound.surge.sh/");
  const shareBudgetBuddy = async () => {
    try {
      await navigator.share({
        title: "Budget Buddy",
        text: "Check out Budget Buddy - Your Pocket Budget Tracker!",
        url: shareURL,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };



    return (
        <>
        <Navigation />
        <body className="bg-gray-100">


<header className="bg-gradient-to-r from-gray-100 to-gray-400 shadow-md">
    <div className="flex justify-between items-center py-2 px-5 border-b-2 border-gray-200">
        <div className="flex items-center">
           
            {/* <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo de la empresa" className="w-28 h-12 ml-6">
            </img> */}
            <h3 className="font-semibold font black">Get Started now !!!</h3>
        </div>

        
        <div className="flex items-center space-x-2 ">
            <a href="/login" className="px-2 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg text-sm">Login</a>
            <a href="/signup" className="px-2 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg text-sm">Register</a>
        </div>
    </div>
</header>


<div className="bg-white">
    <div className="flex justify-between items-center py-28 px-5 bg-gradient-to-r from-gray-100 to-gray-400 ">
        <div className="w-1/2">
            <h2 className="text-5xl font-semibold text-gray-800">Budget Buddy</h2>
            <h3 className="text-xl font-semibold text-gray-600 mt-4">Your Pocket Budget Tracker!</h3>
            <p className="text-gray-600 mt-4">&ldquo;Take control of your finances with Budget Buddy, your daily budget tracking PWA, powered by React, Tailwind, Vite, and Firebase.&rdquo;</p>
        </div>
        <div className="w-1/2">
            <img src="https://static.vecteezy.com/system/resources/previews/026/419/542/original/3d-icon-of-a-money-finance-illustration-png.png" alt="Imagen relacionada con el programa de fidelización" className="w-full h-auto"> 
            </img>
        </div>
    </div>
</div>




<div className="bg-gradient-to-r from-gray-800 to-gray-600  p-10 mt-10">
  <h2 className="text-center text-3xl font-bold text-white">Our Misson</h2>
<p className="mt-4 text-center text-gray-100">&ldquo;Our mission at Budget Buddy is to empower individuals with the tools they need to achieve financial wellness and success.&rdquo;</p>
</div>


<div className="bg-gradient-to-r from-gray-600 to-gray-800 p-10 rounded-lg mt-10">
  <h2 className="text-white text-3xl text-center">Share Budget-Buddy With Others</h2>
  <p className="text-white mt-2 text-center">&quot;Join the financial revolution. Create your Budget Buddy account today and take the first step towards financial empowerment.&quot;</p>
  <div className="flex justify-center">
    <button onClick={shareBudgetBuddy} className="mt-4 bg-white text-gray-800 rounded-lg px-4 py-2 font-semibold">Share</button>
  </div>
</div>


{/* 
<div className="bg-white p-10 mt-10">
  <h2 className="text-lg font-bold">Lo que dicen nuestros clientes</h2>

</div>


<div className="bg-white p-10 mt-10">
  <h2 className="text-lg font-bold">Con quienes trabajamos</h2>

</div> */}


<footer className="bg-black text-white p-4 mt-10">
  <p>All Rights reserved ©aadil</p>
</footer>

</body>
 
        </>
    );
    };

export default Home;