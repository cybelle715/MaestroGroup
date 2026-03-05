import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

// Import your logo image
import logo from '../assets/logo1.jpg'; // Adjust the path to where you saved the logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Programs', href: '#programs' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-[#F6FCFB]/80 backdrop-blur-xl border-b border-[#CADADF]/30"></div>
      
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl  p-0.5">
                {/* <div className="w-full h-full rounded-2xl bg-[#F6FCFB] flex items-center justify-center p-1"> */}
                  <img 
                    src={logo} 
                    alt="The Bridge French" 
                    className="w-full h-full object-contain"
                  />
                {/* </div> */}
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            
            <div className="hidden sm:block">
              <div className="font-black text-2xl tracking-tight">
                <span className="text-[#005D6D]">The Bridge</span>
                <span className="text-[#6C8F99] ml-1">French</span>
              </div>
              <div className="text-xs text-[#005D6D]/60 -mt-1 tracking-wider font-medium">
                LEARN FRENCH TOGETHER
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-5 py-2.5 text-[#005D6D]/80 hover:text-[#005D6D] font-medium group overflow-hidden rounded-xl"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#005D6D]/0 via-[#6C8F99]/0 to-[#005D6D]/0 group-hover:from-[#005D6D]/5 group-hover:via-[#6C8F99]/5 group-hover:to-[#005D6D]/5 transition-all duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] group-hover:w-4/5 transition-all duration-300"></div>
              </a>
            ))}
            
            {/* Book a Free Call Button */}
            <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#005D6D]/30 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="relative z-10">Book a Free Call</span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#005D6D]/10 to-[#6C8F99]/10 hover:from-[#005D6D]/20 hover:to-[#6C8F99]/20 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-[#005D6D]" />
            ) : (
              <Menu className="w-5 h-5 text-[#005D6D]" />
            )}
            
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] rounded-full animate-pulse">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            {/* Backdrop blur */}
            <div className="fixed inset-0 top-16 bg-black/10 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
            
            {/* Menu panel */}
            <div className="relative bg-[#F6FCFB]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#CADADF]/20 overflow-hidden animate-slideDown">
              {/* Gradient top bar */}
              <div className="h-1 bg-gradient-to-r from-[#005D6D] via-[#6C8F99] to-[#005D6D]"></div>
              
              <div className="p-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-[#CADADF]/20 transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-[#005D6D] font-medium">{item.label}</span>
                    
                    {/* Arrow indicator */}
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 border-r-2 border-b-2 border-[#005D6D]/30 transform rotate-45 group-hover:border-[#005D6D] group-hover:translate-x-1 transition-all"></div>
                    </div>
                  </a>
                ))}
                
                {/* Mobile CTA - Book a Free Call */}
                <button className="w-full mt-2 px-6 py-3.5 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 relative overflow-hidden group flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="relative z-10">Book a Free Call</span>
                </button>
                
                {/* Contact info */}
                <div className="mt-4 pt-4 border-t border-[#CADADF]/20">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#CADADF]/20">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#005D6D]/10 to-[#6C8F99]/10 flex items-center justify-center">
                      <img 
                        src={logo} 
                        alt="The Bridge French" 
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-[#005D6D]/60">Questions?</div>
                      <a href="tel:+1234567890" className="text-[#005D6D] font-medium hover:text-[#6C8F99] transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;