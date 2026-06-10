import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function AddTransactionModal({ onClose, onAdd, }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const handleSubmit = () => {
        if (!title || !amount)
            return;
        onAdd({
            title,
            amount: Number(amount),
        });
        setTitle("");
        setAmount("");
        onClose();
    };
    return (_jsx("div", { className: "fixed inset-0 bg-black/40 flex items-center justify-center", children: _jsxs("div", { className: "bg-white p-4 rounded-xl w-[90%]", children: [_jsx("h2", { className: "text-lg font-bold mb-3", children: "Add Transaction" }), _jsx("input", { className: "border p-2 w-full mb-2", placeholder: "Title", value: title, onChange: (e) => setTitle(e.target.value) }), _jsx("input", { className: "border p-2 w-full mb-3", placeholder: "Amount", type: "number", value: amount, onChange: (e) => setAmount(e.target.value) }), _jsxs("div", { className: "flex justify-between", children: [_jsx("button", { onClick: onClose, children: "Cancel" }), _jsx("button", { onClick: handleSubmit, className: "bg-blue-500 text-white px-3 py-1 rounded", children: "Add" })] })] }) }));
}
