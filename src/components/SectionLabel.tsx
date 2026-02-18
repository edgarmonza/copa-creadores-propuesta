import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12"
    >
      <span className="text-gradient-purple font-display text-sm tracking-[0.2em]">
        {number}
      </span>
      <div className="h-px w-12 bg-gradient-to-r from-primary/50 to-transparent" />
      <span className="text-muted-foreground font-display text-sm tracking-[0.15em]">
        {title}
      </span>
    </motion.div>
  );
}
