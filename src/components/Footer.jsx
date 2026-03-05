import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

import logo1 from "../assets/logo1.jpg"
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const programs = [
    { label: 'Exam Mastery', href: '#exam-mastery' },
    { label: 'Foundations (A0 → A2)', href: '#foundations' },
    { label: 'Fluency Builder (B1 → B2)', href: '#fluency' },
    { label: 'Conversation Circles', href: '#conversation' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-4 h-4" />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-white border-t border-[#CADADF]/30 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-2xl  p-0.5">
                              {/* <div className="w-full h-full rounded-2xl bg-[#F6FCFB] flex items-center justify-center p-1"> */}
                                <img 
                                  src={logo1} 
                                  alt="The Bridge French" 
                                  className="w-full h-full object-contain"
                                />
                              {/* </div> */}
                            </div>
              <span className="font-black text-base sm:text-xl">
                <span className="text-[#211a1d]">The Bridge</span>
                <span className="bg-gradient-to-r from-[#005D6D] to-[#6C8F99] bg-clip-text text-transparent">French</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#211a1d]/60 leading-relaxed">
              Small group French classes for TCF/TEF preparation and fluency. 
              Learn together with peers at your level.
            </p>
            
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#211a1d] mb-4 sm:mb-5 text-xs sm:text-sm tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-xs sm:text-sm text-[#211a1d]/70 hover:text-[#005D6D] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#CADADF] group-hover:bg-[#005D6D] transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-[#211a1d] mb-4 sm:mb-5 text-xs sm:text-sm tracking-wider">PROGRAMS</h4>
            <ul className="space-y-2 sm:space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-xs sm:text-sm text-[#211a1d]/70 hover:text-[#005D6D] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#CADADF] group-hover:bg-[#005D6D] transition-colors"></span>
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="font-bold text-[#211a1d] mb-4 sm:mb-5 text-xs sm:text-sm tracking-wider">CONTACT</h4>
            
            <div className="space-y-2 sm:space-y-3">
              <a href="mailto:hello@thebridgefrench.com" className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#211a1d]/70 hover:text-[#005D6D] transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>hello@thebridgefrench.com</span>
              </a>
              
              <a href="tel:+1234567890" className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#211a1d]/70 hover:text-[#005D6D] transition-colors">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#211a1d]/70">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 mt-0.5" />
                <span>Online • Available worldwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#F6FCFB] hover:bg-gradient-to-r hover:from-[#005D6D] hover:to-[#6C8F99] text-[#211a1d] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#CADADF] hover:border-transparent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-[#F6FCFB] to-[#F6FCFB]/50 rounded-xl p-4 sm:p-5 border border-[#CADADF]/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#005D6D]" />
                <div>
                  <h4 className="font-semibold text-[#211a1d] text-sm sm:text-base">Stay updated</h4>
                  <p className="text-xs text-[#211a1d]/60">Get tips, updates, and special offers</p>
                </div>
              </div>
              
              <div className="flex w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full sm:w-64 px-3 sm:px-4 py-2 bg-white border border-[#CADADF] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#005D6D] text-xs sm:text-sm"
                  />
                  <button className="px-4 sm:px-5 py-2 bg-gradient-to-r from-[#005D6D] to-[#6C8F99] text-white font-semibold rounded-lg hover:shadow-lg transition-all whitespace-nowrap text-xs sm:text-sm flex items-center justify-center gap-1">
                    Subscribe
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        
        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t border-[#CADADF]/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="text-[10px] sm:text-xs text-[#211a1d]/40 flex items-center gap-2">
              <span>© {currentYear} The Bridge French. All rights reserved.</span>
              <span className="w-1 h-1 rounded-full bg-[#CADADF] hidden sm:inline-block"></span>
            </div>
            
            <div className="flex items-center gap-4 text-[10px] sm:text-xs">
              <a href="#privacy" className="text-[#211a1d]/40 hover:text-[#005D6D] transition-colors">Privacy</a>
              <a href="#terms" className="text-[#211a1d]/40 hover:text-[#005D6D] transition-colors">Terms</a>
              <a href="#cookies" className="text-[#211a1d]/40 hover:text-[#005D6D] transition-colors">Cookies</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;