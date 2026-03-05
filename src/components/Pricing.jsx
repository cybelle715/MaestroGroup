import { Check, Star, Users, Clock, Calendar, Award, Zap, HelpCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "Exam Mastery",
      description: "TCF/TEF prep with weekly mock exams",
      price: {
        monthly: 185,
        quarterly: 175,
        yearly: 165
      },
      originalPrice: {
        monthly: 200,
        quarterly: 190,
        yearly: 180
      },
      features: [
        "Weekly full-length mock exams",
        "Timing & test-taking strategies",
        "Targeted error correction",
        "Speaking simulation drills",
        "Score improvement tracking",
        "All materials provided",
        "Bi-weekly 1:1 coaching",
        "Personal follow-up every other day",
        "24/7 WhatsApp support",
        "Recorded sessions",
        "Group chat access"
      ],
      sessions: "2x/week",
      groupSize: "4 max",
      duration: "6-8 months",
      popular: true,
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Foundations",
      description: "From zero to conversational",
      price: {
        monthly: 185,
        quarterly: 175,
        yearly: 165
      },
      features: [
        "Basic conversations & survival French",
        "Essential grammar foundations",
        "Pronunciation & listening skills",
        "Everyday vocabulary",
        "Simple past/future tense",
        "All materials provided",
        "Weekly feedback",
        "Recorded sessions",
        "Group chat access"
      ],
      sessions: "2x/week",
      groupSize: "4 max",
      duration: "8-12 weeks",
      popular: false,
      icon: <Users className="w-5 h-5" />
    },
    {
      name: "Fluency Builder",
      description: "Advanced conversation mastery",
      price: {
        monthly: 185,
        quarterly: 175,
        yearly: 165
      },
      features: [
        "Extended speaking on diverse topics",
        "Advanced grammar structures",
        "Debate & opinion expression",
        "Professional vocabulary",
        "Cultural nuances & idioms",
        "All materials provided",
        "Weekly feedback",
        "Recorded sessions",
        "Group chat access"
      ],
      sessions: "2x/week",
      groupSize: "4 max",
      duration: "12-16 weeks",
      popular: false,
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "Conversation Circles",
      description: "Practice speaking in groups",
      price: {
        monthly: 99,
        quarterly: 94,
        yearly: 89
      },
      features: [
        "Themed discussions",
        "Peer feedback",
        "Real-life scenarios",
        "Weekly topics",
        "Pronunciation focus",
        "Topic materials",
        "Vocabulary lists",
        "Group chat access"
      ],
      sessions: "1x/week",
      groupSize: "4 max",
      duration: "Ongoing",
      popular: false,
      icon: <Users className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: "Can I switch between programs?",
      answer: "Yes! You can switch programs at any time based on your level and goals. We'll help you find the right fit."
    },
    {
      question: "Is there a long-term commitment?",
      answer: "No commitment required. You can cancel anytime before your next billing cycle."
    },
    {
      question: "What if I miss a session?",
      answer: "All sessions are recorded and available in your dashboard. You also get 24/7 group chat support."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied, we'll refund your first month."
    },
    {
      question: "Can I try before committing?",
      answer: "Absolutely! Book a free 15-minute call to discuss your goals and try a sample lesson."
    }
  ];

  const whatsIncluded = [
    "Live sessions with expert coaches",
    "Small groups of 4 max",
    "All learning materials",
    "Session recordings",
    "Weekly feedback",
    "Group chat access",
    "Progress tracking",
    "Flexible scheduling",
    "Personalized homework",
    "Pronunciation correction"
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-[#F6FCFB]">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F6FCFB] rounded-full border border-[#CADADF] mb-4">
            <span className="text-xs sm:text-sm font-semibold text-[#005D6D]">PRICING</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#211a1d] mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-[#005D6D] to-[#6C8F99] bg-clip-text text-transparent">
              Monthly Pricing
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-[#211a1d]/60 max-w-2xl mx-auto px-4">
            All programs include small groups of 4, live sessions, and all materials. No hidden fees.
          </p>
        </div>

      

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl sm:rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-[#005D6D] border-2 relative' : 'border-[#CADADF]'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white text-xs font-bold py-1.5 px-3 text-center w-full">
                  ⭐ BEST SELLER
                </div>
              )}

              <div className="p-4 sm:p-5 md:p-6">
                {/* Plan Name & Icon */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white' 
                      : 'bg-[#F6FCFB] text-[#005D6D]'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#211a1d]">{plan.name}</h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#211a1d]/60 mb-3 sm:mb-4">{plan.description}</p>

                {/* Quick Specs */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-[10px] sm:text-xs border-b border-[#CADADF]/20 pb-3 sm:pb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#005D6D]" />
                    <span>{plan.sessions}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#6C8F99]" />
                    <span>{plan.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#211a1d]" />
                    <span>{plan.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-3 sm:mb-4">
                  <div className="text-[10px] sm:text-xs text-[#211a1d]/50">Starting from</div>
                  <div className="flex items-end gap-2 flex-wrap">
                    {plan.originalPrice && (
                      <span className="text-base sm:text-lg text-[#211a1d]/40 line-through">
                        ${plan.originalPrice[billingCycle]}
                      </span>
                    )}
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold text-[#211a1d]">${plan.price[billingCycle]}</span>
                      <span className="text-xs sm:text-sm text-[#211a1d]/60">/mo</span>
                    </div>
                  </div>
                  {billingCycle !== 'monthly' && (
                    <div className="text-[10px] sm:text-xs text-[#005D6D] mt-1">
                      ${plan.price[billingCycle] * (billingCycle === 'quarterly' ? 3 : 12)} billed {billingCycle}
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {plan.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                      <Check className="w-3 h-3 text-[#005D6D] shrink-0 mt-0.5" />
                      <span className="text-[#211a1d]/70">{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 4 && (
                    <li className="text-[10px] sm:text-xs text-[#005D6D] font-medium">
                      +{plan.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white hover:shadow-lg'
                    : 'bg-[#F6FCFB] text-[#211a1d] border border-[#CADADF] hover:border-[#005D6D]/50'
                }`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included - Grid */}
        <div className="mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#211a1d] mb-4 sm:mb-6 text-center">What's Included in All Plans</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl border border-[#CADADF] p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {whatsIncluded.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#005D6D] shrink-0" />
                  <span className="text-[#211a1d]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

       

       

        

      </div>
    </section>
  );
};

export default Pricing;