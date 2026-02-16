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
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f8f0fb]">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#cad5ca] mb-4">
            <Zap className="w-4 h-4 text-[#6320ee]" />
            <span className="text-sm font-semibold text-[#211a1d]">PRICING</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-[#211a1d] mb-4">
              {/* Monthly Pricing */}
            <span className="block bg-gradient-to-r from-[#6320ee] to-[#8075ff] bg-clip-text text-transparent">
              Monthly Pricing
            </span>
          </h1>
          
          <p className="text-lg text-[#211a1d]/60 max-w-2xl mx-auto">
            All programs include small groups of 4, live sessions, and all materials. No hidden fees.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-2xl border border-[#cad5ca] inline-flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white'
                  : 'text-[#211a1d]/70 hover:text-[#6320ee]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                billingCycle === 'quarterly'
                  ? 'bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white'
                  : 'text-[#211a1d]/70 hover:text-[#6320ee]'
              }`}
            >
              Quarterly <span className="text-xs opacity-80">Save 6%</span>
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white'
                  : 'text-[#211a1d]/70 hover:text-[#6320ee]'
              }`}
            >
              Yearly <span className="text-xs opacity-80">Save 11%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-[#6320ee] border-2 relative' : 'border-[#cad5ca]'
              }`}
            >
              {/* Popular Badge - FIXED */}
              {plan.popular && (
                <div className="bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white text-xs font-bold py-1.5 px-3 text-center w-full">
                  ⭐ BEST SELLER
                </div>
              )}

              <div className="p-6">
                {/* Plan Name & Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white' 
                      : 'bg-[#f8f0fb] text-[#6320ee]'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="font-bold text-lg text-[#211a1d]">{plan.name}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-[#211a1d]/60 mb-4">{plan.description}</p>

                {/* Quick Specs */}
                <div className="flex items-center gap-3 mb-4 text-xs border-b border-[#cad5ca]/20 pb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#6320ee]" />
                    <span>{plan.sessions}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#8075ff]" />
                    <span>{plan.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#211a1d]" />
                    <span>{plan.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-xs text-[#211a1d]/50">Starting from</div>
                  <div className="flex items-end gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-[#211a1d]/40 line-through">
                        ${plan.originalPrice[billingCycle]}
                      </span>
                    )}
                    <div>
                      <span className="text-3xl font-bold text-[#211a1d]">${plan.price[billingCycle]}</span>
                      <span className="text-sm text-[#211a1d]/60">/mo</span>
                    </div>
                  </div>
                  {billingCycle !== 'monthly' && (
                    <div className="text-xs text-[#6320ee] mt-1">
                      ${plan.price[billingCycle] * (billingCycle === 'quarterly' ? 3 : 12)} billed {billingCycle}
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {plan.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <Check className="w-3 h-3 text-[#6320ee] shrink-0 mt-0.5" />
                      <span className="text-[#211a1d]/70">{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 4 && (
                    <li className="text-xs text-[#6320ee] font-medium">
                      +{plan.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white hover:shadow-lg'
                    : 'bg-[#f8f0fb] text-[#211a1d] border border-[#cad5ca] hover:border-[#6320ee]/50'
                }`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included - Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#211a1d] mb-6 text-center">What's Included in All Plans</h2>
          <div className="bg-white rounded-2xl border border-[#cad5ca] p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {whatsIncluded.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#6320ee] shrink-0" />
                  <span className="text-[#211a1d]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-[#211a1d] mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-[#cad5ca] p-5">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#6320ee] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#211a1d] mb-2">{faq.question}</h3>
                    <p className="text-sm text-[#211a1d]/60">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#6320ee]/5 to-[#8075ff]/5 rounded-3xl p-8 border border-[#cad5ca]/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#211a1d] mb-3">Still have questions?</h3>
            <p className="text-[#211a1d]/60 mb-6">
              Book a free 15-minute call to discuss which program fits your goals.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
              Book a Free Call
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 px-4 py-2 bg-[#f8f0fb] rounded-full text-xs text-[#211a1d]/60 border border-[#cad5ca]/30">
            <span>🔒 Secure payment</span>
            <span className="w-1 h-1 rounded-full bg-[#cad5ca]"></span>
            <span>⏱️ Cancel anytime</span>
            <span className="w-1 h-1 rounded-full bg-[#cad5ca]"></span>
            <span>🎓 10+ students</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;