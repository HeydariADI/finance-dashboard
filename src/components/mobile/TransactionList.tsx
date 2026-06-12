type Transaction = {
  id: number;
  title: string;
  amount: number;
};

type Props = {
  transactions: Transaction[];
  onDelete?: (id: number) => void;
};

export default function TransactionList({
  transactions,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">

      <h2 className="font-semibold text-gray-700">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-400 text-sm">
          No transactions yet
        </p>
      ) : (
        transactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <span className="text-gray-700">
                {t.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={
                  t.amount > 0
                    ? "text-green-500 font-medium"
                    : "text-red-500 font-medium"
                }
              >
                {t.amount > 0 ? "+" : ""}
                {t.amount}
              </span>

              {/* Delete button */}
              {onDelete && (
                <button
                  onClick={() => onDelete(t.id)}
                  className="text-red-500 text-xs"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}