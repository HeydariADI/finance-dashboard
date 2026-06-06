type Props = {
  title: string;
  amount: number;
  type: "income" | "expense" | "balance";
};

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

const FinanceCard = ({ title, amount, type }: Props) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <span className="text-xl">{icons[type]}</span>
      </div>

      <p className={`text-2xl font-bold mt-3 ${colors[type]}`}>
        {amount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  );
};

export default FinanceCard;