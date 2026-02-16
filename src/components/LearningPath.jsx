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
      description: "We'll chat about your level, goals, and find the right group.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      step: "2",
      title: "Group Placement",
      description: "Join a small group of 4 at your exact level and schedule.",
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
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f8f0fb] rounded-full border border-[#cad5ca] mb-4">
            <Users className="w-4 h-4 text-[#6320ee]" />
            <span className="text-sm font-semibold text-[#211a1d]">SMALL GROUP PROGRAMS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#211a1d] mb-4">
            Choose Your 
            <span className="block text-[#6320ee]">Learning Program</span>
          </h2>
          
          <p className="text-lg text-[#211a1d]/60 max-w-2xl mx-auto">
            All programs feature small groups of 4 students for personalized attention and maximum speaking practice.
          </p>
        </div>

        {/* Simple Methodology */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-[#f8f0fb] rounded-2xl p-6 md:p-8 border border-[#cad5ca]/50">
            <h3 className="text-xl font-bold text-[#211a1d] mb-6 text-center">How It Works</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {methodology.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#6320ee]">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#211a1d] mb-2">{step.step}</div>
                  <h4 className="font-semibold text-[#211a1d] mb-2">{step.title}</h4>
                  <p className="text-sm text-[#211a1d]/60">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                Start with Free Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Program Cards - NO BUTTONS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                program.popular ? 'border-[#6320ee] border-2 relative' : 'border-[#cad5ca]'
              }`}
            >
              {/* Popular Badge - FIXED POSITIONING */}
              {program.popular && (
                <div className="bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white text-xs font-bold py-1.5 px-3 text-center w-full">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center">
                    <div className="text-[#6320ee]">
                      {program.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#211a1d] text-lg">{program.title}</h3>
                    <span className="text-xs text-[#6320ee] bg-[#f8f0fb] px-2 py-0.5 rounded-full inline-block mt-1">
                      {program.level}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-[#211a1d]/70 text-sm mb-4">{program.description}</p>
                
                {/* Duration & Group Size */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#6320ee]" />
                    <span className="text-[#211a1d] font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#8075ff]" />
                    <span className="text-[#211a1d] font-medium">{program.groupSize}</span>
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#211a1d]/70">
                      <Check className="w-3.5 h-3.5 text-[#6320ee] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* NO BUTTON - removed completely */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Pricing Page */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#f8f0fb] to-[#f8f0fb]/50 rounded-2xl p-8 border border-[#cad5ca]/50">
            <h3 className="text-xl font-bold text-[#211a1d] mb-3">Ready to Start?</h3>
            <p className="text-[#211a1d]/60 mb-6 max-w-md mx-auto">
              View our transparent pricing and choose the perfect plan for your goals.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              See Pricing & Join
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;