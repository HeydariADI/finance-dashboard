import { useState } from "react";

export type Transaction = {
  id: number;
  title: string;
  amount: number;
};

export default function useDashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, title: "Salary", amount: 2000 },
    { id: 2, title: "Food", amount: -50 },
    { id: 3, title: "Freelance", amount: 500 },
  ]);

  const [open, setOpen] = useState(false);

  const addTransaction = (data: {
    title: string;
    amount: number;
  }) => {
    setTransactions((prev) => [
      ...prev,
      {
        ...data,
        id: Date.now(),
      },
    ]);
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const profit = income - expense;

  return {
    transactions,
    open,
    setOpen,
    addTransaction,
    income,
    expense,
    profit,
  };
}