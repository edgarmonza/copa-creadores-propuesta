import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://spectrolegends.monzalab.com/video/bg-loop.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Purple top glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(263_70%_50%/0.2),transparent_60%)]" />

      <div className="vignette-overlay absolute inset-0 z-[1]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Spectro badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 glass rounded-full px-6 py-2 mb-10"
        >
          <span className="text-xs font-display tracking-[0.2em] text-muted-foreground">
            SPECTRO
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-4">
            <span className="text-foreground">COPA DE</span>
            <br />
            <span className="text-gradient-purple">CREADORES</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="my-6"
        >
          <div className="section-divider max-w-md mx-auto" />
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.1em] text-muted-foreground mb-8"
        >
          LATAM <span className="text-gradient-purple">VS</span> EUROPA
        </motion.h2>

        {/* Event details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-display tracking-wider mb-12"
        >
          <span>9 DE MAYO 2026</span>
          <span className="text-primary/50">|</span>
          <span>ESTADIO EL CAMPÍN</span>
          <span className="text-primary/50">|</span>
          <span>BOGOTÁ, COLOMBIA</span>
        </motion.div>

        {/* Proposal label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="font-accent text-lg md:text-xl text-primary-glow/80 mb-12"
        >
          Propuesta de Comunicación Digital
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#opportunity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="btn-glow inline-block text-white"
        >
          VER PROPUESTA
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
