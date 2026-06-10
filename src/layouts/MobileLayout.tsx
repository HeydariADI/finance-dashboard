import StatCard from "../components/mobile/StatCard";
import TransactionList from "../components/mobile/TransactionList";

export default function MobileDashboard() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">
        Finance Dashboard
      </h1>

      <StatCard title="Income" amount="$4,250" />
      <StatCard title="Expenses" amount="$1,850" />
      <StatCard title="Profit" amount="$2,400" />

      <TransactionList />
    </div>
  );
}