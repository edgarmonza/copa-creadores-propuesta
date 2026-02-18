import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import StatCard from "./StatCard";
import { Users, Tv, Globe, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "25,000+ asistentes",
    description: "validados en el primer evento. Formato probado con lleno total en El Campín.",
  },
  {
    icon: Tv,
    title: "Transmisión ESPN",
    description: "Cobertura en vivo internacional, programación previa y posterior al evento.",
  },
  {
    icon: Globe,
    title: "Alcance global",
    description: "Presencia en Argentina, México, Chile, Perú, Venezuela y más de 10 países.",
  },
  {
    icon: TrendingUp,
    title: "Ronaldinho confirmado",
    description: "78.2M seguidores. Junto a Puyol, Xavi y los creadores más grandes de LATAM.",
  },
];

const stats = [
  { value: "100M+", label: "Visualizaciones" },
  { value: "300M+", label: "Impresiones" },
  { value: "40K", label: "Asistentes" },
  { value: "500+", label: "Publicaciones" },
];

const creators = [
  { name: "@ronaldinho", followers: "78.2M", range: "18-45" },
  { name: "@lagranjadelborrego", followers: "61M", range: "7-25+" },
  { name: "@carles5puyol", followers: "13.8M", range: "18-40+" },
  { name: "@xavi", followers: "12M", range: "18-40+" },
  { name: "@zionhwang_", followers: "6M", range: "18-35" },
  { name: "@julianpinillaaa", followers: "5.5M", range: "18-35+" },
];

export default function Opportunity() {
  return (
    <section id="opportunity" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel number="01" title="THE OPPORTUNITY" />

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
              DOS CONTINENTES
              <br />
              <span className="text-gradient-purple">UNA NOCHE</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Un evento internacional de fútbol que combina competencia, entretenimiento y cultura contemporánea en un solo escenario. La Copa de Creadores reúne a creadores de alto alcance, personalidades del fútbol y figuras icónicas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Con transmisión internacional por ESPN, un estadio emblemático y una narrativa global, el evento está concebido como un espectáculo deportivo de gran escala donde el fútbol se cruza con el entretenimiento moderno.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex gap-4 items-start group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm tracking-wider text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Creators grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-8">
            FIGURAS CONFIRMADAS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {creators.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bento-card p-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-xs text-primary">{c.name.charAt(1).toUpperCase()}</span>
                </div>
                <p className="text-xs font-display tracking-wider text-foreground/90 mb-1">{c.name}</p>
                <p className="text-gradient-purple font-display text-sm">{c.followers}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{c.range} años</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The pain point */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0">
            <img
              src="/legends/quintero-celebration.jpg"
              alt="Stadium"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80" />
          </div>
          <div className="relative border-gradient-purple rounded-2xl p-8 md:p-12 text-center">
            <p className="font-accent text-xl md:text-2xl text-primary-glow/80 mb-4">
              "El dolor"
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              TIENEN EL TALENTO, EL ESTADIO Y LA TRANSMISIÓN
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Les falta el motor digital que llene esas 40,000 sillas, que convierta cada pieza de contenido en una boleta vendida y que escale este formato a toda Latinoamérica.
            </p>
          </div>
        </motion.div>

        {/* Stats from first event */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-8">
            RESULTADOS DEL PRIMER EVENTO — 2025
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
