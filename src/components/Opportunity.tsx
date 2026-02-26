import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import StatCard from "./StatCard";
import { Users, Tv, Globe, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "25,000+ asistentes",
    description: "Validados en el primer evento. Formato probado con lleno total en El Campín.",
  },
  {
    icon: Tv,
    title: "Transmisión ESPN",
    description: "Cobertura en vivo internacional, programación previa y posterior al evento.",
  },
  {
    icon: Globe,
    title: "Alcance Colombia + LATAM",
    description: "Audiencia masiva en Colombia y presencia en Argentina, México, Chile, Perú y más.",
  },
  {
    icon: TrendingUp,
    title: "Ronaldinho confirmado",
    description: "78.2M seguidores. La estrella global que lidera el equipo Colombia All Stars.",
  },
];

const stats = [
  { value: "100M+", label: "Visualizaciones" },
  { value: "300M+", label: "Impresiones" },
  { value: "40K", label: "Asistentes" },
  { value: "500+", label: "Publicaciones" },
];

const creatorsTeam = [
  { name: "@westcol", followers: "14M+", range: "14-30" },
  { name: "@zionhwang_", followers: "6M", range: "18-35" },
  { name: "@julianpinillaaa", followers: "5.5M", range: "18-35+" },
];

const allStarsTeam = [
  { name: "Ronaldinho", followers: "78.2M", range: "18-45", confirmed: true },
  { name: "Tino Asprilla", followers: "—", range: "25-50+", confirmed: false },
  { name: "Dairo Moreno", followers: "—", range: "20-45", confirmed: false },
];

export default function Opportunity() {
  return (
    <section id="opportunity" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel number="01" title="THE OPPORTUNITY" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
              CREADORES
              <br />
              <span className="text-gradient-purple">VS LEYENDAS</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La Selección Colombia de Creadores de Contenido se enfrenta al equipo Colombia All Stars liderado por Ronaldinho, con leyendas del fútbol colombiano. Un evento que cruza entretenimiento, fútbol y cultura digital en un solo escenario.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Con transmisión por ESPN, El Campín como sede y una audiencia digital masiva, la Copa de Creadores no es solo un evento — es un formato diseñado para replicarse en toda Latinoamérica.
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

        {/* Teams grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-20">
          {/* Selección Creadores */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card p-6"
          >
            <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-6">
              SELECCIÓN CREADORES
            </p>
            <div className="space-y-3">
              {creatorsTeam.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="font-display text-xs text-primary">{c.name.charAt(1).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="text-sm font-display tracking-wider text-foreground/90">{c.name}</p>
                      <p className="text-[10px] text-muted-foreground">{c.range} años</p>
                    </div>
                  </div>
                  <p className="text-gradient-purple font-display text-sm">{c.followers}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colombia All Stars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card p-6"
          >
            <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-6">
              COLOMBIA ALL STARS
            </p>
            <div className="space-y-3">
              {allStarsTeam.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="font-display text-xs text-primary">{c.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="text-sm font-display tracking-wider text-foreground/90">{c.name}</p>
                      <p className="text-[10px] text-muted-foreground">{c.range} años</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {c.followers !== "—" && <p className="text-gradient-purple font-display text-sm">{c.followers}</p>}
                    <span className={`text-[10px] font-display tracking-wider ${c.confirmed ? "text-green-400" : "text-primary/50"}`}>
                      {c.confirmed ? "CONFIRMADO" : "EN GESTIÓN"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground/50 text-center mt-4">
              Spectro gestiona con su portafolio de atletas para sumar más leyendas
            </p>
          </motion.div>
        </div>

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
              Les falta el motor digital y la experiencia que llene esas 40,000 sillas, que haga del evento algo inolvidable, y que construya un formato tan poderoso que se replique en toda Latinoamérica.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
