import { DollarSign, Headphones, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: <DollarSign className="w-10 h-10 text-gray-700" />, value: "$8,000+", label: "Weekly gross" },
    { icon: <Headphones className="w-10 h-10 text-gray-700" />, value: "20,000+", label: "Loads booked" },
    { icon: <TrendingUp className="w-10 h-10 text-gray-700" />, value: "20% better", label: "Than average market" },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-gray-200 p-3 rounded-full">{stat.icon}</div>
            <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
