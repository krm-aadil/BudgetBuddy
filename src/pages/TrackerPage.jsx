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
import Navigation from "../components/Navigation";
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Tracker = () => {

  const [speechSynthesisActive, setSpeechSynthesisActive] = useState(false);
  const toggleSpeechSynthesis = () => {
    if (!speechSynthesisActive) {
      // Start speech synthesis
      const textToRead = document.body.innerText; // Read the entire content of the page
      const utterance = new SpeechSynthesisUtterance(textToRead);
      speechSynthesis.speak(utterance);
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
    <Navigation />
    

      <body className="bg-gradient-to-t from-white to-white -mt-4">

        
      <Container className="my-4 ">
        <Stack direction="horizontal" gap="2" className="mb-2   ">
          
          {/* <h1 className="me-auto text-2xl font-semibold px-2 text-Black">Budgets</h1> */}
         
          <Button
            variant="primary"
            onClick={() => setShowAddBudgetModal(true)}
            className="font-medium px-5 py-2 rounded-xl border border-gray-500
             text-white hover:bg-blue-100 focus:outline-none focus:ring-2
              focus:ring-blue-500  ml-2 mt-3 bg-gradient-to-b from-gray-400 to-gray-800 "
          >
            Add Budget
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => openAddExpenseModal()}
            className="px-4 py-2  rounded-2xl border border-gray-500 text-white hover:bg-blue-100
             focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 bg-gradient-to-b from-gray-400 to-gray-800" // Added ml-2 for left margin
          >
            Add Expense
          </Button>
        

        </Stack>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>
      </Container>
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
      </body>

  <Button
    variant="outline-primary"
    onClick={toggleSpeechSynthesis}
    className={`px-4 py-2 rounded-md border ${
      speechSynthesisActive ? "border-red-500 text-red-500" : "border-blue-500 text-blue-500"
    } hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-500 mr-2 mb-2 absolute 
    bottom-0 right-0 rounded-xl border-2`}>
    {speechSynthesisActive ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
  </Button>

    </>
  );
};

export default Tracker;
