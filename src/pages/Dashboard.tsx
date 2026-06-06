import FinanceCard from "../components/FinanceCard";
import TransactionsTable from "../components/TransactionsTable";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FinanceCard title="Total Balance" amount={12500} type="balance" />
        <FinanceCard title="Income" amount={8000} type="income" />
        <FinanceCard title="Expenses" amount={3500} type="expense" />
      </div>

      {/* Table */}
      <TransactionsTable />
    </div>
  );
};

export default Dashboard;