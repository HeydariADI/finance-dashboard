import StatCard from "../../components/mobile/StatCard";
import TransactionList from "../../components/mobile/TransactionList";

type Transaction = {
  id: number;
  title: string;
  amount: number;
};

type Props = {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
  income: number;
  expense: number;
  profit: number;
};

export default function DesktopDashboard({
  transactions,
  deleteTransaction,
  income,
  expense,
  profit,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-5">
        <h2 className="text-xl font-bold mb-8">
          Finance App
        </h2>

        <nav className="space-y-4 text-gray-600">
          <p className="font-semibold text-blue-600">Dashboard</p>
          <p>Transactions</p>
          <p>Analytics</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard Overview
          </h1>
          <p className="text-gray-500">
            Financial analytics & overview
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <StatCard title="Income" amount={`$${income}`} />
          <StatCard title="Expense" amount={`$${expense}`} />
          <StatCard title="Profit" amount={`$${profit}`} />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-6">

          {/* Transactions */}
          <div className="col-span-2">
            <TransactionList
              transactions={transactions}
              onDelete={deleteTransaction}
            />
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">
              Analytics
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>📈 Income trends</p>
              <p>💰 Expense tracking</p>
              <p>📊 Monthly report</p>
            </div>

            <div className="mt-6 bg-slate-100 p-4 rounded-xl text-center text-gray-400">
              Chart coming soon 📊
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}