import { useRef } from "react";
import { useBudgets } from "../contexts/BudgetsContext";

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    handleClose();
  }

  return (
    <div className={`fixed inset-0 ${show ? "" : "hidden"} overflow-y-auto`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-white opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 relative">
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
          <form onSubmit={handleSubmit}>
            <div>
              <div className="text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  New Budget
                </h3>
              </div>
              <div className="mt-5">
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    required
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="max"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Maximum Spending
                  </label>
                  <input
                    ref={maxRef}
                    type="number"
                    id="max"
                    required
                    min="0"
                    step="0.01"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  bg-gradient-to-b from-blue-900 to-blue-800 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
