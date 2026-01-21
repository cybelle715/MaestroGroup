import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'Method', href: '#method' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-[#f8f0fb]/80 backdrop-blur-xl border-b border-[#cad5ca]/30"></div>
      
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          
          {/* Logo with gradient */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#6320ee] via-[#8075ff] to-[#6320ee] p-0.5">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <div className="text-transparent bg-gradient-to-r from-[#6320ee] to-[#8075ff] bg-clip-text font-black text-xl">
                    MG
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6320ee] to-[#8075ff] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            
            <div className="hidden sm:block">
              <div className="font-black text-2xl tracking-tight">
                <span className="text-[#211a1d]">Maestro</span>
                <span className="bg-gradient-to-r from-[#6320ee] to-[#8075ff] bg-clip-text text-transparent">Group</span>
              </div>
              <div className="text-xs text-[#211a1d]/60 -mt-1 tracking-wider font-medium">
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
                className="relative px-5 py-2.5 text-[#211a1d]/80 font-medium group overflow-hidden rounded-xl"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6320ee]/0 via-[#8075ff]/0 to-[#6320ee]/0 group-hover:from-[#6320ee]/5 group-hover:via-[#8075ff]/5 group-hover:to-[#6320ee]/5 transition-all duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6320ee] to-[#8075ff] group-hover:w-4/5 transition-all duration-300"></div>
                
                {/* Floating dots (modern touch) */}
                <div className="absolute -top-2 -right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1 h-1 bg-[#6320ee] rounded-full absolute top-0 left-0"></div>
                  <div className="w-1 h-1 bg-[#8075ff] rounded-full absolute bottom-0 right-0"></div>
                </div>
              </a>
            ))}
            
            {/* CTA Button with glow effect */}
            <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#6320ee]/30 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group">
              <span className="relative z-10">Join Group</span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6320ee] to-[#8075ff] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 hover:from-[#6320ee]/20 hover:to-[#8075ff]/20 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-[#211a1d]" />
            ) : (
              <Menu className="w-5 h-5 text-[#211a1d]" />
            )}
            
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#6320ee] to-[#8075ff] rounded-full animate-pulse">
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
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#cad5ca]/20 overflow-hidden animate-slideDown">
              {/* Gradient top bar */}
              <div className="h-1 bg-gradient-to-r from-[#6320ee] via-[#8075ff] to-[#6320ee]"></div>
              
              <div className="p-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-[#f8f0fb] transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-[#211a1d] font-medium">{item.label}</span>
                    
                    {/* Arrow indicator */}
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 border-r-2 border-b-2 border-[#211a1d]/30 transform rotate-45 group-hover:border-[#6320ee] group-hover:translate-x-1 transition-all"></div>
                    </div>
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <button className="w-full mt-2 px-6 py-3.5 bg-gradient-to-r from-[#6320ee] to-[#8075ff] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 relative overflow-hidden group">
                  <span className="relative z-10">Join Next Group</span>
                  
                  {/* Limited seats badge */}
                  <div className="absolute -top-2 -right-2">
                    <div className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[#211a1d] text-xs font-bold rounded-full border border-[#cad5ca]">
                      3 spots left
                    </div>
                  </div>
                </button>
                
                {/* Contact info */}
                <div className="mt-4 pt-4 border-t border-[#cad5ca]/20">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#f8f0fb]/50">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6320ee]/10 to-[#8075ff]/10 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-[#6320ee] to-[#8075ff] rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm text-[#211a1d]/60">Questions?</div>
                      <a href="tel:+1234567890" className="text-[#211a1d] font-medium hover:text-[#6320ee] transition-colors">
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