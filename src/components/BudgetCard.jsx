import { currencyFormatter } from "../utils";

export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) {
  const getProgressBarVariant = (amount, max) => {
    const ratio = amount / max;
    if (ratio < 0.5) return "bg-blue-500";
    if (ratio < 0.7) return "bg-yellow-500";
    return "bg-red-500";
  };

  const progressBarVariant = getProgressBarVariant(amount, max);

  const classNames = [];
  if (gray) {
    classNames.push("bg-gray-200");
  }

  const progressBarWidth = max ? Math.min((amount / max) * 100, 100) : 0; // Limit the width to 100%

  return (
    <div className={`bg-gradient-to-r from-white to-blue-200 ml-1 mr-1 rounded-lg shadow-md 
    border-2 border-blue-200 p-4 ${classNames.join(" ")}`}>
      <div className="mb-3">
        <div className="text-gray-900 font-bold text-lg mb-1">{name}</div>
        <div className="flex items-center">
          <div className="text-gray-900 font-semibold">{currencyFormatter.format(amount)}</div>
          {max && (
            <div className="text-gray-600 text-sm ml-1">
              / {currencyFormatter.format(max)}
            </div>
          )}
        </div>
      </div>
      {max && (
        <div className="mb-4">
          <div className="bg-gray-300 rounded-full h-4">
            <div
              className={`${progressBarVariant} rounded-full h-4`}
              style={{ width: `${progressBarWidth}%` }}
            ></div>
          </div>
        </div>
      )}
      {!hideButtons && (
        <div className="flex justify-between">
          <button
            onClick={onAddExpenseClick}
            className="px-4 py-2 rounded-xl border bg-gradient-to-b from-gray-900 to-gray-800 border-gray-900 text-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Expense
          </button>
          <button
            onClick={onViewExpensesClick}
            className="px-4 py-2 rounded-xl bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            View Expenses
          </button>
        </div>
      )}
    </div>
  );
}
