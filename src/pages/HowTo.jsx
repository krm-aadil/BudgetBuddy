import React from "react";
import Navigation from "../components/Navigation";
// import moneyGrowthImage from "../path-to-your-image.png";

const HowTo = () => {
    return (
        <div className="bg-blue-100 min-h-screen">
            <Navigation />

            <div className="container mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-blue-800 mb-6">
                    How To Use Budget Buddy
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Step 1: Create a Budget
                    </h2>
                    <p className="text-gray-600">
                        Start by creating a budget for your expenses. Click the &quot;Create Budget&quot; button and enter the budget name and amount.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4">
                        Step 2: Add Expenses
                    </h2>
                    <p className="text-gray-600">
                        Add your expenses by clicking the "Add Expense" button. Enter the expense details, including the name and amount.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4">
                        Step 3: Real-Time Updates
                    </h2>
                    <p className="text-gray-600">
                        Budget Buddy will automatically deduct your expenses from the budget, providing real-time updates. You can view your remaining budget at any time.
                    </p>

                    <div className="mt-8">
                        <img src="https://static.vecteezy.com/system/resources/previews/026/419/546/original/3d-icon-of-a-money-growth-finance-illustration-png.png" alt="Money Growth" className="w-32 h-32 mx-auto" />
                        <p className="text-center text-gray-600 mt-2">
                            Track your financial growth with Budget Buddy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowTo;
