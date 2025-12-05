import React, { useState } from 'react';
import { Plus, Minus, FileText, Home, Info, Download } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need to fast before a blood test?",
      answer: "For certain tests like Lipid Profile, Fasting Blood Sugar, and Thyroid profiles, fasting for 10-12 hours is recommended. However, for tests like CBC or HbA1c, fasting is usually not required. Please check the specific test instructions or ask our support team."
    },
    {
      question: "How can I book a home sample collection?",
      answer: "You can book a home visit through our website by clicking 'Book Home Visit', via our mobile app, or by calling our hotline. Our technician will visit your location at the scheduled time."
    },
    {
      question: "When will I get my reports?",
      answer: "Most routine reports are available within 24 hours. Specialized tests may take 2-4 days. You will receive an SMS notification with a link to download your report as soon as it's ready."
    },
    {
      question: "Is Avishkar Diagnostic NABL accredited?",
      answer: "Yes, Avishkar Diagnostic is fully NABL accredited (ISO 15189:2012) and follows strict internal quality controls to ensure 100% accurate results."
    },
    {
      question: "Can I download my reports online?",
      answer: "Absolutely. Click on the 'Download Report' button in the menu, enter your Patient ID or Registered Mobile Number, and you can view/download your PDF report securely."
    }
  ];

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Patient Information & FAQ</h1>
          <p className="text-gray-600 text-lg">Everything you need to know about your visit and tests.</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
             <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
               <Info className="h-6 w-6" />
             </div>
             <div>
               <h3 className="font-bold text-primary text-lg mb-2">Before Your Test</h3>
               <p className="text-sm text-gray-600">Wear loose, comfortable clothing. Bring a valid ID proof and doctor's prescription if available. Stay hydrated unless instructed otherwise.</p>
             </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
             <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
               <Home className="h-6 w-6" />
             </div>
             <div>
               <h3 className="font-bold text-primary text-lg mb-2">Home Collection</h3>
               <p className="text-sm text-gray-600">Our phlebotomists are trained to collect samples safely from your home. Minimal charges apply for home visits depending on your location.</p>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
             <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
               <Download className="h-6 w-6" />
             </div>
             <div>
               <h3 className="font-bold text-primary text-lg mb-2">Accessing Reports</h3>
               <p className="text-sm text-gray-600">Reports are stored securely for 5 years. You can access past records anytime using your registered mobile number.</p>
             </div>
          </div>

           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
             <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
               <FileText className="h-6 w-6" />
             </div>
             <div>
               <h3 className="font-bold text-primary text-lg mb-2">Test Menu</h3>
               <p className="text-sm text-gray-600">We offer over 4000+ tests including specialized genetic markers. If you don't find a test online, please call us.</p>
             </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <h2 className="text-2xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${
                openIndex === index ? 'border-primary shadow-md' : 'border-gray-100 hover:border-green-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-secondary flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
