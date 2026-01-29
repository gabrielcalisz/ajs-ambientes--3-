import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Instagram, MapPin, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { COMPANY_INFO } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-200 shadow-md py-2 md:py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo + Texto */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer py-1" onClick={() => navigate('/')}>
          <div className="h-10 md:h-16 w-auto flex items-center justify-start overflow-hidden">
             <img 
              src="https://imgur.com/FUMhAF9.png" 
              alt="AJS Ambientes Logo" 
              className="h-full w-auto object-contain" 
            />
          </div>
          <span className="font-black text-lg md:text-2xl text-ajs-primary tracking-tight whitespace-nowrap">
            AJS AMBIENTES
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-base font-bold tracking-wide transition-colors hover:text-ajs-accent ${isActive ? 'text-ajs-accent' : 'text-ajs-primary'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button 
            variant="lime" 
            className="px-6 py-2.5 text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => navigate('/contato')}
          >
            ORÇAMENTO
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ajs-primary p-2 hover:bg-gray-300 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-lg font-bold py-3 border-b border-gray-100 ${isActive ? 'text-ajs-accent pl-2' : 'text-ajs-primary'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button 
                variant="lime" 
                fullWidth 
                className="mt-4 font-bold text-lg py-4"
                onClick={() => navigate('/contato')}
              >
                SOLICITAR ORÇAMENTO
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ajs-secondary text-gray-300 border-t border-ajs-primary relative">
      {/* Map Section */}
      <div className="w-full h-72 md:h-96 relative bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235197.2447957771!2d-43.58597395045612!3d-22.91326463973307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1709920000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.3)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Atuação - Rio de Janeiro"
        ></iframe>
        
        {/* CTA Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-ajs-primary/90 backdrop-blur-md p-4 md:p-6 border-t border-ajs-lime/30">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
            <span className="text-white text-base md:text-lg font-medium">
              Quer contratar a AJS Ambientes fora do estado?
            </span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, sou de outro estado e gostaria de um orçamento.`} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-ajs-lime font-bold hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
            >
              Orce conosco <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 bg-white/10 p-2 rounded-lg w-fit">
              <div className="h-12 w-auto flex items-center justify-center overflow-hidden">
                 <img src="https://imgur.com/FUMhAF9.png" alt="AJS Logo" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Transformando espaços com segurança, qualidade e acabamento impecável. 
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="bg-ajs-primary p-2 rounded-full hover:bg-ajs-accent transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="bg-ajs-primary p-2 rounded-full hover:bg-ajs-accent transition-colors text-white">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Navegação</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:text-ajs-lime transition-colors">Início</NavLink></li>
              <li><NavLink to="/servicos" className="hover:text-ajs-lime transition-colors">Serviços</NavLink></li>
              <li><NavLink to="/contato" className="hover:text-ajs-lime transition-colors">Contato</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-ajs-lime shrink-0" size={20} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-ajs-lime shrink-0" size={20} />
                <span>(21) 98186-9658</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-ajs-lime shrink-0" size={20} />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ajs-primary pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AJS Ambientes. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com tecnologia moderna.</p>
        </div>
      </div>
    </footer>
  );
};

const MobileStickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur border-t border-gray-200 z-40 animate-fade-in-up">
      <Button variant="primary" fullWidth onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank')}>
        <span className="flex items-center justify-center gap-2">
          <Phone size={18} /> Orçar Agora
        </span>
      </Button>
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};