import { useState } from 'react';
import { ChevronDown, MessageCircle, Calendar } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "I'm starting from zero. Is 6–8 months realistic?",
      answer: "Yes—Months 0–2 build solid foundations (A0→A2/B1). Months 2–4 push B1→B2 while introducing exam timing. Months 4–6 consolidate B2 with weekly mocks. With attendance and homework, most beginners can test in 6–8 months."
    },
    {
      question: "60-minute or 90-minute sessions—which should I choose?",
      answer: "60-minute sessions suit tight schedules with focused drills. 90-minute sessions allow more speaking reps, live corrections, and longer mocks. Both follow the same pathway; choose what fits your availability."
    },
    {
      question: "How fast can I reach CLB 7?",
      answer: "Most learners reach CLB 7 in 6–8 months with 2 sessions/week + weekly mocks. Your plan is personalized after the placement call."
    },
    {
      question: "Do I need prior French?",
      answer: "No. We place you from A0–B1 and tailor drills to climb efficiently to CLB 5–7."
    },
    {
      question: "TEF vs TCF—what should I choose?",
      answer: "On the call we confirm based on your timeline and strengths. Both are accepted for Express Entry; formats differ slightly."
    },
    {
      question: "What if I miss a session?",
      answer: "Sessions are recorded, and you can join office hours to catch up."
    },
    {
      question: "Refunds and guarantee?",
      answer: "If you attend 80% and complete mocks but don't band up one level in 12 weeks, you continue free until you do. Monthly billing; cancel anytime before next cycle."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
         
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#211a1d] mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#211a1d]/60 max-w-xl mx-auto px-4">
            Everything you need to know about our group French classes
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg sm:rounded-xl border overflow-hidden transition-all duration-200 ${
                openIndex === index 
                  ? 'border-[#005D6D] shadow-md' 
                  : 'border-[#CADADF] hover:border-[#6C8F99]/30'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#211a1d] pr-4 text-sm sm:text-base md:text-lg text-left">
                  {item.question}
                </span>
                
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-[#005D6D] flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div 
                className={`px-4 sm:px-5 md:px-6 overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'pb-4 sm:pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-2 sm:pt-3 border-t border-[#CADADF]/30">
                  <p className="text-[#211a1d]/70 text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-12 sm:mt-16 text-center px-4 sm:px-0">
          <div className="bg-gradient-to-r from-[#F6FCFB] to-[#F6FCFB]/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl mx-auto border border-[#CADADF]/50">
            <h3 className="text-lg sm:text-xl font-bold text-[#211a1d] mb-2 sm:mb-3">
              Still have questions?
            </h3>
            <p className="text-xs sm:text-sm text-[#211a1d]/60 mb-4 sm:mb-6 max-w-lg mx-auto">
              Schedule a free 15‑minute placement call to discuss your goals, level, and the best group schedule.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book your 15‑min placement call
                </span>
              </button>
              
              <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-[#CADADF] text-[#211a1d] font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base hover:border-[#005D6D]/50 hover:shadow-md transition-all">
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#005D6D]" />
                  Chat on WhatsApp
                </span>
              </button>
            </div>
            
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#211a1d]/40">
              Typically respond within 30 minutes during business hours
            </p>
          </div>
        </div>

       

      </div>
    </section>
  );
};

export default FAQ;