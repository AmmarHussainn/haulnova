"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";

const faqs = [
  { question: "Why should I choose to do business with you?", answer: "We provide top-tier dispatch services with competitive rates and outstanding support." },
  { question: "How do I get started?", answer: "Simply contact us, review our Carrier-Dispatcher agreement, and start working with us." },
  { question: "How can I look at the Carrier-Dispatcher agreement?", answer: "You can request the agreement through our website or customer support." },
  { question: "What about Privacy & Confidentiality?", answer: "We ensure your data is protected with industry-leading security measures." },
  { question: "Is the agreed Dispatch rate permanent?", answer: "Rates may be subject to change, but we guarantee transparency and fair pricing." },
  { question: "How are you getting paid?", answer: "We operate on a percentage-based or flat-rate payment model, depending on your needs." },
  { question: "Isn’t it always easier and cheaper to hire a dispatcher in-house?", answer: "Outsourcing can save costs and offer specialized expertise, improving efficiency." },
  { question: "Will your dispatch company work with me if I’m new in the business?", answer: "Absolutely! We assist new businesses in establishing themselves." },
  { question: "Can I choose which dispatch services I want?", answer: "Yes, you can customize your services according to your needs." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* FAQ Title */}
      <h2 className="text-3xl font-bold">FAQ</h2>
      <p className="text-gray-600">Our team brings together peerless professionals.</p>

      {/* FAQ List */}
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border  shadow-md transition-all duration-300 ${openIndex === index ? "border-orange-500" : "border-gray-200"}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center cursor-pointer w-full p-4 text-left ${openIndex === index ? "bg-orange-100" : "bg-white"} transition`}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? <Minus className="text-orange-500" /> : <Plus className="text-gray-500" />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="p-4 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-10 flex items-center gap-3 p-4 bg-white shadow-md rounded-lg">
        <div className="p-3 bg-orange-100 rounded-full">
          <Phone className="text-orange-500" />
        </div>
        <div>
          <p className="text-gray-600">Need help? Call us</p>
          <p className="font-bold text-lg">(224) 407-2559</p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
