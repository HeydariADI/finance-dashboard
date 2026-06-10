import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const DashboardLayout = ({ children }) => {
    return (_jsxs("div", { className: "min-h-screen flex bg-slate-100", children: [_jsxs("aside", { className: "w-64 bg-white border-r p-4", children: [_jsx("h2", { className: "text-xl font-bold mb-6", children: "Finance App" }), _jsxs("nav", { className: "space-y-3", children: [_jsx("a", { className: "block text-gray-700 hover:text-blue-600", href: "#", children: "Dashboard" }), _jsx("a", { className: "block text-gray-700 hover:text-blue-600", href: "#", children: "Transactions" }), _jsx("a", { className: "block text-gray-700 hover:text-blue-600", href: "#", children: "Reports" }), _jsx("a", { className: "block text-gray-700 hover:text-blue-600", href: "#", children: "Settings" })] })] }), _jsx("main", { className: "flex-1 p-6", children: children })] }));
};
export default DashboardLayout;
