type Transaction = {
  id: number;
  title: string;
  amount: number;
};

type Props = {
  transactions: Transaction[];
};

export default function TransactionList({ transactions }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-700">
          Recent Transactions
        </h2>

        <span className="text-xs text-gray-400">
          {transactions.length} items
        </span>
      </div>

      {/* Empty State */}
      {transactions.length === 0 ? (
        <div className="text-center py-6">
          <p className="text-gray-400 text-sm">
            No transactions yet
          </p>
          <p className="text-gray-300 text-xs mt-1">
            Add your first transaction
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center border-b pb-2 last:border-b-0"
            >

              {/* Title */}
              <span className="text-gray-700 font-medium">
                {t.title}
              </span>

              {/* Amount */}
              <span
                className={`
                  font-semibold
                  ${t.amount > 0 ? "text-green-500" : "text-red-500"}
                `}
              >
                {t.amount > 0 ? "+" : ""}
                {t.amount.toLocaleString()}
              </span>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}