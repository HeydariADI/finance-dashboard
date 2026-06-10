import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const data = [
    { id: 1, title: "Salary", amount: 5000, type: "income", date: "2026-06-01" },
    { id: 2, title: "Rent", amount: 1200, type: "expense", date: "2026-06-02" },
    { id: 3, title: "Freelance", amount: 2000, type: "income", date: "2026-06-03" },
];
const TransactionsTable = () => {
    return (_jsxs("div", { className: "bg-white p-5 rounded-xl border shadow-sm mt-6", children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: "Transactions" }), _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-left text-gray-500 border-b", children: [_jsx("th", { className: "pb-2", children: "Title" }), _jsx("th", { className: "pb-2", children: "Amount" }), _jsx("th", { className: "pb-2", children: "Type" }), _jsx("th", { className: "pb-2", children: "Date" })] }) }), _jsx("tbody", { children: data.map((item) => (_jsxs("tr", { className: "border-b last:border-none", children: [_jsx("td", { className: "py-2", children: item.title }), _jsxs("td", { className: `py-2 font-medium ${item.type === "income" ? "text-green-600" : "text-red-500"}`, children: ["$", item.amount.toLocaleString()] }), _jsx("td", { className: "py-2 capitalize", children: item.type }), _jsx("td", { className: "py-2 text-gray-500", children: item.date })] }, item.id))) })] })] }));
};
export default TransactionsTable;
