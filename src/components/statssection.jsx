import { DollarSign, Headphones, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: <DollarSign className="w-10 h-10 text-white" />, value: "$8,000+", label: "Weekly gross" },
    { icon: <Headphones className="w-10 h-10 text-white" />, value: "20,000+", label: "Loads booked" },
    { icon: <TrendingUp className="w-10 h-10 text-white" />, value: "20% better", label: "Than average market" },
  ];

  return (
    <div className="bg-[#f6f6f7] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-[#ff6900]  p-4 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mt-6 font-bebas text-gray-800">{stat.value}</h3>
              <p className="text-lg text-gray-600 font-Montserrat mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;