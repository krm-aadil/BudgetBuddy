import React, { useState } from "react";
import AddBudgetModal from "../components/AddBudgetModal";
import AddExpenseModal from "../components/AddExpenseModal";
import ViewExpensesModal from "../components/ViewExpensesModal";
import BudgetCard from "../components/BudgetCard";
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard";
import TotalBudgetCard from "../components/TotalBudgetCard";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navigation from "../components/Tracker_Navigartion";
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";
import Tracker_Navigation from "../components/Tracker_Navigartion";
import { Bounce } from "react-reveal";

const Tracker = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login"); // Redirect to the login page after logout
  };

  const [speechSynthesisActive, setSpeechSynthesisActive] = useState(false);

  const toggleSpeechSynthesis = () => {
    if (!speechSynthesisActive) {
      // Start speech synthesis
      const contentContainer = document.querySelector(".content-container");
      if (contentContainer) {
        const textToRead = contentContainer.innerText;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        speechSynthesis.speak(utterance);
      }
    } else {
      // Stop speech synthesis
      speechSynthesis.cancel();
    }
    setSpeechSynthesisActive(!speechSynthesisActive);
  };

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <>
      <Tracker_Navigation />

      {/* Create a container for the content you want to be read */}
      <div className="content-container">
        <Container className="my-1 ">
          <Stack direction="horizontal" gap="2" className="mb-2   ">
            <Button
              variant="primary"
              onClick={() => setShowAddBudgetModal(true)}
              className="font-medium px-5 py-2 rounded-xl border border-gray-500
               text-white hover:bg-blue-100 focus:outline-none focus:ring-2
                focus:ring-blue-500  ml-2 mt-3 bg-gradient-to-r from-gray-900 to-gray-800 "
            >
              Add Budget
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => openAddExpenseModal()}
              className="px-4 py-2  rounded-2xl border border-gray-500 text-white hover:bg-blue-100
               focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 bg-gradient-to-r from-gray-900 to-gray-800" // Added ml-2 for left margin
            >
              Add Expense
            </Button>

          </Stack>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Bounce left>
            {budgets.map((budget) => {
              const amount = getBudgetExpenses(budget.id).reduce(
                (total, expense) => total + expense.amount,
                0
              );
              return (

                
                <BudgetCard
                  key={budget.id}
                  name={budget.name}
                  amount={amount}
                  max={budget.max}
                  onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                  onViewExpensesClick={() =>
                    setViewExpensesModalBudgetId(budget.id)
                  }
                />


              );
            })}
            <UncategorizedBudgetCard
              onAddExpenseClick={() => openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)}
              onViewExpensesClick={() =>
                setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
              }
            />
            <TotalBudgetCard />
            </Bounce>
          </div>
          
        </Container>
      </div>

      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />

      <Button
        variant="outline-primary"
        onClick={toggleSpeechSynthesis}
        className={`px-4 py-2 rounded-md border ${
          speechSynthesisActive ? "border-blue-900 text-blue-900" : "border-gray-900 text-gray-900"
        } hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-500 mr-2 mb-2 absolute 
        bottom-0 right-0 rounded-xl border-2`}
      >
        {speechSynthesisActive ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
      </Button>
    </>
  );
};

export default Tracker;
