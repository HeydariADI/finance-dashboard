type Props = {
  title: string;
  amount: string;
};

export default function StatCard({ title, amount }: Props) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-xl font-bold mt-2">{amount}</p>
    </div>
  );
}