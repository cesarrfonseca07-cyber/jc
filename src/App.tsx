/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Droplets, 
  Sparkles, 
  Waves, 
  Snowflake, 
  Zap, 
  ShieldCheck, 
  Mountain, 
  Eye, 
  ChevronRight, 
  ChevronLeft,
  MessageCircle,
  Instagram,
  Facebook,
  CheckCircle2,
  Leaf,
  FileText,
  Video,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_NAME, PRICES, STEPS, BENEFITS } from './constants';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-moss/95 backdrop-blur-md border-b border-brand-brown/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
            <Leaf className="text-brand-moss w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-brand-ivory hidden sm:block tracking-widest text-sm">Termal Botanic Ritual</span>
        </div>
        <div className="flex gap-4 sm:gap-8 text-xs font-semibold uppercase tracking-widest text-brand-ivory/80">
          <a href="#experiencia" className="hover:text-brand-gold transition-colors">Experiencia</a>
          <a href="#precios" className="hover:text-brand-gold transition-colors">Precios</a>
          <a href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-ivory/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-moss rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-brown rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-brand-gold uppercase bg-brand-moss rounded-full">
              Paipa, Boyacá • Top 3 Mundial
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-extrabold text-brand-moss mb-6 leading-tight uppercase">
              {PRODUCT_NAME}
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-brand-moss/80 mb-10 leading-relaxed font-light">
              Unge y absorbe el exceso de grasa. Combate barros y espinillas. Por su alta concentración mineral, nutre tu piel dejándola siempre bella.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/584245048325?text=Hola!%20Deseo%20una%20asesoría%20de%20belleza%20y%20conocer%20más%20de%20la%20mascarilla" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 bg-brand-moss text-brand-ivory font-bold rounded-full hover:bg-brand-moss/90 transition-all shadow-xl shadow-brand-moss/20 group uppercase tracking-[0.2em] text-xs"
              >
                <MessageCircle className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Asesoría de Belleza Directa
              </a>
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-brand-moss/40 font-bold">
              Atención personalizada vía WhatsApp
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:flex-1 relative mt-8 lg:mt-0"
          >
            <div className="relative w-full h-[30rem] sm:h-[36rem] lg:h-[40rem] mx-auto group">
              {/* Spa Environment Background */}
              <div className="absolute inset-0 bg-[#fdfbf7] rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white/50 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1600" 
                  alt="Ambiente Spa" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                {/* Blurred towels and marble background simulation */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-transparent to-brand-cream/40 backdrop-blur-[1px]" />
                
                {/* Side Window Light Effect (Zenital-Lateral) */}
                <div className="absolute -left-10 top-0 w-80 h-full bg-white/60 blur-[100px] -rotate-12" />
                
                {/* Background Towels (Visual Simulation) */}
                <div className="absolute -right-10 top-20 w-48 h-32 bg-white rounded-xl shadow-lg rotate-12 opacity-60 blur-[2px]" />
                <div className="absolute -right-5 top-28 w-48 h-32 bg-white rounded-xl shadow-lg rotate-6 opacity-40 blur-[4px]" />
              </div>

              {/* Marble Base (Cream and Gold tones) */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[95%] h-36 bg-gradient-to-br from-[#fdfbf7] via-[#f5e6d3] to-[#d4c3a3] rounded-[100%] shadow-2xl border-b-8 border-[#c4b393]/50 overflow-hidden transform rotate-x-60 z-10">
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/marble-white.png')]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* The Product Jars (Realistic CSS Implementation) */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-6 md:gap-12 pb-8 sm:pb-16 z-20">
                {[1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ rotateY: i === 1 ? -15 : 15, y: i === 1 ? -10 : 10 }}
                    whileHover={{ scale: 1.05, rotateY: i === 1 ? -5 : 5, y: i === 1 ? -20 : 20 }}
                    className={`relative w-32 h-40 sm:w-64 sm:h-72 md:w-80 md:h-88 transition-all duration-700`}
                    style={{ perspective: '1000px' }}
                  >
                    {/* Jar Body (Cylindrical, Robust, White Matte) */}
                    <div 
                      className="absolute inset-0 bg-[#FDFDFD] rounded-[2rem] sm:rounded-[3rem] shadow-[inset_-10px_0_20px_rgba(0,0,0,0.05),inset_10px_0_20px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-zinc-100"
                      style={{ transform: i === 1 ? 'rotateY(-10deg)' : 'rotateY(10deg)' }}
                    >
                      
                      {/* Side Lighting Highlight */}
                      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/80 to-transparent opacity-50" />
                      
                      {/* Label (Dark Moss Green #4A5E4D, Cracked Clay Texture) */}
                      <div className="absolute inset-x-0 top-[55%] -translate-y-1/2 h-[65%] bg-[#4A5E4D] border-y border-[#3A4E3D] flex flex-col p-4 sm:p-6 md:p-8 text-left overflow-hidden shadow-inner">
                        {/* Subtle Cracked Clay Texture Overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                        
                        {/* Logo & Collection */}
                        <div className="mb-2 sm:mb-4">
                          <span className="font-cursive text-[#D4AF37] text-xl sm:text-2xl md:text-3xl leading-none block drop-shadow-sm">Termales</span>
                          <p className="text-[6px] sm:text-[8px] md:text-[10px] text-white/80 uppercase tracking-[0.2em] font-light">Termal Botanic Ritual</p>
                        </div>

                        {/* Main Title */}
                        <h4 className="text-[#F7F3E0] text-xs sm:text-base md:text-xl font-serif font-bold uppercase tracking-widest leading-tight mb-1">
                          Mascarilla Facial
                        </h4>
                        
                        {/* Subtitle */}
                        <p className="text-[#D4AF37] text-[8px] sm:text-[10px] md:text-xs font-medium italic mb-2 sm:mb-4">
                          línea exfoliante - Lodo
                        </p>

                        {/* Benefits */}
                        <p className="text-white text-[5px] sm:text-[7px] md:text-[9px] leading-relaxed font-light max-w-[85%]">
                          Aplica y absorbe el exceso de grasa. Combate barros y espinillas. Por su alta concentración mineral, nutre tu piel dejándola siempre bella.
                        </p>

                        {/* 120 Grs Seal (Circular, Cream/Gold) */}
                        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#F7F3E0] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg transform rotate-12">
                          <span className="text-[#4A5E4D] font-bold text-[6px] sm:text-[8px] md:text-[10px]">120 Grs</span>
                        </div>
                      </div>

                      {/* Bottom Shadow/Depth */}
                      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/5 to-transparent" />
                    </div>

                    {/* Cap (Black/Dark Matte, Screw Cap) */}
                    <div className="absolute -top-2 inset-x-4 h-10 sm:h-14 md:h-16 bg-[#1A1A1A] rounded-t-2xl sm:rounded-t-3xl shadow-xl border-b-4 border-black/20 flex flex-col justify-center px-2">
                      {/* Screw Ridges */}
                      <div className="w-full h-full flex justify-around items-center opacity-20">
                        {[...Array(12)].map((_, idx) => (
                          <div key={idx} className="w-[1px] h-full bg-white/30" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Soft Shadow on Base */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 blur-2xl rounded-full -z-10" />
                  </motion.div>
                ))}
              </div>

              {/* Accessories */}
              {/* Polished River Stones */}
              <div className="absolute bottom-24 left-1/4 w-14 h-10 bg-zinc-800 rounded-full blur-[0.5px] shadow-xl opacity-90" />
              <div className="absolute bottom-28 right-1/4 w-10 h-8 bg-zinc-900 rounded-full blur-[0.5px] shadow-xl opacity-95" />
              <div className="absolute bottom-20 left-[45%] w-8 h-6 bg-zinc-700 rounded-full blur-[1px] shadow-lg opacity-80" />
              
              {/* Lavender and Green Leaves */}
              <div className="absolute bottom-12 left-12 w-28 h-28 text-brand-moss opacity-50 rotate-12">
                <Leaf className="w-full h-full" />
              </div>
              <div className="absolute bottom-16 left-20 w-12 h-12 text-purple-400/40 -rotate-12">
                <Sparkles className="w-full h-full" />
              </div>
              <div className="absolute top-24 right-16 w-20 h-20 text-brand-gold/20 -rotate-45">
                <Sparkles className="w-full h-full" />
              </div>

              {/* Mud Bowl (Artisanal concept) */}
              <div className="absolute bottom-20 right-16 w-24 h-24 bg-white/40 rounded-full border-4 border-white/60 backdrop-blur-md shadow-2xl flex items-center justify-center">
                <div className="w-18 h-18 bg-brand-moss/90 rounded-full shadow-inner relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                </div>
                {/* Wooden Spoon */}
                <div className="absolute -bottom-2 -right-4 w-20 h-4 bg-[#8b5a2b] rounded-full shadow-md transform -rotate-45 border-b-2 border-black/20" />
              </div>

              {/* Final Logo Detail (Discreet on Marble) */}
              <div className="absolute bottom-8 right-16 text-right opacity-50">
                <span className="font-cursive text-brand-gold text-xl">Termales</span>
                <p className="text-[7px] text-brand-moss uppercase tracking-[0.4em]">Termal Botanic Ritual</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OriginSection = () => (
  <section className="py-24 bg-brand-ivory relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Herencia y Pureza</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-moss leading-tight">
              Desde el corazón de <span className="text-brand-gold text-nowrap">Paipa, Boyacá (Colombia)</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-brand-moss/80 text-lg leading-relaxed font-light">
            <p>
              Nuestra mascarilla nace en las profundidades de Colombia, en una de las fuentes termales más privilegiadas del planeta. Las aguas de Paipa no son solo agua: son un elixir mineral cargado de historia y salud.
            </p>
            <p className="text-base">
              Estas mascarillas son traídas directamente desde Paipa, Boyacá, una región reconocida por la comunidad internacional como la <strong>"Capital Mundial del Termalismo"</strong> por albergar <strong>Termatalia 2025</strong>, la feria internacional más importante del sector.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Controlar el exceso de grasa y eliminar imperfecciones",
                desc: "Los minerales como el azufre y el magnesio regulan la producción de sebo, combatiendo barros, espinillas y puntos negros."
              },
              {
                title: "Reducir arrugas y atenuar manchas de la edad",
                desc: "Su acción renovadora acelera la regeneración celular, suaviza líneas de expresión y unifica el tono de la piel."
              },
              {
                title: "Calmar irritaciones y fortalecer la barrera natural",
                desc: "Las propiedades antiinflamatorias y cicatrizantes alivian rojeces, picazón y sensibilidad, dejando la piel más resistente y saludable."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 bg-brand-moss/5 p-5 rounded-3xl border border-brand-moss/10 hover:bg-brand-moss/10 transition-colors group">
                <div className="w-10 h-10 bg-brand-moss rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors">
                  <Sparkles className="text-brand-gold w-5 h-5 group-hover:text-brand-moss" />
                </div>
                <div>
                  <h4 className="text-brand-moss font-bold text-sm mb-1 uppercase tracking-wider">{benefit.title}</h4>
                  <p className="text-brand-moss/70 text-xs leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square bg-brand-moss/20 border-8 border-white/50"
        >
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200" 
            alt="Termales de Paipa Boyaca" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-moss/5" />
          <div className="absolute bottom-8 left-8 right-8 z-10 drop-shadow-lg">
            <p className="text-brand-ivory text-sm font-bold tracking-[0.2em] uppercase">Paipa, Boyacá • Colombia</p>
            <p className="text-brand-gold text-xs italic">El origen de la belleza eterna</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-brand-moss relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-ivory mb-4 tracking-[0.2em] uppercase">Beneficios Completos</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, idx) => {
          const Icon = { Zap, ShieldCheck, Mountain, Eye, Sparkles, Waves }[benefit.icon] || Zap;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-brand-gold/10 hover:border-brand-gold/40 transition-all group"
            >
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-500">
                <Icon className="text-brand-gold w-7 h-7 group-hover:text-brand-moss transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-ivory mb-3 tracking-wider">{benefit.title}</h3>
              <p className="text-brand-ivory/70 text-sm font-light leading-relaxed">{benefit.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-6 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl text-center max-w-2xl mx-auto"
      >
        <p className="text-brand-ivory/80 text-xs font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2">
          <span className="text-brand-gold">⚠️</span> ADVERTENCIA: SUSPENDE SU USO INMEDIATAMENTE SI APARECE IRRITACIÓN.
        </p>
      </motion.div>
    </div>
  </section>
);

const InteractiveGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % STEPS.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);

  const StepIcon = ({ name, className }: { name: string, className?: string }) => {
    if (name === "Droplets") return <Droplets className={className} />;
    if (name === "Sparkles") return <Sparkles className={className} />;
    if (name === "Waves") return <Waves className={className} />;
    if (name === "IceCream") return <Snowflake className={className} />;
    return <Sparkles className={className} />;
  };

  return (
    <section id="experiencia" className="py-24 bg-brand-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-moss mb-4 tracking-widest">Experiencia Paso a Paso</h2>
          <p className="text-brand-moss/70 max-w-2xl mx-auto font-light px-4">
            Sigue nuestra guía ritual para maximizar los beneficios de los minerales termales.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 w-full max-w-sm lg:max-w-none mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="bg-brand-moss rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 aspect-square flex items-center justify-center relative shadow-2xl shadow-brand-moss/30"
                >
                  <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                  <div className="w-32 h-32 rounded-full bg-brand-gold flex items-center justify-center shadow-xl shadow-brand-gold/20">
                    <StepIcon name={STEPS[currentStep].icon} className="w-16 h-16 text-brand-moss" />
                  </div>
                  <div className="absolute top-8 left-8 w-14 h-14 bg-brand-ivory rounded-full flex items-center justify-center font-serif font-bold text-brand-moss shadow-sm border border-brand-gold/20">
                    {STEPS[currentStep].id}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex-1 text-left">
              <div className="mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h3 className="text-2xl font-serif font-bold text-brand-moss mb-4 tracking-widest">{STEPS[currentStep].title}</h3>
                    <p className="text-lg text-brand-moss/80 leading-relaxed mb-6 font-light">
                      {STEPS[currentStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={prevStep}
                  className="p-4 rounded-full border border-brand-moss/20 hover:bg-brand-moss hover:text-brand-ivory transition-all text-brand-moss"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-3">
                  {STEPS.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-500 ${idx === currentStep ? 'w-10 bg-brand-gold' : 'w-3 bg-brand-moss/20'}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextStep}
                  className="p-4 rounded-full bg-brand-moss hover:bg-brand-moss/90 transition-all text-brand-ivory shadow-lg shadow-brand-moss/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-brand-moss rounded-[2.5rem] border border-brand-gold/20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Leaf className="w-20 h-20 text-brand-gold" />
            </div>
            <p className="text-brand-ivory italic font-serif text-xl leading-relaxed relative z-10">
              “Los poros se abren con la mascarilla, el hielo los cierra de golpe, logrando una piel luminosa y sin irritación.”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onOpenGuide }: { onOpenGuide: (type: 'pdf' | 'video') => void }) => (
  <section id="precios" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-moss mb-4 tracking-widest uppercase">Rituales de Belleza</h2>
        <p className="text-brand-moss/60 max-w-2xl mx-auto font-light">
          Invierte en la salud de tu piel con nuestras opciones de tratamiento.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Trial */}
        <div className="bg-brand-ivory/30 p-10 rounded-[3rem] border border-brand-brown/5 flex flex-col hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-serif font-bold text-brand-moss mb-2 tracking-widest uppercase">{PRICES.free.label}</h3>
          <p className="text-brand-moss/60 mb-8 text-xs font-light">{PRICES.free.description}</p>
          <div className="mb-8">
            <span className="text-3xl font-serif font-bold text-brand-moss">$0 USD</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {['Muestra de cortesía', 'Conoce la textura', 'Sin compromiso de compra'].map(item => (
              <li key={item} className="flex items-center gap-3 text-brand-moss/80 text-xs font-light">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                {item}
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/584245048325?text=Hola!%20Me%20gustaría%20solicitar%20una%20prueba%20gratuita%20de%20la%20mascarilla%20termal" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-white border border-brand-moss/20 text-brand-moss font-bold rounded-full text-center hover:bg-brand-ivory transition-all uppercase tracking-[0.2em] text-[9px]"
          >
            Solicitar Prueba
          </a>
        </div>

        {/* Single Application */}
        <div className="bg-brand-ivory/50 p-10 rounded-[3rem] border border-brand-brown/10 flex flex-col hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-serif font-bold text-brand-moss mb-2 tracking-widest uppercase">{PRICES.single.label}</h3>
          <p className="text-brand-moss/60 mb-8 text-xs font-light">{PRICES.single.description}</p>
          <div className="mb-8">
            <span className="text-3xl font-serif font-bold text-brand-moss">${PRICES.single.usd} USD</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {['Aplicación profesional', 'Guía paso a paso en vivo', 'Ideal para probar el producto'].map(item => (
              <li key={item} className="flex items-center gap-3 text-brand-moss/80 text-xs font-light">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                {item}
              </li>
            ))}
          </ul>
          
          <div className="grid grid-cols-2 gap-2 mb-8">
            <button 
              onClick={() => onOpenGuide('pdf')}
              className="flex items-center justify-center gap-2 py-3 bg-white border border-brand-moss/10 rounded-xl text-[9px] font-bold text-brand-moss uppercase tracking-widest hover:bg-brand-ivory transition-colors"
            >
              <FileText className="w-3 h-3 text-brand-gold" />
              Guía PDF
            </button>
            <button 
              onClick={() => onOpenGuide('video')}
              className="flex items-center justify-center gap-2 py-3 bg-white border border-brand-moss/10 rounded-xl text-[9px] font-bold text-brand-moss uppercase tracking-widest hover:bg-brand-ivory transition-colors"
            >
              <Video className="w-3 h-3 text-brand-gold" />
              Video
            </button>
          </div>

          <a 
            href="https://wa.me/584245048325?text=Hola!%20Deseo%20agendar%20una%20sesión%20de%20aplicación%20suelta%20de%20la%20mascarilla%20termal" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-brand-moss text-brand-ivory font-bold rounded-full text-center hover:bg-brand-moss/90 transition-all uppercase tracking-[0.2em] text-[9px]"
          >
            Agendar Ahora
          </a>
        </div>

        {/* Full Jar */}
        <div className="bg-brand-moss p-10 rounded-[3rem] relative overflow-hidden flex flex-col shadow-2xl shadow-brand-moss/40 border border-brand-gold/20">
          <div className="absolute top-6 right-6 bg-brand-gold text-brand-moss text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            Recomendado
          </div>
          <h3 className="text-xl font-serif font-bold text-brand-ivory mb-2 tracking-widest uppercase">{PRICES.jar.label}</h3>
          <p className="text-brand-ivory/60 mb-8 text-xs font-light">{PRICES.jar.description}</p>
          <div className="mb-8">
            <span className="text-3xl font-serif font-bold text-brand-ivory">${PRICES.jar.usd} USD</span>
          </div>
          <div className="bg-brand-gold/10 p-4 rounded-2xl mb-8 border border-brand-gold/20">
            <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
              Ahorro del 66% por aplicación
            </p>
            <p className="text-[9px] text-brand-ivory/60 mt-1 font-light">
              Solo $1 USD por sesión vs $3 USD habitual.
            </p>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {['50 aplicaciones garantizadas', 'Uso en la comodidad de tu hogar', 'Envío incluido (ciertas zonas)'].map(item => (
              <li key={item} className="flex items-center gap-3 text-brand-ivory/80 text-xs font-light">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-2 mb-8">
            <a 
              href="https://wa.me/584245048325?text=Hola!%20Deseo%20la%20guía%20PDF%20de%20la%20mascarilla" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-brand-ivory/10 border border-brand-gold/20 rounded-xl text-[9px] font-bold text-brand-ivory uppercase tracking-widest hover:bg-brand-ivory/20 transition-colors"
            >
              <FileText className="w-3 h-3 text-brand-gold" />
              Guía PDF
            </a>
            <a 
              href="https://wa.me/584245048325?text=Hola!%20Deseo%20ver%20el%20video%20tutorial%20de%20la%20mascarilla" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-brand-ivory/10 border border-brand-gold/20 rounded-xl text-[9px] font-bold text-brand-ivory uppercase tracking-widest hover:bg-brand-ivory/20 transition-colors"
            >
              <Video className="w-3 h-3 text-brand-gold" />
              Video
            </a>
          </div>

          <a 
            href="https://wa.me/584245048325?text=Hola!%20Deseo%20adquirir%20el%20frasco%20completo%20de%20la%20mascarilla%20termal" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-brand-gold text-brand-moss font-bold rounded-full text-center hover:bg-brand-gold/90 transition-all uppercase tracking-[0.2em] text-[9px]"
          >
            Comprar Ahora
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-brand-ivory/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-moss mb-4 tracking-widest uppercase">Casos de Éxito</h2>
        <p className="text-brand-moss/60 font-light">Resultados reales con nuestra mascarilla de lodo termal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { id: 1, img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600", text: "El cambio en mi piel fue inmediato. La grasa desapareció y mis poros se ven mucho más cerrados.", name: "Elena R." },
          { id: 2, img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600", text: "Llevo usándola un mes y mis espinillas han disminuido notablemente. Es mi ritual favorito.", name: "Natalia A." },
          { id: 3, img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600", text: "Me encanta la sensación de limpieza profunda. Mi piel se siente renovada y muy suave.", name: "Sofía M." }
        ].map((t) => (
          <div key={t.id} className="group overflow-hidden rounded-[2.5rem] bg-white border border-brand-brown/5 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img 
                src={t.img} 
                alt={`Testimonio ${t.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-moss/80 via-brand-moss/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-brand-ivory font-serif italic text-lg leading-relaxed">"{t.text}"</p>
                <p className="text-brand-gold text-xs font-bold mt-4 uppercase tracking-widest">- {t.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactCTA = () => (
  <section id="contacto" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-brand-moss p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl shadow-brand-moss/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-brand-ivory mb-6 sm:mb-8 tracking-widest leading-tight">¿Deseas una piel siempre bella?</h2>
        <p className="text-base sm:text-lg text-brand-ivory/70 mb-8 sm:mb-12 font-light max-w-2xl mx-auto">
          Escríbenos para agendar tu sesión o adquirir el frasco de 120g. Estamos para asesorarte en tu ritual de belleza.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="https://wa.me/584245048325" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-6 bg-brand-gold text-brand-moss font-bold rounded-full hover:bg-brand-gold/90 transition-all shadow-xl shadow-brand-gold/20 uppercase tracking-[0.2em] text-xs"
          >
            <MessageCircle className="mr-3 w-5 h-5" />
            WhatsApp Directo
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-brand-ivory/10 grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
          <div>
            <h4 className="font-serif font-bold text-brand-gold mb-6 tracking-widest text-sm uppercase">Pagos Seguros (Venezuela)</h4>
            <div className="flex flex-wrap gap-3">
              {['Pago Móvil', 'Efectivo', 'Transferencia'].map(method => (
                <span key={method} className="px-4 py-2 bg-brand-ivory/5 text-brand-ivory text-[10px] font-bold rounded-full border border-brand-ivory/10 uppercase tracking-widest">
                  {method}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-serif font-bold text-brand-gold mb-6 tracking-widest text-sm uppercase">WHATSAPP VENTAS</h4>
            <div className="space-y-6">
              <a 
                href="https://wa.me/584245048325" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-brand-ivory hover:text-brand-gold transition-colors group"
              >
                <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                  <MessageCircle className="w-5 h-5 text-brand-gold group-hover:text-brand-moss" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">WhatsApp Ventas</p>
                  <p className="text-sm font-bold">+58 424-5048325</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-moss text-brand-ivory/40 py-16 border-t border-brand-gold/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-lg shadow-brand-gold/10">
            <Mountain className="text-brand-moss w-6 h-6" />
          </div>
          <span className="font-serif font-bold text-brand-ivory tracking-[0.3em] text-sm uppercase">Termal Botanic Ritual</span>
        </div>
        
        <div className="flex gap-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
        </div>

        <p className="text-[10px] uppercase tracking-[0.3em] font-medium">
          © {new Date().getFullYear()} Termales. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeGuide, setActiveGuide] = useState<'pdf' | 'video' | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-gold selection:text-brand-moss">
      <Navbar />
      <main>
        <Hero />
        <OriginSection />
        <Benefits />
        <InteractiveGuide />
        <Pricing onOpenGuide={setActiveGuide} />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/584245048325?text=Hola!%20Deseo%20información%20sobre%20la%20mascarilla%20termal"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        title="Ventas y Asesoría"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold text-sm">
          Ventas y Asesoría
        </span>
      </a>

      {/* Guide Modal */}
      <AnimatePresence>
        {activeGuide && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-moss/90 backdrop-blur-md"
            onClick={() => setActiveGuide(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-ivory w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveGuide(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-brand-moss text-brand-ivory rounded-full hover:bg-brand-gold hover:text-brand-moss transition-colors"
              >
                <Waves className="w-5 h-5 rotate-45" />
              </button>

              <div className="p-12">
                <h3 className="text-3xl font-serif font-bold text-brand-moss mb-8 tracking-widest uppercase">
                  {activeGuide === 'pdf' ? 'Guía de Aplicación PDF' : 'Video Tutorial Ritual'}
                </h3>
                
                <div className="aspect-video bg-brand-moss/10 rounded-3xl flex items-center justify-center border-2 border-dashed border-brand-moss/20 overflow-hidden">
                  {activeGuide === 'video' ? (
                    <div className="text-center p-10">
                      <Video className="w-20 h-20 text-brand-gold mx-auto mb-6" />
                      <p className="text-brand-moss/70 mb-8 font-light">Aquí se reproducirá el video tutorial paso a paso del ritual termal.</p>
                      <a 
                        href="https://wa.me/584245048325?text=Hola!%20Deseo%20ver%20el%20video%20tutorial%20de%20la%20mascarilla" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-brand-moss text-brand-ivory rounded-full font-bold uppercase tracking-widest text-xs inline-block"
                      >
                        Solicitar Video por WhatsApp
                      </a>
                    </div>
                  ) : (
                    <div className="text-center p-10">
                      <FileText className="w-20 h-20 text-brand-gold mx-auto mb-6" />
                      <p className="text-brand-moss/70 mb-8 font-light">Aquí se visualizará tu guía PDF detallada con todos los secretos del ritual termal.</p>
                      <a 
                        href="https://wa.me/584245048325?text=Hola!%20Deseo%20la%20guía%20PDF%20de%20la%20mascarilla" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-brand-moss text-brand-ivory rounded-full font-bold uppercase tracking-widest text-xs inline-block"
                      >
                        Solicitar PDF por WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
