import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { transactions } from "../../services/transactions";
export default function TransactionList() {
    return (_jsxs("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [_jsx("h2", { className: "font-bold mb-3", children: "Transactions" }), _jsx("div", { className: "space-y-3", children: transactions.map((t) => (_jsxs("div", { className: "flex justify-between border-b pb-2", children: [_jsx("span", { children: t.title }), _jsxs("span", { className: t.type === "income"
                                ? "text-green-500"
                                : "text-red-500", children: [t.amount, "$"] })] }, t.id))) })] }));
}
