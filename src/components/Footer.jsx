import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

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
    <footer className="bg-white border-t border-[#cad5ca]/30 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#6320ee] to-[#8075ff] flex items-center justify-center">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <span className="font-black text-xl">
                <span className="text-[#211a1d]">Maestro</span>
                <span className="bg-gradient-to-r from-[#6320ee] to-[#8075ff] bg-clip-text text-transparent">Group</span>
              </span>
            </div>
            
            <p className="text-sm text-[#211a1d]/60 leading-relaxed">
              Small group French classes for TCF/TEF preparation and fluency. 
              Learn together with peers at your level.
            </p>
            
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-[#6320ee] to-[#8075ff] flex items-center justify-center text-white font-bold text-xs">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-xs text-[#211a1d]/40">+500 students</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#211a1d] mb-5 text-sm tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-[#211a1d]/70 hover:text-[#6320ee] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#cad5ca] group-hover:bg-[#6320ee] transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-[#211a1d] mb-5 text-sm tracking-wider">PROGRAMS</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-sm text-[#211a1d]/70 hover:text-[#6320ee] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#cad5ca] group-hover:bg-[#6320ee] transition-colors"></span>
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-5">
            <h4 className="font-bold text-[#211a1d] mb-5 text-sm tracking-wider">CONTACT</h4>
            
            <div className="space-y-3">
              <a href="mailto:hello@maestrogroup.com" className="flex items-center gap-3 text-sm text-[#211a1d]/70 hover:text-[#6320ee] transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@maestrogroup.com</span>
              </a>
              
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-[#211a1d]/70 hover:text-[#6320ee] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              
              <div className="flex items-start gap-3 text-sm text-[#211a1d]/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Online • Available worldwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-[#f8f0fb] hover:bg-gradient-to-r hover:from-[#6320ee] hover:to-[#8075ff] text-[#211a1d] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#cad5ca] hover:border-transparent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
      {/* Trust Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-4 px-4 py-2 bg-[#f8f0fb] rounded-full text-xs text-[#211a1d]/60 border border-[#cad5ca]/30">
            <span>🔒 Secure payment</span>
            <span className="w-1 h-1 rounded-full bg-[#cad5ca]"></span>
            <span>⏱️ Cancel anytime</span>
            <span className="w-1 h-1 rounded-full bg-[#cad5ca]"></span>
            <span>🎓 500+ students</span>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#cad5ca]/30 flex items-center justify-center gap-4">
          <div className="text-xs text-[#211a1d]/40 flex items-center gap-2">
            <span>© {currentYear} MaestroGroup. All rights reserved.</span>
            <span className="w-1 h-1 rounded-full bg-[#cad5ca]"></span>
          </div>
          
         
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;