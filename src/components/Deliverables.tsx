import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { Check, X } from "lucide-react";

const included = [
  "Landing page inmersiva del evento (diseño y desarrollo web)",
  "Estrategia de contenido (calendario editorial y guía de momentos clave)",
  "Diseño de experiencia de compra temática (Selección Creadores vs Colombia All Stars)",
  "Estrategia de campaña de retargeting multi-canal (Meta, Google, TikTok)",
  "Flujo automatizado WhatsApp post-compra (confirmación + info del evento)",
  "Base de datos centralizada de leads (landing + WhatsApp + boletería)",
  "Pixel tracking multi-plataforma (Meta, Google, TikTok) listo para retargeting",
  "Dashboard de métricas en tiempo real para sponsors",
  "Integración con plataforma de boletería (widget)",
  "Dirección creativa y producción audiovisual (sujeto a acceso al talento)",
  "Gestión con portafolio Spectro de atletas para sumar jugadores al evento",
  "Asesoría en estrategia de lanzamiento",
  "Soporte y optimización durante la campaña pre-evento",
];

const excluded = [
  "Pauta publicitaria (ad spend) — incluida solo en plan 360°, se cotiza aparte en otros planes",
  "Community management — incluido solo en plan 360°, se cotiza aparte en otros planes",
  "Producción del evento en sí (logística, tarima, sonido, transmisión)",
  "Confirmación de jugadores — gestionamos con nuestro portafolio de atletas, pero la participación depende de cada jugador",
  "Coordinación de agendas y disponibilidad del talento para filmación",
  "Desarrollo o integración de pasarela de pagos / ticketera",
  "Campañas de relaciones públicas o prensa tradicional",
];

export default function Deliverables() {
  return (
    <section id="deliverables" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel number="04" title="DELIVERABLES" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
            QUÉ RECIBEN
            <br />
            <span className="text-gradient-purple">EXACTAMENTE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Sin ambigüedades. Sin sorpresas. Esto es exactamente lo que entregamos y lo que no está incluido en la propuesta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card p-5 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <h3 className="font-display text-sm tracking-wider">INCLUIDO</h3>
            </div>
            <div className="space-y-4">
              {included.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex gap-3 items-start"
                >
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Excluded */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card p-5 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="font-display text-sm tracking-wider">NO INCLUIDO</h3>
            </div>
            <div className="space-y-4">
              {excluded.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex gap-3 items-start"
                >
                  <X className="w-4 h-4 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Spacer + note */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground font-accent">
                "No jugamos a la agencia. Somos los socios que les van a llenar el estadio."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
