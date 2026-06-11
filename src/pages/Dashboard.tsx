import { useState } from "react";
import StatCard from "../components/mobile/StatCard";
import TransactionList from "../components/mobile/TransactionList";
import AddTransactionModal from "../components/mobile/AddTransactionModal";

type Transaction = {
  id: number;
  title: string;
  amount: number;
};

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, title: "Salary", amount: 2000 },
    { id: 2, title: "Food", amount: -50 },
    { id: 3, title: "Freelance", amount: 500 },
  ]);

  const [open, setOpen] = useState(false);

  // ✅ safer state update
  const addTransaction = (data: { title: string; amount: number }) => {
    setTransactions((prev) => [
      ...prev,
      { ...data, id: Date.now() },
    ]);
  };

  // 📊 calculations (optimized)
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const profit = income - expense;

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center">

      {/* container */}
      <div className="w-full max-w-md md:max-w-3xl p-4 pb-24 space-y-5">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">
            Hello, Adi 👋
          </h1>
          <p className="text-gray-500 text-sm">
            Welcome back to your finance dashboard
          </p>
        </div>

        {/* Balance Card */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-md">
          <p className="text-gray-400 text-sm">
            Total Balance
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ${profit.toLocaleString()}
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <StatCard title="Income" amount={`$${income}`} />
          <StatCard title="Expense" amount={`$${expense}`} />
          <StatCard title="Profit" amount={`$${profit}`} />
        </div>

        {/* Action Button */}
        <button
          onClick={() => setOpen(true)}
          className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            font-medium
            hover:bg-blue-700
            active:scale-[0.98]
            transition
          "
        >
          + Add Transaction
        </button>

        {/* Transactions */}
        <TransactionList transactions={transactions} />

        {/* Modal */}
        {open && (
          <AddTransactionModal
            onClose={() => setOpen(false)}
            onAdd={addTransaction}
          />
        )}
      </div>
    </div>
  );
}