import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { Crown, Rocket, TrendingUp } from "lucide-react";

const plans = [
  {
    icon: Crown,
    name: "360° PARTNER",
    price: "USD $60,000",
    description: "De principio a fin. Producción, experiencia digital y gestión de medios con nuestro partner estratégico.",
    features: [
      "Landing page inmersiva con experiencia personalizada",
      "Estrategia de contenido (4 momentos clave)",
      "Dirección creativa y producción audiovisual*",
      "Base de datos centralizada de leads (landing + WhatsApp + boletería)",
      "Flujos automatizados WhatsApp (bienvenida, post-compra, recordatorios)",
      "Pixel tracking instalado (Meta, Google, TikTok) para retargeting",
      "Dashboard de métricas de campaña para sponsors",
      "Estrategia de patrocinadores digitales",
      "Branding digital completo del evento",
      "Gestión con portafolio Spectro de atletas",
    ],
    extraLabel: "MEDIOS & DIFUSIÓN",
    extras: [
      "Gestión de pauta publicitaria con partner de medios (Meta, Google, TikTok)",
      "Community management del evento",
      "Coordinación integral de campaña de difusión",
      "Optimización de ad spend en tiempo real",
      "Exclusividad como socios de comunicación",
    ],
    highlight: true,
    revenue: "Comisión por patrocinadores gestionados por Spectro",
  },
  {
    icon: Rocket,
    name: "FULL STACK PARTNER",
    price: "USD $50,000",
    description: "Producción, experiencia digital y estrategia. Nosotros creamos, ustedes amplifican.",
    features: [
      "Landing page inmersiva con experiencia personalizada",
      "Estrategia de contenido (4 momentos clave)",
      "Dirección creativa y producción audiovisual*",
      "Base de datos centralizada de leads (landing + WhatsApp + boletería)",
      "Flujos automatizados WhatsApp (bienvenida, post-compra, recordatorios)",
      "Pixel tracking instalado (Meta, Google, TikTok) para retargeting",
      "Dashboard de métricas de campaña para sponsors",
      "Estrategia de patrocinadores digitales",
      "Branding digital completo del evento",
      "Gestión con portafolio Spectro de atletas",
    ],
    highlight: false,
    revenue: "Comisión por patrocinadores gestionados por Spectro",
  },
  {
    icon: TrendingUp,
    name: "GROWTH PARTNER",
    price: "USD $15,000",
    description: "Inversión base + participación en el éxito. Comprometidos con escalar juntos en LATAM.",
    features: [
      "Landing page del evento con experiencia personalizada",
      "Estrategia de contenido base",
      "Dirección creativa audiovisual*",
      "Flujo automatizado WhatsApp post-compra",
      "Base de datos de leads centralizada",
      "Pixel tracking instalado para retargeting",
      "Soporte y optimización pre-evento",
      "Alineados con el resultado",
    ],
    highlight: false,
    revenue: "10–15% del revenue de boletería + comisión por patrocinadores gestionados",
  },
];

export default function Investment() {
  return (
    <section id="investment" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel number="06" title="INVESTMENT" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
            PARTNERS DEL EVENTO
            <br />
            <span className="text-gradient-purple">Y DE LATAM</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            No somos proveedores de un evento. Somos los socios comprometidos con llevar este formato a toda Latinoamérica. Tres formas de empezar juntos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bento-card relative rounded-2xl p-8 ${
                plan.highlight
                  ? "border-primary/40 shadow-[0_0_30px_-5px_hsl(263_70%_50%/0.15)]"
                  : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-[10px] font-display tracking-[0.2em] px-4 py-1 rounded-full">
                    RECOMENDADO
                  </span>
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <plan.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-display text-sm tracking-[0.15em] text-muted-foreground mb-2">
                {plan.name}
              </h3>
              <div className="font-display text-3xl text-gradient-purple mb-2">
                {plan.price}
              </div>
              {plan.revenue && (
                <p className="text-sm text-primary/70 font-display tracking-wider mb-4">
                  + {plan.revenue}
                </p>
              )}
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                {plan.description}
              </p>

              <div className="space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{f}</span>
                  </div>
                ))}
              </div>

              {plan.extras && (
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-[10px] font-display tracking-[0.2em] text-primary/70 mb-4">
                    {plan.extraLabel}
                  </p>
                  <div className="space-y-3">
                    {plan.extras.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footnote + Note about negotiation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-xs text-muted-foreground/60 max-w-xl mx-auto">
            *La producción audiovisual está sujeta a la disponibilidad y acceso al talento (jugadores, creadores) que los organizadores faciliten. El ad spend (pauta publicitaria) está incluido únicamente en el plan 360° Partner.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Estamos abiertos a negociación. Esta es una primera propuesta — Bogotá es solo el primer capítulo de algo más grande en toda Latinoamérica.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20queremos%20hablar%20sobre%20la%20propuesta%20Copa%20de%20Creadores"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-block text-white text-base mb-6"
          >
            HABLEMOS
          </a>
          <p className="text-sm text-muted-foreground">
            andres@spec7ro.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
