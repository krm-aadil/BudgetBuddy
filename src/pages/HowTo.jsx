import React from "react";
import Navigation from "../components/Navigation";
// import moneyGrowthImage from "../path-to-your-image.png";

const HowTo = () => {
    return (
        <div className=" min-h-screen">
            <Navigation />

            <div className="container mx-auto py-12 px-4  ">
                
            <div className="bg-gradient-to-r from-blue-200 to-white  rounded-xl p-">
            <div className="flex justify-between items-center py-4 px-5 bg-gradient-to-r from-blue-200 to-white rounded-2xl ">
            <div className="w-1/2">
            <h2 className="text-6xl font-bold text-gray-800">HOW</h2>
            <h2 className="text-4xl font-bold text-gray-800">TO USE</h2>
            {/* <h3 className="text-center text-xl font-semibold text-gray-600 mt-4">Your Pocket Budget Tracker!</h3> */}

             </div>
             <div className="w-1/2">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-thinking-something-5380114-4499712.png" alt="Imagen relacionada con el programa de fidelización" className="w-full h-auto"> 
            </img>
             </div>
            </div>
            </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                        
                    <div className="rounded-2xl bg-gradient-to-b from-blue-100 to-blue-400 p-10 mt-10">
                        <h2 className="text-center text-2xl font-bold text-gray-800">1.Create a Budget</h2>
                        <p className="mt-4 text-center text-gray-800">&ldquo;Start by creating a budget for your expenses. Click the &quot;Create 
                            Budget&quot; button and enter the budget name and amount..&rdquo;
                        </p>
                    </div>    
                    <div className="rounded-2xl bg-gradient-to-b from-blue-100 to-blue-400 p-10 mt-10">
                        <h2 className="text-center text-2xl font-bold text-gray-800">2.Add Expenses</h2>
                        <p className="mt-4 text-center text-gray-800">&ldquo;Add your expenses by clicking the &quot;Add Expense&quot; button. Enter the expense details, including the name and amount.&rdquo;</p>
                    </div> 
                      <div className="rounded-2xl bg-gradient-to-b from-blue-100 to-blue-400 p-10 mt-10">
                        <h2 className="text-center text-2xl font-bold text-gray-800">3.Real-Time Updates</h2>
                        <p className="mt-4 text-center text-gray-800">&ldquo;Budget Buddy will automatically deduct your expenses from the budget, providing real-time updates. You can view your remaining budget at any time..&rdquo;</p>
                    </div> 
                </div>

                   
                                    
            </div>
        </div>
    );
};

export default HowTo;
