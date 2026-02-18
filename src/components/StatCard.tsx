import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bento-card text-center py-8"
    >
      <div className="text-4xl md:text-5xl font-display text-gradient-purple mb-2">
        {value}
      </div>
      <div className="text-sm text-muted-foreground tracking-wide uppercase">
        {label}
      </div>
    </motion.div>
  );
}
