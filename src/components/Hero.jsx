import { Play, Users, Star, Zap, ChevronRight, GraduationCap, Target, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24 overflow-hidden relative">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#6320ee]/20 to-[#8075ff]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-tr from-[#f8f0fb] to-[#cad5ca]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#6320ee]/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#cad5ca]/50 shadow-sm">
              <Target className="w-4 h-4 text-[#6320ee]" />
              <span className="text-sm font-medium text-[#211a1d]/70">TEF/TCF Specialist For Beginners</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="text-[#211a1d]">From zero </span>
              <br />
              <span className="bg-gradient-to-r from-[#6320ee] via-[#8075ff] to-[#6320ee] bg-clip-text text-transparent animate-gradient">
                to TCF/TEF ready, in six months.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-[#211a1d]/60 leading-relaxed max-w-xl">
              Join our curated small-group cohorts and get speaking by month 2. 
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {/* Group Size */}
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-[#cad5ca]/20 hover:border-[#6320ee]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#6320ee]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#211a1d]">4 max</div>
                  <div className="text-sm text-[#211a1d]/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6320ee]"></span>
                    Students per group
                  </div>
                </div>
              </div>
              
              {/* Sessions */}
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-[#cad5ca]/20 hover:border-[#6320ee]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#8075ff]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#211a1d]">2x/week</div>
                  <div className="text-sm text-[#211a1d]/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8075ff]"></span>
                    Live sessions
                  </div>
                </div>
              </div>
              
              {/* Exam Focus */}
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-37 rounded-xl border border-[#cad5ca]/20 hover:border-[#6320ee]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#6320ee]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#211a1d]">TEF/TCF</div>
                  <div className="text-sm text-[#211a1d]/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6320ee]"></span>
                    Exam-focused
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#6320ee]/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join a Group
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#6320ee] to-[#8075ff] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#cad5ca] text-[#211a1d] font-semibold rounded-2xl hover:border-[#6320ee]/30 hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-[#6320ee] ml-0.5" />
                </div>
                <span>Watch Demo Class</span>
              </button>
            </div>

            
          </div>

          {/* Right Content - Visual Card */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-white/90 backdrop-blur-md md:backdrop-blur-xl rounded-3xl shadow-2xl border border-[#cad5ca]/20 overflow-hidden">
              
              {/* Card header */}
              <div className="p-6 border-b border-[#cad5ca]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#211a1d]/50">Next cohort starts</div>
                    <div className="text-2xl font-bold text-[#211a1d]">March 15, 2026</div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 rounded-full">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#6320ee] to-[#8075ff] rounded-full"></div>
                      <span className="text-sm font-semibold text-[#211a1d]">Only 3 spots left</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#211a1d] mb-4">Who this is for</h3>
                
                {/* Target audience */}
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3 group hover:bg-[#f8f0fb] p-2 rounded-lg transition-all">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff]"></div>
                    </div>
                    <p className="text-[#211a1d]/80">You're starting from zero—or close to it</p>
                  </div>
                  
                  <div className="flex items-start gap-3 group hover:bg-[#f8f0fb] p-2 rounded-lg transition-all">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff]"></div>
                    </div>
                    <p className="text-[#211a1d]/80">You want TEF/TCF results in 6-8 months for immigration goals</p>
                  </div>
                  
                  <div className="flex items-start gap-3 group hover:bg-[#f8f0fb] p-2 rounded-lg transition-all">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff]"></div>
                    </div>
                    <p className="text-[#211a1d]/80">You're ready to study consistently and complete assignments</p>
                  </div>
                  
                  <div className="flex items-start gap-3 group hover:bg-[#f8f0fb] p-2 rounded-lg transition-all">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff]"></div>
                    </div>
                    <p className="text-[#211a1d]/80">You want structure, accountability, and expert feedback</p>
                  </div>
                </div>
                
                {/* Perks */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 p-2 bg-[#f8f0fb]/50 rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6320ee]/20 to-[#8075ff]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff]"></div>
                    </div>
                    <span className="text-sm text-[#211a1d]/70">All material provided</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-[#f8f0fb]/50 rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6320ee]/20 to-[#8075ff]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff]"></div>
                    </div>
                    <span className="text-sm text-[#211a1d]/70">Bi-weekly 1:1</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-[#f8f0fb]/50 rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6320ee]/20 to-[#8075ff]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff]"></div>
                    </div>
                    <span className="text-sm text-[#211a1d]/70">Personal follow-up every other day</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-[#f8f0fb]/50 rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6320ee]/20 to-[#8075ff]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff]"></div>
                    </div>
                    <span className="text-sm text-[#211a1d]/70">24/7 support</span>
                  </div>
                </div>
                
                {/* Promise */}
                <div className="bg-gradient-to-r from-[#6320ee]/5 to-[#8075ff]/5 p-4 rounded-xl mb-6 border border-[#cad5ca]/30">
                  <p className="text-[#211a1d] text-sm font-medium flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#6320ee]" />
                    We'll build a simple plan, keep you accountable, and get you speaking by month 2
                  </p>
                </div>
                
                {/* Pricing */}
                <div className="border-t border-[#cad5ca]/20 pt-6">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-sm text-[#211a1d]/50 mb-1">Monthly investment</div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl text-[#211a1d]/40 line-through">$200</span>
                        <div className="text-3xl font-black bg-gradient-to-r from-[#6320ee] to-[#8075ff] bg-clip-text text-transparent">
                          $185<span className="text-lg text-[#211a1d]/60 font-semibold">/month</span>
                        </div>
                      </div>
                      <div className="text-xs text-[#6320ee] font-medium mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6320ee] animate-pulse"></span>
                        USD/month — Limited time
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                      Reserve Spot
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#6320ee]/10 to-[#8075ff]/10 rounded-2xl blur-xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-[#f8f0fb] to-[#cad5ca]/20 rounded-2xl blur-xl -z-10"></div>
            
            {/* Student avatars */}
            <div className="absolute -bottom-8 right-8 flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#6320ee] to-[#8075ff] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {i}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#211a1d] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                +1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm text-[#211a1d]/40 font-medium">Scroll to explore</div>
          <div className="w-6 h-10 rounded-full border-2 border-[#cad5ca]/50 flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6320ee] to-[#8075ff] animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;