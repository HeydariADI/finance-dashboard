import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const icons = {
    income: "💰",
    expense: "💸",
    balance: "📊",
};
const colors = {
    income: "text-green-600",
    expense: "text-red-500",
    balance: "text-blue-600",
};
const FinanceCard = ({ title, amount, type }) => {
    return (_jsxs("div", { className: "bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-gray-500 text-sm", children: title }), _jsx("span", { className: "text-xl", children: icons[type] })] }), _jsx("p", { className: `text-2xl font-bold mt-3 ${colors[type]}`, children: amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                }) })] }));
};
export default FinanceCard;
