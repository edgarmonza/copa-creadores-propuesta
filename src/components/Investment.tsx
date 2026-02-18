import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { Rocket, TrendingUp } from "lucide-react";

const plans = [
  {
    icon: Rocket,
    name: "FULL STACK PARTNER",
    price: "USD $50,000",
    description: "Alcance completo. Sin revenue share. Ejecución total.",
    features: [
      "Landing page inmersiva del evento",
      "Estrategia de contenido (4 momentos clave)",
      "Dirección creativa y producción audiovisual*",
      "Estrategia de campaña de retargeting multi-canal",
      "Flujo automatizado WhatsApp post-compra",
      "Reporte de métricas de campaña",
      "Estrategia de patrocinadores digitales",
      "Branding digital completo del evento",
      "Experiencia de compra temática avanzada",
      "Gestión con portafolio Spectro de atletas",
      "Exclusividad como socios de comunicación",
    ],
    highlight: false,
    revenue: null,
  },
  {
    icon: TrendingUp,
    name: "GROWTH PARTNER",
    price: "USD $15,000",
    description: "Inversión base + participación en el éxito del evento",
    features: [
      "Landing page del evento",
      "Estrategia de contenido base",
      "Dirección creativa audiovisual*",
      "Estrategia de campaña digital",
      "Flujo WhatsApp post-compra",
      "Soporte pre-evento",
      "Alineados con el resultado",
    ],
    highlight: false,
    revenue: "10-15% del revenue de boletería",
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
            DOS FORMAS DE
            <br />
            <span className="text-gradient-purple">TRABAJAR JUNTOS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cada opción está diseñada para un nivel diferente de compromiso. Todas entregan resultados. Ustedes eligen la que mejor se ajuste a su visión.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card relative rounded-2xl p-8"
            >
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
            *La producción audiovisual está sujeta a la disponibilidad y acceso al talento (jugadores, creadores) que los organizadores faciliten. El ad spend (pauta publicitaria) no está incluido en ningún plan.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Estamos abiertos a negociación. Esta es una primera propuesta para que vean el nivel de lo que podemos hacer y lo que nos imaginamos juntos.
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
