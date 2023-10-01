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
    <div className={`rounded-lg shadow-md p-4 ${classNames.join(" ")}`}>
      <div className="mb-3">
        <div className="font-medium text-lg mb-1">{name}</div>
        <div className="flex items-center">
          <div className="font-semibold">{currencyFormatter.format(amount)}</div>
          {max && (
            <div className="text-gray-500 text-sm ml-1">
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
            className="px-4 py-2 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Expense
          </button>
          <button
            onClick={onViewExpensesClick}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            View Expenses
          </button>
        </div>
      )}
    </div>
  );
}
