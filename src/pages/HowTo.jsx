import React from "react";
import Navigation from "../components/Navigation";
// import moneyGrowthImage from "../path-to-your-image.png";

const HowTo = () => {
    return (
        <div className=" min-h-screen">
            <Navigation />

            <div className="container mx-auto py-12 px-4  ">
                
                <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    HOW TO: BUDGET BUDDY
                </h1>
                
                    </div>
                    <div className="rounded-xl max-h-96 md:h-screen bg-gradient-to-t from-blue-200 to-white">
                        <img className="w-screen h-screen object-contain object-top" 
                        src="https://github.com/krm-aadil/test/blob/main/3d-render-hand-dropping-golden-coins-white_107791-17736-removebg-preview.png?raw=true" alt="">
                        </img>
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
