import { Users, Clock, Calendar, MessageSquare, BookOpen, Award, GraduationCap, Check, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Exam Mastery",
      description: "TCF/TEF prep with weekly mock exams and targeted strategies.",
      icon: <Award className="w-6 h-6" />,
      duration: "8-12 weeks",
      groupSize: "Max 4 students",
      level: "A2 → B2",
      features: ["Weekly mock tests", "Timing strategies", "Error correction", "Speaking drills"],
      popular: true,
    },
    {
      title: "Foundations",
      description: "From zero to conversational in small, supportive groups.",
      icon: <BookOpen className="w-6 h-6" />,
      duration: "8-12 weeks",
      groupSize: "Max 4 students",
      level: "A0 → A2",
      features: ["Basic conversations", "Essential grammar", "Pronunciation", "Daily vocabulary"],
      popular: false,
    },
    {
      title: "Fluency Builder",
      description: "Advanced conversation and complex grammar mastery.",
      icon: <MessageSquare className="w-6 h-6" />,
      duration: "12-16 weeks",
      groupSize: "Max 4 students",
      level: "B1 → B2",
      features: ["Complex dialogues", "Advanced grammar", "Debate practice", "Cultural idioms"],
      popular: false,
    },
    {
      title: "Conversation Circles",
      description: "Practice speaking in themed conversation circles.",
      icon: <Users className="w-6 h-6" />,
      duration: "Flexible",
      groupSize: "Max 4 students",
      level: "All levels",
      features: ["Themed discussions", "Peer feedback", "Real-life scenarios", "Weekly topics"],
      popular: false,
    }
  ];

  const methodology = [
    {
      step: "1",
      title: "Free Assessment",
      description: "Start with a quick level check and a clear plan to reach your target CLB level.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      step: "2",
      title: "Group Placement",
      description: "Learn with at most 4 peers at your level. Interactive classes, weekly speaking tasks, and ongoing feedback.",
      icon: <Users className="w-5 h-5" />
    },
    {
      step: "3",
      title: "Start Learning",
      description: "Begin your journey with structured lessons and peer support.",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  return (
    <section id="programs" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F6FCFB] rounded-full border border-[#CADADF] mb-4">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#005D6D]" />
            <span className="text-xs sm:text-sm font-semibold text-[#005D6D]">SMALL GROUP PROGRAMS</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#211a1d] mb-4">
            Choose Your 
            <span className="block text-[#005D6D]">Learning Program</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-[#211a1d]/60 max-w-2xl mx-auto px-4">
            All programs feature small groups of 4 students for personalized attention and maximum speaking practice.
          </p>
        </div>

        {/* Simple Methodology */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20 px-4 sm:px-0">
          <div className="bg-[#F6FCFB] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-[#CADADF]/50">
            <h3 className="text-lg sm:text-xl font-bold text-[#211a1d] mb-6 text-center">How It Works</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-6">
              {methodology.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#005D6D]/10 to-[#6C8F99]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <div className="text-[#005D6D]">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#005D6D] mb-1 sm:mb-2">{step.step}</div>
                  <h4 className="font-semibold text-[#211a1d] mb-1 sm:mb-2 text-sm sm:text-base">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-[#211a1d]/60 px-2">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base hover:shadow-lg transition-all">
                Start with Free Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 px-4 sm:px-0">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl sm:rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                program.popular ? 'border-[#005D6D] border-2 relative' : 'border-[#CADADF]'
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white text-xs font-bold py-1.5 px-3 text-center w-full">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <div className="p-4 sm:p-5 md:p-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center ${
                    program.popular 
                      ? 'bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white' 
                      : 'bg-gradient-to-r from-[#005D6D]/10 to-[#6C8F99]/10 text-[#005D6D]'
                  }`}>
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#211a1d] text-base sm:text-lg">{program.title}</h3>
                    <span className="text-[10px] sm:text-xs text-[#005D6D] bg-[#F6FCFB] px-2 py-0.5 rounded-full inline-block mt-0.5 sm:mt-1">
                      {program.level}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-[#211a1d]/70 text-xs sm:text-sm mb-3 sm:mb-4">{program.description}</p>
                
                {/* Duration & Group Size */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#005D6D]" />
                    <span className="text-[#211a1d] font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#6C8F99]" />
                    <span className="text-[#211a1d] font-medium">{program.groupSize}</span>
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-[#211a1d]/70">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#005D6D] mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Pricing Page */}
        <div className="text-center px-4 sm:px-0">
          <div className="bg-gradient-to-r from-[#F6FCFB] to-[#F6FCFB]/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#CADADF]/50">
            <h3 className="text-lg sm:text-xl font-bold text-[#211a1d] mb-2 sm:mb-3">Ready to Start?</h3>
            <p className="text-sm sm:text-base text-[#211a1d]/60 mb-4 sm:mb-6 max-w-md mx-auto">
              View our transparent pricing and choose the perfect plan for your goals.
            </p>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base hover:shadow-lg transition-all">
              See Pricing & Join
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;