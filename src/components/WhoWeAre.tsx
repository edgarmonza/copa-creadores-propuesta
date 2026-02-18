import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { Film, Code, Zap, Camera, Globe, Bot } from "lucide-react";

const services = [
  { icon: Film, label: "Docuseries & Documentales" },
  { icon: Camera, label: "Producción audiovisual premium" },
  { icon: Globe, label: "Contenido para Netflix, HBO, FIFA" },
  { icon: Code, label: "Landing pages inmersivas" },
  { icon: Bot, label: "Automatización con agentes de IA" },
  { icon: Zap, label: "Campañas digitales & retargeting" },
];

const projects = [
  {
    title: "SPECTRO LEGENDS",
    subtitle: "Juan Fernando Quintero",
    description: "Docuserie del goleador histórico del fútbol colombiano. Producción en negociación con Disney.",
    tags: ["Documental", "Deportes", "Disney"],
    image: "/legends/Juanferriver.png",
  },
  {
    title: "DAIRO MORENO",
    subtitle: "Podcast documental + Novela",
    description: "Podcast documental de la vida del goleador histórico y novela actuada. Producción en curso.",
    tags: ["Podcast", "Novela", "Deportes"],
    image: "/legends/Dayro.png",
  },
  {
    title: "MI GOL MUNDIALISTA",
    subtitle: "Tito Puchetti x Spectro",
    description: "Todos los jugadores colombianos que han marcado un gol en un mundial. James, Jerry Mina, Quintero.",
    tags: ["Serie", "Mundial 2026", "En desarrollo"],
    image: "/legends/Juanfer vs polonia.png",
  },
  {
    title: "ATLÉTICO NACIONAL",
    subtitle: "80 años de historia",
    description: "Narración de Carlo Ancelotti. Múltiples capítulos contando la historia del club más grande de Colombia.",
    tags: ["Docuserie", "Fútbol", "Premium"],
    image: "/legends/Nacional.png",
  },
];

const portfolioImages = Array.from({ length: 12 }, (_, i) => `/portfolio/portfolio-${String(i + 1).padStart(2, "0")}.jpg`);

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel number="02" title="WHO WE ARE" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
            CONTENIDO QUE GENERA DESEO
            <br />
            <span className="text-gradient-purple">TECNOLOGÍA QUE CONVIERTE</span>
          </h2>
          <p className="font-accent text-lg text-primary-glow/70 max-w-2xl mx-auto">
            Un equipo que no existe en el mercado
          </p>
        </motion.div>

        {/* Spectro services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card p-8 mb-20 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <h3 className="font-display text-xl tracking-wider">SPECTRO</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Capturamos la luz de atletas, visionarios y creadores extraordinarios, transformándola en narrativas cinematográficas y experiencias digitales que convierten atención en ventas.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reel video showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-6">
            NUESTRO REEL
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-border aspect-video max-w-4xl mx-auto glow-purple-sm">
            <video
              controls
              playsInline
              poster="/legends/Juanferriver.png"
              className="w-full h-full object-cover"
            >
              <source src="/video/hero-reel.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Projects with images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-8">
            PROYECTOS EN DESARROLLO
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bento-card p-0 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_6%)] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-sm tracking-wider text-gradient-purple mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 font-accent">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-display tracking-wider px-2 py-1 rounded-full border border-primary/20 text-primary/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-8">
            PORTFOLIO — SPECTRO PRODUCTION
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {portfolioImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
