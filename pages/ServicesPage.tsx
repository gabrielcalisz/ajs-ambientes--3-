import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, PhoneCall, Ruler, Calculator, Wrench } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES, COMPANY_INFO } from '../constants';
import { AnimatedSection } from '../components/AnimatedSection';

const ProcessStep = ({ icon: Icon, title, desc, step }: any) => (
  <div className="flex flex-col items-center text-center relative z-10">
    <div className="w-16 h-16 bg-white border-4 border-ajs-light text-ajs-primary rounded-full flex items-center justify-center mb-4 shadow-lg font-bold text-xl relative">
      <Icon size={28} />
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-ajs-lime rounded-full flex items-center justify-center text-xs font-bold text-ajs-secondary">
        {step}
      </div>
    </div>
    <h3 className="font-bold text-lg mb-2 text-ajs-primary">{title}</h3>
    <p className="text-sm text-gray-600 max-w-[200px]">{desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-20 bg-ajs-neutral relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ajs-primary mb-4">Como Funciona</h2>
          <p className="text-gray-600">Do primeiro contato até a instalação final</p>
        </AnimatedSection>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-1 bg-ajs-light/50 -z-0"></div>

          <AnimatedSection delay={0.1}>
            <ProcessStep icon={PhoneCall} step={1} title="Contato" desc="Você solicita um orçamento via Site ou WhatsApp." />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ProcessStep icon={Ruler} step={2} title="Visita/Medição" desc="Avaliamos o local e tiramos as medidas exatas." />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <ProcessStep icon={Calculator} step={3} title="Aprovação" desc="Enviamos o orçamento detalhado para sua aprovação." />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <ProcessStep icon={Wrench} step={4} title="Instalação" desc="Executamos o serviço com agilidade e limpeza." />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const ServiceImageCarousel = ({ images, title, icon: Icon }: { images: string[], title: string, icon: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl group h-[400px] w-full">
       <div className="absolute inset-0 bg-ajs-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
       
       {images.map((img, index) => (
         <img 
           key={img}
           src={img} 
           alt={`${title} - Visualização ${index + 1}`} 
           className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
         />
       ))}

      {/* Icon badge */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm text-ajs-primary z-20">
        <Icon size={32} />
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-ajs-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Qualidade técnica e acabamento superior em cada detalhe.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id}>
             <AnimatedSection className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <ServiceImageCarousel 
                  images={service.images} 
                  title={service.title} 
                  icon={service.icon} 
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-ajs-primary mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.fullDescription}
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Benefícios Principais:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="bg-ajs-light p-1 rounded-full text-ajs-secondary">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="primary" onClick={() => navigate('/contato')}>
                  Pedir orçamento de {service.title}
                </Button>
              </div>
            </AnimatedSection>
            
            {/* Call to Action Breaker every 2 items */}
            {index % 2 === 1 && index !== SERVICES.length - 1 && (
              <div className="w-full h-px bg-gray-200 my-16"></div>
            )}
          </div>
        ))}
      </div>

      <HowItWorks />

      <section className="py-20 bg-ajs-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar seu ambiente?</h2>
          <Button variant="lime" className="text-lg px-8 py-4" onClick={() => navigate('/contato')}>
            Solicitar Orçamento Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;