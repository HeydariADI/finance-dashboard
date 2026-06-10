import { transactions } from "../../services/transactions";

export default function TransactionList() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="font-bold mb-3">Transactions</h2>

      <div className="space-y-3">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between border-b pb-2"
          >
            <span>{t.title}</span>

            <span
              className={
                t.type === "income"
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {t.amount}$
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}