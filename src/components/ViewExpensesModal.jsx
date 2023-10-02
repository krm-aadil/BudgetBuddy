import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext";
import { currencyFormatter } from "../utils";

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  return (
    <div className={`fixed inset-0 ${budgetId != null ? "" : "hidden"} overflow-y-auto `}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center ">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-white opacity-50"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
       
        <div className="inline-block align-bottom bg-white rounded-lg px-6 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
       
        <button
            onClick={handleClose}
            className="absolute top-0 right-0 p-2 m-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
          >
            {/* Close Icon (You can replace this with your own close icon) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M3.146 3.146a.5.5 0 01.708 0L8 7.293l4.146-4.147a.5.5 0 01.708.708L8.707 8l4.147 4.146a.5.5 0 01-.708.708L8 8.707l-4.146 4.147a.5.5 0 01-.708-.708L7.293 8 3.146 3.854a.5.5 0 010-.708z" />
            </svg>
          </button>
          
          
          <div className="mb-5 px-10">
            <div className="font-medium text-lg mb-1">
              Expenses - {budget?.name}
            </div>
            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
              <button
                onClick={() => {
                  deleteBudget(budget);
                  handleClose();
                }}
                className="px-2 py-1 text-red-500 border border-red-500 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            )}
          </div>
          <div className="mb-5">
            {expenses.map((expense) => (
              <div
                className="flex items-center justify-between space-x-2"
                key={expense.id}
              >
                <div className="flex-grow text-lg">{expense.description}</div>
                <div className="text-xl">
                  {currencyFormatter.format(expense.amount)}
                </div>
                <button
                  onClick={() => deleteExpense(expense)}
                  className="px-2 py-1 text-red-500 border border-red-500 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
