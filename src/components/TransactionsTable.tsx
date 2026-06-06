type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
  date: string;
};

const data: Transaction[] = [
  { id: 1, title: "Salary", amount: 5000, type: "income", date: "2026-06-01" },
  { id: 2, title: "Rent", amount: 1200, type: "expense", date: "2026-06-02" },
  { id: 3, title: "Freelance", amount: 2000, type: "income", date: "2026-06-03" },
];

const TransactionsTable = () => {
  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm mt-6">
      <h2 className="text-lg font-bold mb-4">Transactions</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2">Title</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Type</th>
            <th className="pb-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b last:border-none">
              <td className="py-2">{item.title}</td>

              <td
                className={`py-2 font-medium ${
                  item.type === "income" ? "text-green-600" : "text-red-500"
                }`}
              >
                ${item.amount.toLocaleString()}
              </td>

              <td className="py-2 capitalize">{item.type}</td>

              <td className="py-2 text-gray-500">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;