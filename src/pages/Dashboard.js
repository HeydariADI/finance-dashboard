import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FinanceCard from "../components/FinanceCard";
import TransactionsTable from "../components/TransactionsTable";
const Dashboard = () => {
    return (_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Dashboard" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsx(FinanceCard, { title: "Total Balance", amount: 12500, type: "balance" }), _jsx(FinanceCard, { title: "Income", amount: 8000, type: "income" }), _jsx(FinanceCard, { title: "Expenses", amount: 3500, type: "expense" })] }), _jsx(TransactionsTable, {})] }));
};
export default Dashboard;
