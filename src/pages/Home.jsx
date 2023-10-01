import React from "react";
import Navigation from "../components/Navigation";



const Home = () => {  
    return (
        <>
        <Navigation />
        <body className="bg-gray-100">


<header className="bg-white shadow-md">
    <div className="flex justify-between items-center py-2 px-5 border-b-2 border-gray-200">
        <div className="flex items-center">
           
            <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo de la empresa" className="w-28 h-12 ml-6">
            </img>
        </div>

        
        <div className="flex items-center space-x-2">
            <a href="#" className="px-2 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold rounded-lg text-sm">Registro</a>
            <a href="#" className="px-2 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold rounded-lg text-sm">Contáctame</a>
        </div>
    </div>
</header>


<div className="bg-white">
    <div className="flex justify-between items-center py-28 px-5">
        <div className="w-1/2">
            <h2 className="text-5xl font-semibold text-gray-800">Fideliza Más</h2>
            <h3 className="text-xl font-semibold text-gray-600 mt-4">¡Únete a nuestro programa de lealtad y obtén increíbles recompensas!</h3>
            <p className="text-gray-600 mt-4">Nuestro programa de fidelización está diseñado para recompensar a nuestros clientes más fieles. Obtén puntos con cada compra y canjéalos por descuentos exclusivos, regalos especiales y experiencias únicas.</p>
        </div>
        <div className="w-1/2">
            <img src="https://www.emprenderconactitud.com/img/fidelizamas.png" alt="Imagen relacionada con el programa de fidelización" className="w-full h-auto"> 
            </img>
        </div>
    </div>
</div>

<div className="bg-white grid grid-cols-4 gap-10 p-10 mt-10">

</div>


<div className="bg-white p-10 mt-10">
  <h2 className="text-center text-3xl">Nuestra Misión</h2>
  <p className="mt-4">En FidelizaMás, nuestra misión es transformar la fidelización, conectando a empresas y clientes a través de emocionantes programas de recompensas basados en tokens...</p>
</div>


<div className="bg-gradient-to-r from-cyan-400 to-cyan-600 p-10 rounded-lg mt-10">
  <h2 className="text-white text-3xl text-center">Únete a FidelizaMás</h2>
  <p className="text-white mt-2 text-center">Descubre cómo podemos transformar la fidelización en una ventaja competitiva para tu empresa.</p>
  <div className="flex justify-center">
    <button className="mt-4 bg-white text-cyan-600 rounded-lg px-4 py-2">Saber más</button>
  </div>
</div>


<div className="bg-white p-10 mt-10">
  <h2 className="text-lg font-bold">Lo que dicen nuestros clientes</h2>

</div>


<div className="bg-white p-10 mt-10">
  <h2 className="text-lg font-bold">Con quienes trabajamos</h2>

</div>


<footer className="bg-gray-800 text-white p-4 mt-10">
  <p>Derechos reservados © FidelizaMás</p>
</footer>

</body>
 
        </>
    );
    };

export default Home;