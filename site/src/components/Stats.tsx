import { motion } from "framer-motion";
import { site } from "../config/site";

const gridByCount: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 lg:grid-cols-5",
  6: "grid-cols-2 lg:grid-cols-6",
};

export default function Stats() {
  const count = site.stats.length;
  if (!count) return null;
  const cols = gridByCount[count] ?? "grid-cols-2 lg:grid-cols-3";
  return (
    <section className="relative z-10 px-4 md:px-6 pt-12 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className={`grid ${cols} sm:divide-x divide-gray-100 bg-white rounded-3xl shadow-ring p-2 md:p-4 border border-gray-100`}>
          {site.stats.map((s, i) => (
            <div key={i} className="text-center px-4 py-6 md:py-8">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-1.5 tracking-tightish">
                {s.valor}
              </div>
              <div className="text-secondary text-xs md:text-sm leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
