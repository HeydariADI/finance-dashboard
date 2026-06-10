import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import StatCard from "../components/mobile/StatCard";
import TransactionList from "../components/mobile/TransactionList";
import AddTransactionModal from "../components/mobile/AddTransactionModal";
export default function MobileLayout() {
    const [transactions, setTransactions] = useState([
        { id: 1, title: "Salary", amount: 2000 },
        { id: 2, title: "Food", amount: -50 },
    ]);
    const [open, setOpen] = useState(false);
    const addTransaction = (data) => {
        setTransactions([
            ...transactions,
            { ...data, id: Date.now() },
        ]);
    };
    return (_jsxs("div", { className: "p-4 space-y-4", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Finance Dashboard" }), _jsx(StatCard, { title: "Income", amount: "$4,250" }), _jsx(StatCard, { title: "Expenses", amount: "$1,850" }), _jsx(StatCard, { title: "Profit", amount: "$2,400" }), _jsx("button", { onClick: () => setOpen(true), className: "bg-blue-500 text-white px-3 py-2 rounded", children: "+ Add Transaction" }), _jsx(TransactionList, {}), open && (_jsx(AddTransactionModal, { onClose: () => setOpen(false), onAdd: addTransaction }))] }));
}
