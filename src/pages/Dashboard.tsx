import { useState } from "react";
import StatCard from "../components/mobile/StatCard";
import TransactionList from "../components/mobile/TransactionList";
import AddTransactionModal from "../components/mobile/AddTransactionModal";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Salary", amount: 2000 },
    { id: 2, title: "Food", amount: -50 },
  ]);

  const [open, setOpen] = useState(false);

  const addTransaction = (data: any) => {
    setTransactions([
      ...transactions,
      { ...data, id: Date.now() },
    ]);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">
        Finance Dashboard
      </h1>

      <StatCard title="Income" amount="$4,250" />
      <StatCard title="Expenses" amount="$1,850" />
      <StatCard title="Profit" amount="$2,400" />

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-3 py-2 rounded"
      >
        + Add Transaction
      </button>

      <TransactionList />

      {open && (
        <AddTransactionModal
          onClose={() => setOpen(false)}
          onAdd={addTransaction}
        />
      )}
    </div>
  );
}