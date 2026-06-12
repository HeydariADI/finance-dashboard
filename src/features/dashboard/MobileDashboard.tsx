import StatCard from "../../components/mobile/StatCard";
import TransactionList from "../../components/mobile/TransactionList";
import AddTransactionModal from "../../components/mobile/AddTransactionModal";

type Transaction = {
  id: number;
  title: string;
  amount: number;
};

type Props = {
  transactions: Transaction[];
  open: boolean;
  setOpen: (value: boolean) => void;
  addTransaction: (data: { title: string; amount: number }) => void;
  deleteTransaction: (id: number) => void;
  income: number;
  expense: number;
  profit: number;
};

export default function MobileDashboard({
  transactions,
  open,
  setOpen,
  addTransaction,
  deleteTransaction,
  income,
  expense,
  profit,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center">
      <div className="w-full max-w-md p-4 pb-24 space-y-5">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Hello, Adi 👋</h1>
          <p className="text-gray-500 text-sm">
            Welcome back to your finance dashboard
          </p>
        </div>

        {/* Balance */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-md">
          <p className="text-gray-400 text-sm">Total Balance</p>
          <h2 className="text-3xl font-bold mt-2">
            ${profit.toLocaleString()}
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <StatCard title="Income" amount={`$${income}`} />
          <StatCard title="Expense" amount={`$${expense}`} />
          <StatCard title="Profit" amount={`$${profit}`} />
        </div>

        {/* Add */}
        <button
          onClick={() => setOpen(true)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium active:scale-[0.98] transition"
        >
          + Add Transaction
        </button>

        {/* List */}
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
        />

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