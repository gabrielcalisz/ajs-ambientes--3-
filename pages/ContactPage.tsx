import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO, SERVICES } from '../constants';
import { AnimatedSection } from '../components/AnimatedSection';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-ajs-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-xl text-gray-200">Estamos prontos para atender você.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-sm p-8 h-full">
              <h2 className="text-2xl font-bold text-ajs-primary mb-8">Canais de Atendimento</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-ajs-light/30 p-3 rounded-lg text-ajs-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefone / WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Atendimento ágil para orçamentos.</p>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
                      className="text-ajs-accent font-semibold hover:underline"
                    >
                      (21) 98186-9658
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-ajs-light/30 p-3 rounded-lg text-ajs-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                    <p className="text-gray-600 mb-2">Envie projetos ou dúvidas.</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-ajs-accent font-semibold hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-ajs-light/30 p-3 rounded-lg text-ajs-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Área de Atuação</h3>
                    <p className="text-gray-600">
                      {COMPANY_INFO.address}.<br/>
                      Consulte a disponibilidade para seu bairro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p>Mapa da Região</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form Side */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-ajs-lime">
              <h2 className="text-2xl font-bold text-ajs-primary mb-2">Solicite um Orçamento</h2>
              <p className="text-gray-600 mb-8">Preencha o formulário e retornaremos em breve.</p>

              {formStatus === 'success' ? (
                <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center flex flex-col items-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="mb-6">Obrigado pelo contato. Nossa equipe retornará o mais breve possível.</p>
                  <Button variant="outline" onClick={() => setFormStatus('idle')}>
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ajs-accent focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ajs-accent focus:border-transparent outline-none transition-all"
                        placeholder="(21) 98186-9658"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Interesse</label>
                      <select 
                        id="service" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ajs-accent focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Selecione um serviço...</option>
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="outro">Outro / Dúvida Geral</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ajs-accent focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Descreva o que você precisa (ex: medidas aproximadas, bairro, etc.)"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    fullWidth 
                    variant="primary"
                    disabled={formStatus === 'submitting'}
                    className="flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : (
                      <>Enviar Solicitação <Send size={18} /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;