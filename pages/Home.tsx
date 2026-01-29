import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Instagram, ExternalLink, ChevronDown, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { SERVICES, COMPANY_INFO, FAQ_ITEMS } from '../constants';
import { AnimatedSection } from '../components/AnimatedSection';

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extrai a primeira imagem de cada serviço para o carrossel
  const heroImages = SERVICES.map(service => service.images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-10 overflow-hidden bg-gradient-to-br from-ajs-secondary via-ajs-primary to-green-900 text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ajs-lime/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 bg-ajs-lime/20 border border-ajs-lime/30 rounded-full text-ajs-lime text-sm font-semibold mb-6">
            Especialista em Ambientes
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Soluções sob medida para o <span className="text-ajs-lime">acabamento</span> do seu ambiente
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-lg">
            Redes de proteção, box blindex, telas mosquiteiras e muito mais. 
            Garantimos segurança e estética para sua casa ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="lime" onClick={() => navigate('/contato')}>
              Solicitar Orçamento
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ajs-primary" onClick={() => navigate('/servicos')}>
              Ver todos os serviços
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 h-[500px] w-full bg-ajs-secondary">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={currentImageIndex}
                src={heroImages[currentImageIndex]} 
                alt="Ambiente transformado pela AJS" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Overlay Gradient for better contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3">
            <div className="bg-ajs-lime/20 p-2 rounded-full text-ajs-primary">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <p className="font-bold text-ajs-primary text-lg">Qualidade</p>
              <p className="text-sm text-gray-500">Garantida</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ajs-primary mb-4">Serviços em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de soluções para renovar e proteger seu espaço com materiais de primeira linha.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <div 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-ajs-lime/30 h-full flex flex-col cursor-pointer overflow-hidden"
                onClick={() => navigate('/servicos')}
              >
                {/* Service Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.images[0]} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2.5 rounded-xl shadow-sm text-ajs-primary group-hover:bg-ajs-lime group-hover:text-ajs-secondary transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ajs-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-ajs-accent font-semibold text-sm group-hover:translate-x-2 transition-transform mt-auto">
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Acabamento Premium", desc: "Atenção minuciosa aos detalhes para um resultado estético impecável." },
    { title: "Atendimento Personalizado", desc: "Entendemos sua necessidade para oferecer a melhor solução técnica." },
    { title: "Materiais Certificados", desc: "Trabalhamos apenas com fornecedores de confiança e alta durabilidade." },
    { title: "Pontualidade", desc: "Compromisso rigoroso com os prazos de instalação combinados." },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
       {/* Background decorative blob */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-ajs-light/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <AnimatedSection className="flex justify-center items-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-sm"
          >
             {/* Soft shadow/Glow behind the card */}
             <div className="absolute inset-0 translate-y-4 translate-x-4 bg-ajs-primary/5 rounded-[2.5rem] blur-lg"></div>

             {/* The Mini Frame Card */}
            <div className="relative bg-white rounded-[2.5rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100/50">
              
              {/* Inner Frame Area */}
              <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-[2rem] overflow-hidden border border-gray-100 aspect-square flex items-center justify-center p-2 group">
                
                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 shadow-inner rounded-[2rem] pointer-events-none"></div>
                
                {/* Decorative background circle inside */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-ajs-lime/10 rounded-full blur-2xl group-hover:bg-ajs-lime/20 transition-colors duration-500"></div>

                <img 
                  src="https://imgur.com/FUMhAF9.png" 
                  alt="AJS Ambientes Logo" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-sm transform group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
              </div>

              {/* Bottom Badge/Caption embedded in card */}
              <div className="mt-6 flex justify-center">
                 <div className="flex items-center gap-2 text-ajs-primary/80 font-medium bg-ajs-neutral px-4 py-1.5 rounded-full text-sm">
                    <Star size={14} className="text-ajs-lime fill-current" />
                    <span>Excelência AJS</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ajs-light/30 text-ajs-secondary text-sm font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-ajs-accent animate-pulse"></span>
            Diferenciais Exclusivos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ajs-primary mb-6 leading-tight">
            Por que escolher a <br/>
            <span className="relative inline-block">
              AJS Ambientes?
              <span className="absolute bottom-1 left-0 w-full h-3 bg-ajs-lime/30 -z-10 transform -skew-x-12"></span>
            </span>
          </h2>
          <div className="space-y-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="mt-1 flex-shrink-0 bg-ajs-primary/10 p-2 rounded-lg h-fit text-ajs-primary">
                  <CheckCircle size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">{reason.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank')} className="shadow-ajs-lime/20">
              Falar com um especialista
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const Gallery = () => {
  // Imagens reais fornecidas
  const images = [
    "https://i.imgur.com/01av8kk.jpeg",
    "https://i.imgur.com/jJJJZvU.jpeg",
    "https://i.imgur.com/e0paYGK.jpeg",
    "https://i.imgur.com/U6YS6bp.jpeg",
    "https://i.imgur.com/DrybaRL.jpeg",
    "https://i.imgur.com/JhS6KPe.jpeg",
    "https://i.imgur.com/0n3iQu0.jpeg",
    "https://i.imgur.com/ycXz9cr.jpeg",
    "https://i.imgur.com/jETkEAp.jpeg",
    "https://i.imgur.com/si3tI4l.jpeg",
    "https://i.imgur.com/z1SuKn5.jpeg"
  ];

  return (
    <section className="py-20 bg-ajs-neutral">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ajs-primary">Nossos Trabalhos</h2>
          <p className="text-gray-600 mt-2">Confira algumas de nossas instalações recentes</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <AnimatedSection key={index} delay={index * 0.05} className="relative group overflow-hidden rounded-xl aspect-square shadow-sm">
              <img 
                src={src} 
                alt={`Trabalho AJS Ambientes ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium border border-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Ver projeto</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-ajs-primary to-ajs-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <Instagram size={48} className="mx-auto mb-4 text-ajs-lime" />
          <h2 className="text-3xl font-bold mb-4">Siga-nos no Instagram</h2>
          <p className="text-lg text-gray-200 mb-8">
            Acompanhe nosso dia a dia, dicas e mais fotos de serviços realizados.
          </p>
          <a 
            href={COMPANY_INFO.instagramUrl} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ajs-primary px-8 py-3 rounded-full font-bold hover:bg-ajs-lime transition-colors"
          >
            {COMPANY_INFO.instagram} <ExternalLink size={18} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ajs-primary">Perguntas Frequentes</h2>
        </AnimatedSection>
        
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <details className="group bg-gray-50 rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:shadow-md transition-all">
                <summary className="flex items-center justify-between font-bold text-gray-900 group-hover:text-ajs-primary">
                  {item.question}
                  <div className="bg-white p-1 rounded-full text-ajs-accent">
                    <ArrowRight className="transition-transform group-open:rotate-90" size={16} />
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pl-1">
                  {item.answer}
                </p>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Gallery />
      <InstagramSection />
      <FAQ />
    </div>
  );
};

export default Home;