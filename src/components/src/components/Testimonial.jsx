import { useState, useRef } from 'react';
import { Star, Quote, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Marie K.",
      role: "TCF Exam Group",
      text: "Our group of 5 helped each other prepare for TCF. We practiced speaking together weekly and all passed on first attempt! The mock exams were game-changing.",
      rating: 5,
      before: "A2",
      after: "B2",
      duration: "3 months",
      group: "Exam Prep Group"
    },
    {
      name: "Ahmed S.",
      role: "Beginner Group",
      text: "I was scared to speak French. The small group of 5 made it so comfortable to practice without pressure. We became study buddies and motivated each other.",
      rating: 5,
      before: "A0",
      after: "A2",
      duration: "2 months",
      group: "Foundations Group"
    },
    {
      name: "Isabella R.",
      role: "Fluency Builder Group",
      text: "The group discussions pushed me to speak more than I ever would alone. Learning with peers at my level made complex grammar easier to understand.",
      rating: 5,
      before: "B1",
      after: "B2+",
      duration: "4 months",
      group: "Advanced Group"
    },
    {
      name: "David M.",
      role: "Conversation Circles",
      text: "Perfect for maintaining my French. The themed discussions keep it interesting, and the small group ensures everyone participates equally.",
      rating: 5,
      before: "B1",
      after: "B2",
      duration: "Ongoing",
      group: "Conversation Group"
    },
    {
      name: "Sophie L.",
      role: "Exam Mastery Group",
      text: "The weekly mock tests with my group were invaluable. We reviewed each other's speaking responses and learned from everyone's mistakes.",
      rating: 5,
      before: "B1",
      after: "B2",
      duration: "2.5 months",
      group: "TCF Prep Group"
    },
    {
      name: "Thomas B.",
      role: "Foundations Group",
      text: "As a complete beginner, the small group gave me confidence. We started together and progressed together—much better than learning alone.",
      rating: 5,
      before: "A0",
      after: "A2",
      duration: "10 weeks",
      group: "Beginner Group"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "95%", label: "Exam Pass Rate", icon: Award },
    { value: "500+", label: "Students Trained", icon: Users },
    { value: "80%", label: "Repeat Students", icon: TrendingUp }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      setActiveIndex(Math.max(0, activeIndex - 1));
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      setActiveIndex(Math.min(testimonials.length - 1, activeIndex + 1));
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f8f0fb]">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#cad5ca] mb-4">
            <Quote className="w-4 h-4 text-[#6320ee]" />
            <span className="text-sm font-semibold text-[#211a1d]">STUDENT SUCCESS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#211a1d] mb-4">
            What Our 
            <span className="block text-[#6320ee]">Group Students Say</span>
          </h2>
          
          <p className="text-lg text-[#211a1d]/60 max-w-2xl mx-auto">
            Join hundreds of students who've achieved their French goals through small group learning.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-5 text-center border border-[#cad5ca]/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-[#6320ee]" />
                </div>
                <div className="text-2xl font-bold text-[#211a1d] mb-1">{stat.value}</div>
                <div className="text-sm text-[#211a1d]/60">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Horizontal Testimonials Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#211a1d]">Student Testimonials</h3>
            <div className="flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full bg-white border border-[#cad5ca] flex items-center justify-center hover:border-[#6320ee] hover:text-[#6320ee] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeIndex === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-white border border-[#cad5ca] flex items-center justify-center hover:border-[#6320ee] hover:text-[#6320ee] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeIndex === testimonials.length - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="bg-white rounded-2xl p-6 border border-[#cad5ca] hover:border-[#8075ff]/30 transition-all duration-300 hover:shadow-md h-full">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="mb-6">
                    <p className="text-[#211a1d]/80 italic">"{testimonial.text}"</p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-[#211a1d]/60 mb-1">
                      <span>Before: {testimonial.before}</span>
                      <span>After: {testimonial.after}</span>
                    </div>
                    <div className="h-2 bg-[#f8f0fb] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#6320ee] to-[#8075ff] rounded-full"
                        style={{ width: `${(testimonial.after === 'B2+' ? 90 : testimonial.after === 'B2' ? 80 : 60)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Student Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[#211a1d]">{testimonial.name}</div>
                      <div className="text-sm text-[#211a1d]/60">{testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-[#6320ee] bg-[#f8f0fb] px-2 py-1 rounded-full">
                        {testimonial.group}
                      </div>
                      <div className="text-xs text-[#211a1d]/40 mt-1">{testimonial.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = scrollRef.current.scrollWidth / testimonials.length;
                    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
                    setActiveIndex(index);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-[#6320ee] to-[#8075ff] w-6' 
                    : 'bg-[#cad5ca]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#211a1d] mb-8 text-center">Group Success Stories</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Story 1 - Exam Group */}
            <div className="bg-white rounded-2xl p-6 border border-[#cad5ca]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff] flex items-center justify-center text-white font-bold">
                  TC
                </div>
                <div>
                  <h4 className="font-bold text-[#211a1d]">March TCF Group</h4>
                  <div className="text-sm text-[#211a1d]/60">5 students • 12 weeks</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-[#f8f0fb] rounded-xl">
                  <div className="text-2xl font-bold text-[#6320ee]">5/5</div>
                  <div className="text-xs text-[#211a1d]/60">Passed TCF</div>
                </div>
                <div className="text-center p-3 bg-[#f8f0fb] rounded-xl">
                  <div className="text-2xl font-bold text-[#8075ff]">B2</div>
                  <div className="text-xs text-[#211a1d]/60">Average score</div>
                </div>
              </div>
              
              <p className="text-sm text-[#211a1d]/70">
                "This group of 5 worked together on mock exams every Saturday. The peer feedback on speaking sections was invaluable."
              </p>
            </div>
            
            {/* Story 2 - Beginner Group */}
            <div className="bg-white rounded-2xl p-6 border border-[#cad5ca]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8075ff] to-[#6320ee] flex items-center justify-center text-white font-bold">
                  BG
                </div>
                <div>
                  <h4 className="font-bold text-[#211a1d]">January Beginner Group</h4>
                  <div className="text-sm text-[#211a1d]/60">5 students • 10 weeks</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-[#f8f0fb] rounded-xl">
                  <div className="text-2xl font-bold text-[#6320ee]">A0 → A2</div>
                  <div className="text-xs text-[#211a1d]/60">Progress level</div>
                </div>
                <div className="text-center p-3 bg-[#f8f0fb] rounded-xl">
                  <div className="text-2xl font-bold text-[#8075ff]">100%</div>
                  <div className="text-xs text-[#211a1d]/60">Continued to B1</div>
                </div>
              </div>
              
              <p className="text-sm text-[#211a1d]/70">
                "From 'bonjour' to having 15-minute conversations. The small group made practicing less intimidating."
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#f8f0fb] to-white rounded-2xl p-8 border border-[#cad5ca] max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#211a1d] mb-4">Join Our Next Success Story</h3>
            <p className="text-[#211a1d]/60 mb-6">
              Ready to achieve your French goals with a supportive group of 5?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                Join a Group
              </button>
              <button className="px-8 py-3 bg-white border-2 border-[#cad5ca] text-[#211a1d] font-semibold rounded-xl hover:border-[#8075ff]/50 transition-all">
                Read More Stories
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;