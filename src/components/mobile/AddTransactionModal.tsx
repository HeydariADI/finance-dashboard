import { useState } from "react";

type Props = {
  onClose: () => void;
  onAdd: (data: { title: string; amount: number }) => void;
};

export default function AddTransactionModal({
  onClose,
  onAdd,
}: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!title || !amount) return;

    onAdd({
      title,
      amount: Number(amount),
    });

    setTitle("");
    setAmount("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded-xl w-[90%]">
        <h2 className="text-lg font-bold mb-3">
          Add Transaction
        </h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="flex justify-between">
          <button onClick={onClose}>
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}