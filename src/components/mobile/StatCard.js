import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function StatCard({ title, amount }) {
    return (_jsxs("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [_jsx("p", { className: "text-gray-500 text-sm", children: title }), _jsx("p", { className: "text-xl font-bold mt-2", children: amount })] }));
}
