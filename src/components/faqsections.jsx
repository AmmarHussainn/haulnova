"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";


const faqs = [
  { question: "Why should I choose to do business with you?", answer: "Simply put, we buy you time so you can focus on making more money. Most owner-operators get into this business to drive loads and earn, only to find themselves buried in paperwork, regulatory requirements, and negotiations—things that take time away from what actually makes them money. By handling these business support activities, Haul Nova allows your operation to run efficiently and take on more loads. Plus, when it comes to negotiations, we work hard to secure the best rates, putting more money in your pocket through our dispatch services." },
  { question: "How do I get started?", answer: "If you want to take advantage of our dispatch services, you can reach out by phone, email, or through our website. Our sales team will contact you, and you’ll receive the Dispatch-Carrier agreement via email. Simply review, complete, sign, and return it along with the necessary documents (W9 form, Power of Attorney, Authority Certificate, Certificate of Liability Insurance, and your factoring company’s Notice of Assignment). Once everything is in place, we’re ready to provide top-quality dispatching services." },
  { question: "How can I look at the Carrier-Dispatcher agreement?", answer: "You can request the agreement through our website, email us at dispatch@haulnova.com, or call (602) 529-6927." },
  { question: "What about Privacy & Confidentiality?", answer: "While providing full dispatch services in your best interest, Haul Nova will never, at any time or in any manner, directly or indirectly use, disclose, or communicate any proprietary information belonging to our clients for personal benefit. Your business information is safe with us." },
  { question: "How do you get paid?", answer: "For our dispatch services, we book loads for you and send you the rate confirmations. We also ensure that the broker or shipper is rated at least A, B, or C with your factoring company. Every Friday, we send you an invoice for the loads completed, with payment due the following Monday. You never have to pay for our dispatch services in advance." },
  { question: "Isn’t it easier and cheaper to hire an in-house dispatcher?", answer: "Surprisingly, no. Hiring a competent dispatcher requires a rigorous recruitment process, which can be time-consuming and costly. You may also need to provide office space and additional training. Many of our clients have found that partnering with Haul Nova is more cost-effective than hiring even one full-time dispatcher. Our industry expertise, strong networks, and experience allow us to deliver exceptional results at a lower cost." },
  { question: "Will your dispatch company work with me if I’m new in the business?", answer: "Absolutely. We enjoy helping truck drivers and carriers at all stages of their careers. We primarily look for hardworking, committed drivers. If you’re a new carrier, it may take some extra effort at the beginning, as many brokers and shippers prefer carriers with MC authorities that are at least six months to a year old. However, Haul Nova will work hard to help you secure loads and earn well in your first year. Once you reach the one-year mark, access to better rates and loads will become even easier with our support." },
  { question: "Can I choose which dispatch services I want?", answer: "Yes. Many clients prefer our comprehensive service package, which includes dispatch, documentation, compliance, and full business support. However, if you only need help with specific tasks, such as paperwork and documentation, we can tailor our services to your needs. At Haul Nova, we believe our clients should have the freedom to run their business as they see fit." },
  { question: "Is the agreed Dispatch rate permanent?", answer: "Rates may be subject to change, but we guarantee transparency and fair pricing throughout our partnership." },
  { question: "How can I contact Haul Nova?", answer: "You can reach us at dispatch@haulnova.com or call (602) 529-6927" }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
  {/* FAQ Title */}
  <h2 className="text-3xl font-bold font-bebas">FAQ</h2>
  <p className="text-gray-600 font-montserrat">
    Our team brings together peerless professionals.
  </p>

  {/* FAQ List */}
  <div className="mt-6 space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className={`border shadow-md transition-all duration-300 ${
          openIndex === index ? "border-orange-500" : "border-gray-200"
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className={`flex justify-between items-center cursor-pointer w-full p-4 text-left ${
            openIndex === index ? "bg-orange-100" : "bg-white"
          } transition`}
        >
          <span className="font-medium font-Montserrat">{faq.question}</span>
          {openIndex === index ? (
            <Minus className="text-orange-500" />
          ) : (
            <Plus className="text-gray-500" />
          )}
        </button>
        <AnimatePresence>
          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="p-4 text-gray-600 font-montserrat">{faq.answer}</p>
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
      <p className="text-gray-600 font-montserrat">Need help? Call us</p>
      <p className="font-bold text-lg font-bebas">(602) 529-6927</p>
    </div>
  </div>
</div>
  );
};

export default FAQSection;
