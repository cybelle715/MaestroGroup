import { Play, Users, Zap, ChevronRight, GraduationCap, Award, BookOpen, MessageCircle, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 sm:pt-20 md:pt-24 overflow-hidden relative">
      
      {/* Background gradient orbs - responsive sizing */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-[#005D6D]/20 to-[#6C8F99]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-[#F6FCFB] to-[#CADADF]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-t from-[#005D6D]/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#CADADF]/50 shadow-sm">
              <span className="text-xs sm:text-sm font-medium text-[#211a1d]/70">
                TEF/TCF Specialist For Beginners
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
              <span className="text-[#211a1d]">From zero </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#005D6D] via-[#6C8F99] to-[#005D6D] bg-clip-text text-transparent animate-gradient">
                to TCF/TEF ready in 6/8 months.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#211a1d]/60 leading-relaxed max-w-xl">
              Join our curated small-group cohorts and get speaking by month 2.
            </p>

            {/* Stats - Stack on mobile, row on tablet+ */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">

              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-[#CADADF]/20 hover:border-[#005D6D]/30 transition-all">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-[#005D6D]/10 to-[#6C8F99]/10 flex items-center justify-center">
                  <Users className="w-5 sm:w-6 h-5 sm:h-6 text-[#005D6D]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#211a1d]">4 max</div>
                  <div className="text-xs sm:text-sm text-[#211a1d]/60 whitespace-nowrap">
                    Students per group
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-[#CADADF]/20 hover:border-[#005D6D]/30 transition-all">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-[#005D6D]/10 to-[#6C8F99]/10 flex items-center justify-center">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-[#6C8F99]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#211a1d]">2x/week</div>
                  <div className="text-xs sm:text-sm text-[#211a1d]/60 whitespace-nowrap">
                    Live sessions
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-[#CADADF]/20 hover:border-[#005D6D]/30 transition-all">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-[#005D6D]/10 to-[#6C8F99]/10 flex items-center justify-center">
                  <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-[#005D6D]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#211a1d]">TEF/TCF</div>
                  <div className="text-xs sm:text-sm text-[#211a1d]/60 whitespace-nowrap">
                    Exam-focused
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-8">

              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#005D6D]/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Join a Group
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <div className="absolute -inset-1 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>

              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border-2 border-[#CADADF] text-[#211a1d] font-semibold rounded-xl sm:rounded-2xl hover:border-[#005D6D]/30 hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-[#005D6D]/10 to-[#6C8F99]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 text-[#005D6D] ml-0.5" />
                </div>
                <span className="text-sm sm:text-base">Watch Demo Class</span>
              </button>

            </div>

          </div>

          {/* Right Content */}
          <div className="relative mt-8 lg:mt-0">

            <div className="bg-white/90 backdrop-blur-md md:backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-[#CADADF]/20 overflow-hidden">

              <div className="p-4 sm:p-6 border-b border-[#CADADF]/20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <div>
                    <div className="text-xs sm:text-sm text-[#211a1d]/50">Next cohort starts</div>
                    <div className="text-xl sm:text-2xl font-bold text-[#211a1d]">
                      March 15, 2026
                    </div>
                  </div>

                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#005D6D]/10 to-[#6C8F99]/10 rounded-full">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-semibold text-[#211a1d]">
                        Only 3 spots left
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-4 sm:p-6">

                <h3 className="text-lg sm:text-xl font-bold text-[#005D6D] mb-4">
                  Who this is for
                </h3>

                <div className="mb-6 space-y-2">
                  <p className="text-[#]/80 text-xs font-bold sm:text-sm">
                    You're starting from zero—or close to it
                  </p>

                  <p className="text-[#]/80 text-xs font-bold  sm:text-sm">
                    You want TEF/TCF results in 6-8 months for immigration goals
                  </p>

                  <p className="text-[#]/80 text-xs font-bold  sm:text-sm">
                    You're ready to study consistently and complete assignments
                  </p>

                  <p className="text-[#]/80 text-xs font-bold  sm:text-sm">
                    You want structure, accountability, and expert feedback
                  </p>
                </div>

                {/* Perks */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">

                  <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-[#F6FCFB] rounded-lg">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[#005D6D]" />
                    <span className="text-[10px] sm:text-xs font-bold text-[#211a1d]/70 whitespace-nowrap">
                      All material provided
                    </span>
                  </div>

                  <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-[#F6FCFB] rounded-lg">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#005D6D]" />
                    <span className="text-[10px] sm:text-xs font-bold text-[#211a1d]/70 whitespace-nowrap">
                      Bi-weekly 1:1
                    </span>
                  </div>

                  <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-[#F6FCFB] rounded-lg">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#005D6D]" />
                    <span className="text-[10px] sm:text-xs font-bold text-[#211a1d]/70">
                      Follow-up every other day
                    </span>
                  </div>

                  <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-[#F6FCFB] rounded-lg">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#005D6D]" />
                    <span className="text-[10px] sm:text-xs font-bold text-[#211a1d]/70 whitespace-nowrap">
                      24/7 support
                    </span>
                  </div>

                </div>

                {/* Promise */}
                <div className="bg-gradient-to-r from-[#005D6D]/5 to-[#6C8F99]/5 p-3 sm:p-4 rounded-xl mb-6 border border-[#CADADF]/30">
                  <p className="text-[#211a1d] text-xs sm:text-sm font-medium flex items-center gap-2">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#005D6D]" />
                    <span className="leading-relaxed">
                      We'll build a simple plan, keep you accountable, and get you speaking by month 2
                    </span>
                  </p>
                </div>

                {/* Pricing */}
                <div className="border-t border-[#CADADF]/20 pt-4 sm:pt-6">

                  <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0">

                    <div>
                      <div className="text-xs text-[#211a1d]/50 mb-1">
                        Monthly investment
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl text-[#211a1d]/40 line-through">
                          $200
                        </span>

                        <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#005D6D] to-[#6C8F99] bg-clip-text text-transparent">
                          $185
                          <span className="text-sm sm:text-lg text-[#211a1d]/60 font-semibold">
                            /month
                          </span>
                        </div>
                      </div>

                      <div className="text-[10px] sm:text-xs text-[#005D6D] font-medium mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#005D6D] animate-pulse"></span>
                        Limited time offer
                      </div>

                    </div>

                    <button className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                      Reserve Spot
                    </button>

                  </div>

                </div>

              </div>

            </div>

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