import { Users, Clock, Calendar, MessageSquare, BookOpen, Award, GraduationCap, Check } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Exam Mastery",
      description: "TCF/TEF prep with weekly mock exams and targeted strategies.",
      icon: <Award className="w-6 h-6" />,
      duration: "8-12 weeks",
      groupSize: "Max 5 students",
      features: ["Weekly mock tests", "Timing strategies", "Error correction", "Speaking drills"],
      popular: true,
      price: "$149/month"
    },
    {
      title: "Foundations",
      description: "From zero to conversational in small, supportive groups.",
      icon: <BookOpen className="w-6 h-6" />,
      duration: "8-12 weeks",
      groupSize: "Max 5 students",
      features: ["Basic conversations", "Essential grammar", "Pronunciation", "Daily vocabulary"],
      popular: false,
      price: "$149/month"
    },
    {
      title: "Fluency Builder",
      description: "Advanced conversation and complex grammar mastery.",
      icon: <MessageSquare className="w-6 h-6" />,
      duration: "12-16 weeks",
      groupSize: "Max 5 students",
      features: ["Complex dialogues", "Advanced grammar", "Debate practice", "Cultural idioms"],
      popular: false,
      price: "$149/month"
    },
    {
      title: "Group Conversation",
      description: "Practice speaking in themed conversation circles.",
      icon: <Users className="w-6 h-6" />,
      duration: "Flexible",
      groupSize: "Max 5 students",
      features: ["Themed discussions", "Peer feedback", "Real-life scenarios", "Weekly topics"],
      popular: false,
      price: "$99/month"
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
      description: "Join a small group of 5 at your exact level and schedule.",
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
            All programs feature small groups of 5 students for personalized attention and maximum speaking practice.
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

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                program.popular ? 'border-[#6320ee] border-' : 'border-[#cad5ca]'
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white text-xs font-bold py-1.5 text-center">
                  MOST POPULAR
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
                  <h3 className="font-bold text-[#211a1d] text-lg">{program.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-[#211a1d]/70 text-sm mb-4">{program.description}</p>
                
                {/* Duration & Group Size */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#211a1d]/50" />
                    <span className="text-[#211a1d] font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#211a1d]/50" />
                    <span className="text-[#211a1d] font-medium">{program.groupSize}</span>
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#211a1d]/70">
                      <Check className="w-3.5 h-3.5 text-[#6320ee] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Price & CTA */}
                <div className="mt-auto">
                  <div className="text-lg font-bold text-[#211a1d] mb-3">{program.price}</div>
                  <button className={`w-full py-2.5 font-semibold rounded-lg transition-all ${
                    program.popular 
                      ? 'bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white hover:shadow-md' 
                      : 'bg-[#f8f0fb] text-[#211a1d] border border-[#cad5ca] hover:bg-[#f8f0fb]/80'
                  }`}>
                    {program.popular ? 'Join Waitlist' : 'View Schedule'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#f8f0fb] to-[#f8f0fb]/50 rounded-2xl p-8 border border-[#cad5ca]/50">
            <h3 className="text-xl font-bold text-[#211a1d] mb-3">Need Help Choosing?</h3>
            <p className="text-[#211a1d]/60 mb-6 max-w-md mx-auto">
              Take our free 5-minute assessment to find your perfect group match.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              Take Free Assessment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;