import React from 'react';

export default function PricingFormation() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 font-Montserrat">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bebas font-bold mb-6 text-gray-800">
          Dispatch Services Price Formation
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Our pricing structure is designed to deliver the best value and fairness to our valued customers.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Number of Trucks */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bebas font-bold mb-4 text-gray-800">NUMBER OF TRUCKS</h3>
          <p className="text-3xl font-bold text-[#ff6900] mb-4">6% - 10%</p>
          <p className="text-gray-600 mb-6">
            Price varies depending on the number of trucks and the equipment type.
          </p>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>ALL TYPES</strong></p>
            <p>1 truck: 5%</p>
            <p>2-3 trucks: 4%</p>
            <p>4-6 trucks: 3,7%</p>
            <p>7-8 trucks: 3,5%</p>
            <p>9-14 trucks: 3,2%</p>
            <p>15+ trucks: 3%</p>
            <p className="mt-4"><strong>CARHAULERS</strong></p>
            <p>1-5 trucks: 5%</p>
            <p>6-10 trucks: 4,5%</p>
            <p>11+ trucks: 4%</p>
          </div>
        </div>

        {/* Time in Business */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bebas font-bold mb-4 text-gray-800">TIME IN BUSINESS</h3>
          <p className="text-3xl font-bold text-[#ff6900] mb-4">0% - 0.4%</p>
          <p className="text-gray-600 mb-6">
            Price varies depending on the time your company has been active in the market.
          </p>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>TIME IN MONTHS</strong></p>
            <p>1-11 months: <strong>0.4%</strong></p>
            <p>12+ months: <strong>0%</strong></p>
          </div>
        </div>

        {/* Safety Score */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bebas font-bold mb-4 text-gray-800">SAFETY SCORE</h3>
          <p className="text-3xl font-bold text-[#ff6900] mb-4">0% - 0.5%</p>
          <p className="text-gray-600 mb-6">
            Price varies depending on the quality of your company’s safety score.
          </p>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>SCORE</strong></p>
            <p>None: <strong>0%</strong></p>
            <p>Satisfactory: <strong>0%</strong></p>
            <p>Conditional: <strong>0.5%</strong></p>
            <p>Freightguards: <strong>0.5%</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}