import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, className, children }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx("w-full py-16 md:py-24 px-4 md:px-6", className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}
