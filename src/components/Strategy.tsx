import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { Video, Users, Radio, Target, ShoppingCart, MessageCircle } from "lucide-react";

const contentMoments = [
  {
    icon: Video,
    phase: "MOMENTO 1",
    title: '"TE CONVOCO"',
    description:
      "Ronaldinho graba un video convocando a su equipo Colombia All Stars. Cada semana se revela un nuevo fichaje de leyendas colombianas. Genera expectativa viral semana a semana.",
    timing: "Semana 1-4",
  },
  {
    icon: Users,
    phase: "MOMENTO 2",
    title: "LA RESPUESTA",
    description:
      'Los influenciadores responden al reto. "¿Que nos bailan? Papi, yo los bailo." Cada creador genera contenido desde su canal amplificando el evento.',
    timing: "Semana 2-5",
  },
  {
    icon: Radio,
    phase: "MOMENTO 3",
    title: "WESTCOLL LIVE",
    description:
      "Ronaldinho va al canal de Westcol en vivo. Cuentan del partido, abren boleterìa en vivo. Primer pico masivo de ventas.",
    timing: "Semana 4",
  },
  {
    icon: Target,
    phase: "MOMENTO 4",
    title: "RETARGETING MASIVO",
    description:
      "Campañas pagadas post-contenido orgánico. Retargeting a todos los que interactuaron. Segundo y tercer pico de ventas.",
    timing: "Semana 4-8",
  },
];

const digitalFunnel = [
  {
    icon: ShoppingCart,
    title: "Landing de compra temática",
    description:
      "Página de aterrizaje del evento con la experiencia Selección Creadores vs Colombia All Stars. Diseño inmersivo que dirige al flujo de compra de boletas.",
  },
  {
    icon: MessageCircle,
    title: "Flujo WhatsApp post-compra",
    description:
      "Mensaje automatizado de confirmación después de la compra con información del evento, fecha, ubicación y equipo seleccionado.",
  },
  {
    icon: Target,
    title: "Reporte de métricas para sponsors",
    description:
      "Reporte consolidado de métricas clave para patrocinadores: alcance de campaña, engagement por canal y rendimiento de contenido.",
  },
];

export default function Strategy() {
  return (
    <section id="strategy" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel number="03" title="THE STRATEGY" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
            CONTENIDO QUE VENDE
            <br />
            <span className="text-gradient-purple">BOLETAS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Cada pieza de contenido está diseñada con un único objetivo: llenar El Campín. No hacemos contenido bonito que no convierte. Hacemos contenido que genera urgencia de compra.
          </p>
        </motion.div>

        {/* Content timeline */}
        <div className="relative mb-24">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {contentMoments.map((moment, i) => (
              <motion.div
                key={moment.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 md:ml-0"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <moment.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="bento-card flex-1 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] font-display tracking-[0.2em] text-primary/70 border border-primary/20 rounded-full px-3 py-1">
                      {moment.phase}
                    </span>
                    <span className="text-[10px] font-display tracking-wider text-muted-foreground">
                      {moment.timing}
                    </span>
                  </div>
                  <h3 className="font-display text-lg tracking-wider mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Digital funnel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-8">
            LA BAJADA DIGITAL
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {digitalFunnel.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bento-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-sm tracking-wider mb-3">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
